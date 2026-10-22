import theme from "./theme.js"
import keys from "./keys.js"
import searchEngines from "./search-engines.js"

const lurkSites = [
  "mail.google.com",
  "youtube.com",
]
const lurkSitesRegex = new RegExp(lurkSites.map(site => site.replace('.', '\\.')).join('|'));

export default {
  settings: {
    hintAlign: "left",
omnibarSuggestionTimeout: 500,
    richHintsForKeystroke: 500,
    defaultSearchEngine: "g",
    stealFocusOnLoad: false,
    theme,
    // Allow uppercase hint chars to open in new tab
    hintShiftNonActive: true,
    // lurkingPattern: lurkSitesRegex
  },

  keys,
  searchEngines,

  // Leader for site-specific mappings
  siteleader: "<Space>",

  // Leader for OmniBar searchEngines
  searchleader: "a",

  // Array containing zero or more log levels to enable: log, warn, error
  logLevels: [
    // "log",
    // "warn",
    "error",
  ],
}
