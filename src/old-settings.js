
// settings.showModeStatus = true;
// Use emacs editor for forms
// settings.aceKeybindings = "emacs";
// settings.showProxyInStatusBar = true;
console.log('reached');
api.Hints.setCharacters('asdfghjkl;qweruiozxcvnm,tpb');
api.Hints.style('font-family: Arial; font-size: 14px;');
api.map('u', 'e');
// toggle fullscreen, mainly because of YouTube
api.mapkey('q', '#3Toggle fullscreen', ( ) => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen() )
settings.tabsThreshold = 0;
// api.mapkey('p', "Open the clipboard's URL in the current tab", function() {
//     Front.getContentFromClipboard(function(response) {
//         window.location.href = response.data;
//     });
// });
api.map('<Ctrl-Alt-z>', '<Alt-s>');
api.map('p', '<Alt-i>'); // Map p to toggle passthrough mode.
// api.map('i', '<Alt-i>');
api.map('P', 'cc');
api.map('gi', 'i');
api.map('F', 'gf');
api.map('gf', 'w');
api.map('`', '\'');
// save default key `t` to temp key `>_t`
api.map('>_t', 't');
// create a new key `t` for default key `on`
api.map('t', 'on');
// create a new key `o` for saved temp key `>_t`
api.map('o', '>_t');
api.map('H', 'S');
api.map('L', 'D');
api.map('gt', 'R');
api.map('gT', 'E');
api.map('K', 'E');
api.map('J', 'R');
// an example to create a new mapping `ctrl-y`
api.mapkey('<ctrl-y>', 'Show me the money', function() {
    Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
});

// an example to replace `T` with `gt`, click `Default mappings` to see how `T` works.
api.map('gt', 'T');

// an example to remove mapkey `Ctrl-i`
api.unmap('<ctrl-i>');

// set theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 14pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 12px;
    position: fixed;
    top: 0;
    left: 0;
    width: 60px;
    height: 15px;
}`;
// click `Save` button to make above settings to take effect.</ctrl-i></ctrl-y>
