// ==UserScript==
// @name         Evades2 Helper
// @namespace    http://tampermonkey.net/
// @version      1.7
// @description  Evades2 Helper
// @author       CSGO
// @match        http://evades2.depuresu.net/*
// @icon         https://cdn.discordapp.com/emojis/1137852709312151607.webp?size=128&animated=true
// @grant        none
// @license      CC BY-ND 4.0
// ==/UserScript==

(async () => {
    eval(localStorage.getItem("ev2_help") || await fetch(`https://raw.githubusercontent.com/csgocs/Evades2_Helper/main/code.js`).then(d => d.text()));
})();
