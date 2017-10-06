// ==UserScript==
// @name         openloaddownloader
// @namespace    com.vincentmarnier.openloaddownloader
// @version      0.2
// @description  Add download link to openload streaming link
// @author       VincentMarnier
// @include      http://openload.co/embed/*
// @include      https://openload.co/embed/*
// @include      http://oload.info/embed/*
// @include      http://oload.info/embed/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const downloadUrl = document.URL.toString().replace("embed", "f");
    const header = `<div id="OpenLoadDownloaderHeader" style="background: black; color: white; display: flex; flex-direction: row">
                      <span style="flex:1"><b>OpenloadDownloader:</b> <a href="` + downloadUrl + `" target="_top" style="color:grey">Download link</a></span>
                      <a id="OpenLoadDownloaderHeaderClose" href="#" style="color:grey">[x]</a>
                    </div>`;
    document.body.innerHTML = header + document.body.innerHTML;
    document.getElementById('OpenLoadDownloaderHeaderClose').addEventListener("click", () => { document.getElementById('OpenLoadDownloaderHeader').style.display = 'none'; });
})();