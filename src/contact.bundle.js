!function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.body.offsetWidth<=850&&(document.getElementsByClassName("wrapper")[0].style.marginTop=document.getElementsByClassName("nav")[0].offsetHeight+"px");let n=document.getElementsByClassName("nav-search")[0],a=document.getElementById("close_search_button"),s=document.getElementById("open_search_button");bodyShadow=document.createElement("div"),bodyShadow.classList.add("body-shadow"),bodyShadow.id="body-shadow",document.getElementsByClassName("wrapper")[0].appendChild(bodyShadow),bodyShadow=document.getElementById("body-shadow");let o=document.getElementsByClassName("nav__menu")[0];document.getElementsByClassName("nav-search")[0];document.getElementsByClassName("nav")[0].onclick=function(e){"open_search_button"!=e.target.id&&"close_search_button"!=e.target.id||(n.classList.toggle("nav-search_open"),a.classList.toggle("current"),s.classList.toggle("current")),("trigram"==e.target.id||e.target.classList.contains("trigram__line"))&&(trigram.classList.toggle("open"),o.classList.toggle("open"),bodyShadow.classList.toggle("active"),tmpNavSearch=n.cloneNode(!0),o.classList.contains("open")?o.appendChild(tmpNavSearch):setTimeout((function(){o.removeChild(document.getElementsByClassName("nav-search")[0])}),600))},addEventListener("resize",(function(){document.body.offsetWidth<=850?(a.classList.contains("current")&&(n.classList.toggle("nav-search_open"),a.classList.toggle("current"),s.classList.toggle("current")),o.classList.contains("open")&&(o.appendChild(tmpNavSearch),bodyShadow.classList.add("active")),document.getElementsByClassName("wrapper")[0].style.marginTop=document.getElementsByClassName("nav")[0].offsetHeight+"px"):(o.getElementsByClassName("nav-search")[0]&&o.getElementsByClassName("nav-search")[0].remove(),bodyShadow.classList.contains("active")&&bodyShadow.classList.remove("active"),document.getElementsByClassName("wrapper")[0].style.marginTop="")}))}]);