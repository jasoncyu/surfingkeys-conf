import conf from "./conf.js"
import help from "./help.js"
import api from "./api.js"

const { categories } = help
const {
  mapkey,
  map,
  unmap,
  unmapAllExcept,
  Clipboard,
  Front,
  removeSearchAlias,
  addSearchAlias,
  Hints,
} = api


// mapkey('<Ctrl-y>', 'Show me the money', function() {
//     api.Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
// });

const registerKey = (domain, mapObj, siteleader) => {
  const {
    alias,
    callback,
    leader = domain === "global" ? "" : siteleader,
    category = categories.misc,
    description = "",
    path = "(/.*)?",
  } = mapObj
  const opts = {}

  const key = `${leader}${alias}`

  if (domain !== "global") {
    const d = domain.replace(".", "\\.")
    opts.domain = new RegExp(`^http(s)?://(([a-zA-Z0-9-_]+\\.)*)(${d})${path}`)
  }

  const fullDescription = `#${category} ${description}`

  if (typeof mapObj.map !== "undefined") {
    map(alias, mapObj.map)
  } else {
    mapkey(key, fullDescription, callback, opts)
  }
}

const registerKeys = (maps, aliases, siteleader) => {
  const hydratedAliases = Object.entries(
    aliases
  ).flatMap(([baseDomain, aliasDomains]) =>
    aliasDomains.flatMap((a) => ({ [a]: maps[baseDomain] }))
  )

  const mapsAndAliases = Object.assign({}, maps, ...hydratedAliases)

  Object.entries(mapsAndAliases).forEach(([domain, domainMaps]) =>
    domainMaps.forEach((mapObj) => registerKey(domain, mapObj, siteleader))
  )
}

const registerSearchEngines = (searchEngines, searchleader) =>
  Object.values(searchEngines).forEach((s) => {
    const options = {
      favicon_url: s.favicon,
      skipMaps: true,
    }
    addSearchAlias(
      s.alias,
      s.name,
      s.search,
      "",
      s.compl,
      s.callback,
      undefined,
      options
    )
    mapkey(`${searchleader}${s.alias}`, `#8Search ${s.name}`, () =>
      Front.openOmnibar({ type: "SearchEngine", extra: s.alias })
    )
    mapkey(
      `c${searchleader}${s.alias}`,
      `#8Search ${s.name} with clipboard contents`,
      () => {
        Clipboard.read((c) => {
          Front.openOmnibar({
            type: "SearchEngine",
            pref: c.data,
            extra: s.alias,
          })
        })
      }
    )
  })

const main = async () => {
  window.surfingKeys = api
  if (conf.settings) {
    Object.assign(
      settings,
      typeof conf.settings === "function" ? conf.settings() : conf.settings
    )
  }

  if (conf.logLevels) {
    await chrome.storage.local.set({
      logLevels: conf.logLevels,
    })
  }

  if (conf.keys && conf.keys.unmaps) {
    const { unmaps } = conf.keys
    if (unmaps.mappings) {
      unmaps.mappings.forEach((m) => unmap(m))
    }
    if (unmaps.searchAliases) {
      Object.entries(unmaps.searchAliases).forEach(([leader, items]) => {
        items.forEach((v) => removeSearchAlias(v, leader))
      })
    }
  }

  if (conf.searchEngines) {
    registerSearchEngines(conf.searchEngines, conf.searchleader ?? "o")
  }

  if (conf.keys && conf.keys.maps) {
    const { keys } = conf
    const { maps, aliases = {} } = keys
    registerKeys(maps, aliases, conf.siteleader)
  }

  // Custom
  // Source: https://tinyurl.com/ytdabn56
  mapkey("F", "#1Open a link in active new tab", () => {
    Hints.create("", Hints.dispatchMouseClick, {tabbed: true, active: true});
  });

  // API docs: https://github.com/brookhong/Surfingkeys/blob/5940fb2cfac098c3347db9cbb6b47205d9c83641/docs/API.md?plain=1#L86
  // Toggle surfingkeys
  mapkey("<Ctrl-y>", "#0 Passthru mode toggle", () => {
    // api.Front.showPopup('passthru on')
    api.Normal.passThrough()
  })

  // only keep E, R and T from Surfingkeys for gmail.com and twitter.com
  unmapAllExcept(['f','F', 'd', 'u'], /mail.google.com|youtube.com/);
}

if (typeof window !== "undefined") {
  main()
}
