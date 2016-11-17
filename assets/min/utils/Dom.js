/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
define(["module","./classes","./mutation"],function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a){if(!a)return 0;var b=parseInt(a);return b||0}function f(a,b){Array.prototype.push.apply(this,a),this.selector=b}var g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h={option:[1,'<select multiple="multiple">',"</select>"],optgroup:[1,'<select multiple="multiple">',"</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tbody:[1,"<table>","</table>"],tfoot:[1,"<table>","</table>"],colgroup:[1,"<table>","</table>"],caption:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],th:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],_default:[0,"",""]},i=function(){function a(){d(this,a)}return g(a,null,[{key:"query",value:function(a,b){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelector)return document.querySelector(arguments[0])}else if(2===arguments.length&&b.querySelector)return b.querySelector(a)}},{key:"queryAll",value:function(a,b){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelectorAll)return document.querySelectorAll(arguments[0])}else if(2===arguments.length&&b.querySelectorAll)return b.querySelectorAll(a)}},{key:"get",value:function(a){return document.getElementById(a)}},{key:"first",value:function(b,c){return 1===arguments.length?b.children[0]:2===arguments.length?a.query(c+":first-child",b):void 0}},{key:"eq",value:function(b,c){return a.query(":nth-child("+c+")",b)}},{key:"not",value:function(b,c){return a.queryAll(":not("+c+")",b)}},{key:"prev",value:function(a){var b=a.previousSibling;if(b.nodeType){if(1===b.nodeType)return b;if(3===b.nodeType)return b=b.previousSibling}}},{key:"next",value:function(a){var b=a.nextSibling;if(b.nodeType){if(1===b.nodeType)return b;if(3===b.nodeType)return b=b.nextSibling}}},{key:"last",value:function(b,c){if(1===arguments.length){var d=b.children;return d[d.length-1]}if(2===arguments.length)return a.query(c+":last-child",b)}},{key:"closest",value:function(b,c){var d,e,f=function(a,b){var c=0,d=a.length;for(c;c<d;c++)if(a[c].isEqualNode){if(a[c].isEqualNode(b))return a[c]}else if(a[c]==b)return a[c];return!1},g=function b(c,g){for(d=a.queryAll(g,c.parentNode),e=f(d,c);!e;){if(c=c.parentNode,null!=c&&c.nodeType==c.DOCUMENT_NODE)return!1;b(c,g)}return e};return g(b,c)}},{key:"remove",value:function(a){a&&a.parentNode&&a.parentNode.removeChild(a)}},{key:"attr",value:function(a,b,c){return 2==arguments.length?a.getAttribute(b):3==arguments.length?(a.setAttribute(b,c),a):void 0}},{key:"removeAttr",value:function(a,b){2===arguments.length&&a.removeAttribute(b)}},{key:"hasClass",value:function(a,b){return a.className.indexOf(b)>-1}},{key:"addClass",value:function(a,b){if("classList"in a)a.classList.add(b);else{var c=a.className;a.className=c+" "+b}return a}},{key:"removeClass",value:function(a,b){if("classList"in a)a.classList.remove(b);else{var c=a.className;a.className=c.replace(b,"")}return a}},{key:"isDescendant",value:function(a,b){for(var c=b.parentNode;null!==c;){if(c===a)return!0;c=c.parentNode}return!1}},{key:"offset",value:function(a){var b=a.getBoundingClientRect();return{top:b.top+document.body.scrollTop,left:b.left+document.body.scrollLeft}}},{key:"bounding",value:function(a){return rect=a.getBoundingClientRect()}},{key:"forceRedraw",value:function(a){var b=a.style.display;a.style.display="none";var c=a.offsetHeight;return a.style.display=b,c}},{key:"withoutTransition",value:function(b,c){b.style.transition="none",c(),a.forceRedraw(b),b.style.transition=""}},{key:"getOuterHeight",value:function(a){var b=a.clientHeight+e(a.style.borderTopWidth)+e(a.style.borderBottomWidth)+e(a.style.marginTop)+e(a.style.marginBottom);return b}},{key:"getOuterWidth",value:function(a){return a.offsetWidth+e(a.style.borderLeftWidth)+e(a.style.borderRightWidth)+e(a.style.marginLeft)+e(a.style.marginRight)}},{key:"overView",value:function(a){var b=arguments.length<=1||void 0===arguments[1]?0:arguments[1],c=window.innerHeight||document.documentElement.clientHeight,d=a.getBoundingClientRect().bottom+b;return d>c}},{key:"css",value:function(b,c,d){return"string"==typeof b&&(b=a.query(b)),window.getComputedStyle?window.getComputedStyle(b,d)[c]:b.currentStyle?b.currentStyle[c]:null}},{key:"dom",value:function(b){return new f(a.parseHTML(b))}},{key:"parseHTML",value:function(a){if("string"!=typeof a){if(a.nodeType&&1===a.nodeType)return[a];throw new TypeError("String expected")}var b=/<([\w:]+)/.exec(a);if(!b)throw new Error("No elements were generated.");var c=b[1];if("body"==c){var d=document.createElement("html");return d.innerHTML=a,[d.removeChild(d.lastChild)]}var e=h[c]||h._default,f=e[0],g=e[1],i=e[2],d=document.createElement("div");for(d.innerHTML=g+a+i;f--;)d=d.lastChild;var j=[],k=d.firstChild;do j.push(k);while(k=k.nextElementSibling);for(var l=0;l<j.length;++l)d.removeChild(j[l]);return j}}]),a}(),j=f.prototype;j.attr=function(a,b){return void 0===b?this[0].getAttribute(a):(this[0].setAttribute(a,b),this)},j.removeAttr=function(a){return this[0].removeAttribute(a),this},j.data=function(a,b){return this.attr("data-"+a,b)},j.clone=function(){for(var a=[],b=0,c=this.length;b<c;++b)a.push(this[b].cloneNode(!0));return new f(a)},j.at=function(a){return new f([this[a]],this.selector)},j.first=function(){return new f([this[0]],this.selector)},j.last=function(){return new f([this[this.length-1]],this.selector)},j.length=function(){return this.length},j.text=function(a){if(void 0!==a)return this[0].textContent=a,this;for(var b="",c=0;c<this.length;++c)b+=this[c].textContent;return b},j.html=function(a){var b=this[0];if(a){if("string"!=typeof a)throw new Error(".html() requires a string");return b.innerHTML=a,this}return b.innerHTML},j.each=function(a){for(var b=0;b<this.length;++b)a(new f([this[b]],this.selector),b);return this},j.forEach=function(a){return Array.prototype.forEach.call(this,a),this},j.map=function(a){return Array.prototype.map.call(this,a)},j.select=function(){for(var a=0;a<this.length;++a){var b=this[a];b.select()}return this},j.filter=function(a){var b=Array.prototype.filter.call(this,function(b){return a(new f([b],this.selector))});return new f(b,this.selector)},j.value=function(a){var b=this[0];return a?(b.value=a,this):b.value},j.next=function(){for(var a=[],b=0;b<this.length;++b){var c=this[b].nextElementSibling;c&&a.push(c)}return new f(a)},j.prev=function(){for(var a=[],b=0;b<this.length;++b){var c=this[b].previousElementSibling;c&&a.push(c)}return new f(a)},j.addClass=function(a){for(var c,d=0;d<this.length;++d)c=this[d],c._classes=c._classes||b(c),c._classes.add(a);return this},j.removeClass=function(a){for(var c,d=0;d<this.length;++d)c=this[d],c._classes=c._classes||b(c),c._classes.remove(a);return this},j.toggleClass=function(a){for(var c,d=0;d<this.length;++d)c=this[d],c._classes=c._classes||b(c),c._classes.toggle(a);return this},j.hasClass=function(a){for(var c,d=0;d<this.length;++d)if(c=this[d],c._classes=c._classes||b(c),c._classes.has(a))return!0;return!1},j.css=function(a,b){if(a instanceof Object)for(var c in a)this.setStyle(c,a[c]);return 2==arguments.length?this.setStyle(a,b):this.getStyle(a)},j.setStyle=function(a,b){for(var c=0;c<this.length;++c)this[c].style[a]=b;return this},j.getStyle=function(a){var b=this[0];if(b)return i.css(b,a)},j.parent=function(){for(var a=[],b=0;b<this.length;++b)a.push(this[b].parentNode);return new f(a)},j.prepend=function(a){for(var b=0;b<this.length;++b)c.prepend(this[b],dom(a));return this},j.append=function(a){for(var b=0;b<this.length;++b)c.append(this[b],dom(a));return this},j.before=function(a){for(var b=0;b<this.length;++b)c.before(this[b],dom(a));return this},j.after=function(a){for(var b=0;b<this.length;++b)c.after(this[b],dom(a));return this},j.remove=function(){for(var a=0;a<this.length;++a)c.remove(this[a])},j.replace=function(a){for(var b=0;b<this.length;++b)c.replace(this[b],dom(a));return this},j.empty=function(){for(var a=0;a<this.length;++a)c.empty(this[a]);return this},j.show=function(){for(var a=0;a<this.length;++a)this[a].style.display=this[a].org_display?this[a].org_display:"block";return this},j.hide=function(){for(var a=0;a<this.length;++a)this[a].org_display=this[a].style.display,this[a].style.display="none";return this},j.width=function(a){return a?i.getOuterWidth(this[0]):this[0].offsetWidth},j.height=function(a){return a?i.getOuterHeight(this[0]):this[0].offsetHeight},a.exports=i});