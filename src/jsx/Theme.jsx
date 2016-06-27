'use strict';

export let THEME = 'default';

export function requireCss(pack) {
    require([`css!../theme/${THEME}/${pack}.min.css`]);
}

export function setTheme (theme) {
    THEME = theme;
}
