export default `
:root {
    --color-shadow: rgba(0, 0, 0, 0.7);

    --color-bg-0: #1e1e2f;
    --color-bg-1: #2b2b3d;
    --color-bg-2: #35354a;
    --color-bg-3: #3f3f5a;

    --color-fg-0: #ffffff;
    --color-fg-1: #d1d1e0;
    --color-fg-2: #c0c0d0;
    --color-fg-3: #a1a1b8;

    --color-accent-0: #8a7ca3;
    --color-accent-1: #a18bcc;
    --color-accent-2: #b3a1d9;
    --color-accent-3: #9c86c6;
    --color-accent-4: #ff4d4d;
}

body {
    color: var(--color-fg-2);
    background-color: var(--color-bg-0);
}

#sk_omnibar {
    background-color: var(--color-bg-1) !important;
    color: var(--color-fg-3) !important;
    box-shadow: 0px 3px 15px -6px var(--color-shadow) !important;
}

#sk_omnibar .prompt {
    color: var(--color-accent-0) !important;
}

#sk_omnibar .separator {
    color: var(--color-accent-1) !important;
}

#sk_omnibar input {
    color: var(--color-fg-1) !important;
}

#sk_omnibarSearchResult {
    border-top: 1px solid var(--color-accent-2) !important;
}

#sk_omnibar li.focused {
    background-color: var(--color-bg-2) !important;
    color: var(--color-fg-1) !important;
}

#sk_banner,
#sk_keystroke {
    border: 1px solid var(--color-accent-3);
    background: var(--color-bg-1);
}

#sk_keystroke .annotation {
    color: var(--color-fg-2);
}

#sk_keystroke kbd {
    color: var(--color-fg-0);
    background: var(--color-bg-3);
}

#sk_keystroke kbd .candidates {
    color: var(--color-accent-4);
}

* {
    font-family: "Sudo Nerd Font Mono", "Sudo Mono", "Sudo",
    "Input Mono Nerd Font", "Input Mono", "DejaVu Sans Mono", "DejaVu", "Arial",
    sans-serif;
}

body {
    font-size: 12pt;
}

#sk_keystroke kbd {
    font-size: 10pt;
}

#sk_omnibarSearchArea {
    margin: 0 !important;
    padding: 0.5rem 1rem !important;
    border-bottom: none !important;
}

#sk_omnibarSearchResult {
    margin: 0 !important;
    max-height: unset;
}

#sk_omnibar li {
    background: none !important;
    padding: 0.35rem 0.5rem !important;
}

#sk_omnibarSearchResult > ul:nth-child(1) {
    margin-bottom: 0px !important;
    padding: 0 !important;
    padding-bottom: 10px !important;
}

#sk_omnibar .separator {
    padding-left: 8px !important;
}

/* Disable RichHints CSS animation */
.expandRichHints {
    animation: none;
}
.collapseRichHints {
    animation: none;
}

/* Custom OmniBar styles */

.pill {
    background-color: #ff4d4d;
    color: white;
    border-radius: 10px;
    padding: 2px 8px;
}`
