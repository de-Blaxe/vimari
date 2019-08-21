function getSettings() {
    return {
        'modifier': undefined,
        'excludedUrls': '',

        'hintToggle': 'f',
        'newTabHintToggle': 'shift+f',
        'linkHintCharacters': 'asdfjklqwerzxc',
        'detectByCursorStyle': false,

        'scrollUp': 'k',
        'scrollDown': 'j',
        'scrollLeft': 'h',
        'scrollRight': 'l',
        'scrollSize': 75,
        'scrollUpHalfPage': 'e',
        'scrollDownHalfPage': 'd',
        'goToPageTop': 'g g',
        'goToPageBottom': 'shift+g',

        'goBack': 'shift+h',
        'goForward': 'shift+l',
        'reload': 'r',
        'tabForward': 'w',
        'tabBack': 'q',
        'closeTab': 'x',
        'closeTabReverse': 'shift+x',

        'openTab': 't',
    };
}

window.getSettings = getSettings;
