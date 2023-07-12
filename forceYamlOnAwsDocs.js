// ==UserScript==
// @name         Force YAML on AWS docs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       githhub.com/vintagefuture
// @match        https://docs.aws.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function modifyDOM() {
        const dropDowns = document.querySelectorAll('[id^="trigger-content-"]');
        const codeSelector = dropDowns[1];
        codeSelector.innerHTML = "YAML";
        const jsonCode = document.querySelectorAll('#JSON.section.langfilter');
        jsonCode.forEach(element => {
            element.style.display = 'none';
        });
    }
   document.addEventListener('DOMContentLoaded', modifyDOM());
})();
