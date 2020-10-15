!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var o,i=function(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}((function(t,e){
/*!
   * clipboard.js v2.0.6
   * https://clipboardjs.com/
   * 
   * Licensed MIT © Zeno Rocha
   */
var n;n=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var r=n(3),o=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(r.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(r.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var r=n(5);function o(t,e,n,r,o){var a=i.apply(this,arguments);return t.addEventListener(n,a,o),{destroy:function(){t.removeEventListener(n,a,o)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=function(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){n.r(e);var r=n(0),o=n.n(r),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),u=n(1),l=n.n(u),s=n(2),f=n.n(s),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),p=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=f()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return y("action",t)}},{key:"defaultTarget",value:function(t){var e=y("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return y("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(l.a);function y(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=p}]).default},t.exports=n()})),a=(o=i)&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,c=document.querySelector(".destination"),u=document.querySelector(".origin"),l=document.querySelector(".process"),s=new a(".btn--copy");s.on("success",(function(t){t.trigger.classList.add("success")})),s.on("error",(function(t){t.trigger.classList.add("error")}));Object.entries({cultura:[["Co","pan"],["I","tá","lia"],["Li","na","Bo","Bar","di"],["Sé"],["Luz"],["Pi","na","co","te","ca"],["I","bi","ra","pu","era"],["Tria","non"],["Pau","lis","ta‎"],["An","gé","li","ca"],["Ban","dei","ran","tes"],["Li","ber","da","de"],["Mo","rum","bi"],["I","ta","im"],["Mo","ema"],["An","tro","po","fa","gia"],["Poe","sia"],["Con","cre","ta"],["Li","ra","Pau","lis","ta","na"],["Aba","poru"],["Re","ti","ran","tes",""],["Imi","gran","tes"]],bioma:[["Ara","ucá","ria"],["Ipê","amar","elo"],["Pal","meira","Jeri","vá"],["Qua","res","meira",""],["Pau","Bra","sil",""],["Pi","tan","gueira"],["Ando","rinha",""],["Bem","te","vi",""],["Que","ro","que","ro"],["Tiê"],["Sanha","çu"],["Tie","tê"],["Taman","duateí"],["I","toro","ró"],["Ipi","ranga"]]}).forEach((function(e){var n=t(e,2),r=n[0],o=n[1],i=document.createElement("aside");i.textContent=r,u.appendChild(i),o.forEach((function(t){var e=document.createElement("div");e.className="container",e.innerHTML='<span class="word" data-syllables=\''.concat(JSON.stringify(t),"'>").concat(t.join(""),"</span>"),u.appendChild(e)}))}));var f=function(){[c,u,l].forEach((function(t){var e=t.closest(".section").querySelector(".actions");e.classList.remove("enabled"),console.log(t.className,t.textContent.trim().length),t.textContent.trim().length&&e.classList.add("enabled")}))};f();var d=u.querySelectorAll(".word"),h=!1,p=function(t,e){var n={x:e.first.left-e.last.left,y:e.first.top-e.last.top};t.animate([{transform:"scale(1,1) translate(".concat(n.x,"px, ").concat(n.y,"px)")},{transform:"scale(1,1) translate(0, 0)"}],{duration:300,easing:"ease"}).onfinish=function(){return h=!1}},y=function(t){var e,n,r=Math.random(),o=t.closest(".container"),i=t.getBoundingClientRect();h=!0,o.dataset.id=r,t.dataset.id=r,o.style.height="".concat(t.offsetHeight,"px"),o.style.width="".concat(t.offsetWidth,"px"),e={top:i.top,left:i.left},c.insertAdjacentElement("beforeend",t),n={top:(i=t.getBoundingClientRect()).top,left:i.left},p(t,{first:e,last:n})},m=function(t){var n,r,o=t.dataset.id,i=u.querySelector('[data-id="'.concat(o,'"]')),a=e(c.querySelectorAll(".word")).filter((function(e){return e!==t})),l=t.getBoundingClientRect();h=!0,n={top:l.top,left:l.left},a.forEach((function(t){var e=t.getBoundingClientRect();t.__first={top:e.top,left:e.left}})),i.insertAdjacentElement("beforeend",t),r={top:(l=t.getBoundingClientRect()).top,left:l.left},a.forEach((function(t){var e=t.getBoundingClientRect();t.__last={top:e.top,left:e.left}})),p(t,{first:n,last:r}),a.forEach((function(t){return p(t,{first:t.__first,last:t.__last})})),i.style.height="",i.style.width="",i.removeAttribute("data-id"),t.removeAttribute("data-id")};d.forEach((function(t){var e=function(){h||(t.closest(".container")?y(t):m(t),f())};t.addEventListener("mouseup",e),t.addEventListener("touchend",e)}));var v=function(){d.forEach((function(t){if(t.closest(".container"))return!1;m(t)})),l.querySelector(".result").innerHTML="",f()};document.querySelector(".btn--clear").addEventListener("click",v);document.querySelector(".btn--random").addEventListener("click",(function(){v();for(var t=0;t<2;)d.forEach((function(e){return!(t>=2)&&(!!e.closest(".container")&&void(Math.random()>.9&&(y(e),t+=1)))}));f()}));var b=function(){var t={min:2,max:1},n=[];c.querySelectorAll(".word").forEach((function(r){var o=JSON.parse(r.dataset.syllables);n=[].concat(e(n),e(o)),t.max=Math.max(t.max,o.length)}));var r=n.map((function(t){return{sort:Math.random(),value:t}})).sort((function(t,e){return t.sort-e.sort})).map((function(t){return t.value}));return r.length=Math.floor(t.min+Math.random()*t.max),r=(r=r.join("").toLowerCase()).charAt(0).toUpperCase()+r.slice(1),l.querySelector(".result").innerHTML=r,r};document.querySelector(".btn--remix").addEventListener("click",(function(){var t;t=1,function e(){b(),t<10&&(t++,setTimeout(e,50))}(),document.querySelector(".btn--copy").className="btn btn--copy",f()}))}));
//# sourceMappingURL=main.js.map