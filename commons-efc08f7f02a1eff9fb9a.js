(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,r){"use strict";var n,o=r("q1tI"),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),p.canUseDOM?t(s):r&&(s=r(s))}var p=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(p,"canUseDOM",c),p}}},Bl7J:function(e,t,r){"use strict";r.d(t,"a",(function(){return A}));var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),i=r("7ljp"),c=r("rePB"),s=(r("E9XD"),{plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]}),l={Prism:r("SVOR").a,theme:s};function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},h=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=p({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=p({},r,{backgroundColor:null}),o};function m(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var b=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?h(e.theme,e.language):void 0;return t.themeDict=r})),u(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,a=p({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),u(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var i=n?{display:"inline-block"}:{},c=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(c))}})),u(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,a=e.token,i=p({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?p({},i.style,o):o),void 0!==r&&(i.key=r),n&&(i.className+=" "+n),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],a=0,i=0,c=[],s=[c];i>-1;){for(;(a=n[i]++)<o[i];){var l=void 0,u=t[i],p=r[i][a];if("string"==typeof p?(u=i>0?u:["plain"],l=p):(u=d(u,p.type),p.alias&&(u=d(u,p.alias)),l=p.content),"string"==typeof l){var h=l.split(f),m=h.length;c.push({types:u,content:h[0]});for(var b=1;b<m;b++)y(c),s.push(c=[]),c.push({types:u,content:h[b]})}else i++,t.push(u),r.push(l),n.push(0),o.push(l.length)}i--,t.pop(),r.pop(),n.pop(),o.pop()}return y(c),s}(void 0!==i?t.tokenize(n,i,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),g={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},v={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]};function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=r("qhky"),k=["/blog","/projects"],E={pre:function(e){return o.a.createElement("div",e)},code:function(e){var t=e.children,r=e.className,a=void 0===r?"":r,i=Object(n.useState)(!1),c=i[0],s=i[1];Object(n.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)").matches;s(e)}),[]);var u=a.replace(/language-/,"")||"";return o.a.createElement(b,Object.assign({},l,{code:t.trim(),language:u,theme:c?v:g}),(function(e){var t=e.className,r=e.style,n=e.tokens,a=e.getLineProps,i=e.getTokenProps;return o.a.createElement("pre",{className:t,style:w({},r)},n.map((function(e,t){var r=a({line:e,key:t});return o.a.createElement("div",Object.assign({key:t},r),e.map((function(e,t){return o.a.createElement("span",Object.assign({key:t},i({token:e,key:t})))})))})))}))}};function A(e){var t=e.children;return o.a.createElement("main",{className:"min-h-screen font-mono px-5 py-8 dark:bg-gray-900"},o.a.createElement(O.a,null,o.a.createElement("title",null,"ahabhgk's blog")),o.a.createElement("header",{className:"max-w-prose m-auto"},o.a.createElement("h1",{className:"mb-2"},o.a.createElement(a.a,{to:"/",className:"text-4xl text-gray-900 hover:text-indigo-600 font-bold dark:text-gray-200"},"ahabhgk")),o.a.createElement("nav",{className:"mb-6"},k.map((function(e){return o.a.createElement(a.a,{to:e,key:e,className:"mr-10 text-xl text-gray-900 hover:text-indigo-600 font-bold dark:text-gray-200"},e)})))),o.a.createElement("main",{className:"m-auto prose dark:prose-dark"},o.a.createElement(i.MDXProvider,{components:E},t)))}},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,o="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,s,l,u;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(!e(t[s],i[s]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],i.get(s.value[0])))return!1;return!0}if(o&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(t[s]!==i[s])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,l[s]))return!1;if(r&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!t.$$typeof)&&!e(t[l[s]],i[l[s]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));r("E9XD");var n,o,a,i,c=r("17x9"),s=r.n(c),l=r("8+s/"),u=r.n(l),p=r("bmMU"),f=r.n(p),y=r("q1tI"),d=r.n(y),h=r("YVoz"),m=r.n(h),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),O="cssText",k="href",E="http-equiv",A="innerHTML",S="itemprop",C="name",j="property",P="rel",x="src",L="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",D="defer",M="encodeSpecialCharacters",R="onChangeClientState",_="titleTemplate",q=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,T.TITLE),r=Q(e,_);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,I);return t||n||void 0},J=function(e){return Q(e,R)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===t.indexOf(s)||r===P&&"canonical"===e[r].toLowerCase()||s===P&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==A&&c!==O&&c!==S||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],s=m()({},n[c],o[c]);n[c]=s}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Z=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,p=e.title,f=e.titleAttributes;se(T.BODY,n),se(T.HTML,o),ce(p,f);var y={baseTag:le(T.BASE,r),linkTags:le(T.LINK,a),metaTags:le(T.META,i),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,u)},d={},h={};Object.keys(y).forEach((function(e){var t=y[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=y[e].oldTags)})),t&&t(),s(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(T.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var u=a.indexOf(s);-1!==u&&a.splice(u,1)}for(var p=a.length-1;p>=0;p--)r.removeAttribute(a[p]);o.length===a.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===O)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,o=pe(r,n),[d.a.createElement(T.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ue(r),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+V(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case g:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===A||r===O){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),d.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===A||e===O)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+V(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},ye=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,p=void 0===u?"":u,f=e.titleAttributes;return{base:fe(T.BASE,t,n),bodyAttributes:fe(b,r,n),htmlAttributes:fe(g,o,n),link:fe(T.LINK,a,n),meta:fe(T.META,i,n),noscript:fe(T.NOSCRIPT,c,n),script:fe(T.SCRIPT,s,n),style:fe(T.STYLE,l,n),title:fe(T.TITLE,{title:p,titleAttributes:f},n)}},de=u()((function(e){return{baseTag:$([k,L],e),bodyAttributes:X(b,e),defer:Q(e,D),encode:Q(e,M),htmlAttributes:X(g,e),linkTags:G(T.LINK,[P,k],e),metaTags:G(T.META,[C,w,E,j,S],e),noscriptTags:G(T.NOSCRIPT,[A],e),onChangeClientState:J(e),scriptTags:G(T.SCRIPT,[x,A],e),styleTags:G(T.STYLE,[O],e),title:W(e),titleAttributes:X(v,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),ye)((function(){return null})),he=(o=de,i=a=function(e){function t(){return F(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case T.TITLE:return U({},o,((t={})[n.type]=i,t.titleAttributes=U({},a),t));case T.BODY:return U({},o,{bodyAttributes:U({},a)});case T.HTML:return U({},o,{htmlAttributes:U({},a)})}return U({},o,((r={})[n.type]=U({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(z(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=z(e,["children"]),n=U({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.a.createElement(o,n)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.a.Component),a.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=commons-efc08f7f02a1eff9fb9a.js.map