function inIframe(){try{return window.self!==window.top;}catch(e){return true;}}
if(inIframe()){while(document.querySelectorAll("[hide-if-embedded=true]")[0]){document.querySelectorAll("[hide-if-embedded=true]")[0].remove()};var prohibited_urls = [];document.querySelectorAll('[hide-if-embedded=true]').forEach(e => prohibited_urls.push(e.href));if(prohibited_urls.indexOf(window.location.href)>=0) window.location.href=document.querySelectorAll('[default-on-embed=true]')[0].href;
}