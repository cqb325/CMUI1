/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
define(["module","react","react-dom","classnames","Core","utils/Dom","utils/Events","core/BaseComponent"],function(a,b,c,d,e,f,g,h){"use strict";function i(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function j(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function k(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var l=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},m=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),n=function(a){function e(a){i(this,e);var b=j(this,Object.getPrototypeOf(e).call(this,a));return b.addState({title:b.props.title,content:b.props.content}),b.delay=b.props.delay||1e3,b.offset={x:0,y:0},b.props.offset&&l(b.offset,b.props.offset),b}return k(e,a),m(e,[{key:"_renderTitle",value:function(){return b.createElement("div",{className:"cm-tooltip-tile"},this.state.title)}},{key:"_renderContent",value:function(){return b.createElement("div",{className:"cm-tooltip-content"},this.state.content)}},{key:"bind",value:function(a){var b=this;if(!a)return!1;var d=c.findDOMNode(a),e=null;g.on(d,"mouseover",function(a){b.calculatePosition(a.target||a.srcElement);var d=f.dom(c.findDOMNode(b));d.addClass("slide"),e&&clearTimeout(e)}),g.on(d,"mouseout",function(a){var d=f.dom(c.findDOMNode(b));e=setTimeout(function(){d.removeClass("slide"),d.hide()},b.delay)})}},{key:"calculatePosition",value:function(a){var b=a.offsetTop,d=a.offsetLeft;a=f.dom(a);var e=a.width(),g=a.height(),h=c.findDOMNode(this);f.dom(h).show();var i=f.dom(h).width(),j=f.dom(h).height(),k=this.props.align||"top",l={},m=0,n=0;"top"===k&&(l.top=b-j-6+this.offset.y+"px",l.left=d+e/2-i/2+this.offset.x+"px",m=-this.offset.x-6),"bottom"===k&&(l.top=b+g+6+this.offset.y+"px",l.left=d+e/2-i/2+this.offset.x+"px",m=-this.offset.x-6),"left"===k&&(l.top=b+g/2-j/2+this.offset.y+"px",l.left=d-i-6+"px",n=-this.offset.y-6),"right"===k&&(l.top=b+g/2-j/2+this.offset.y+"px",l.left=d+e+6+this.offset.x+"px",n=-this.offset.y-6);var o=document.createElement("style");document.head.appendChild(o);var p=o.sheet;p.addRule&&p.addRule(".cm-tooltip."+this.state.theme+"."+k+":before","margin-left: "+m+"px;margin-top:"+n+"px"),p.insertRule&&p.insertRule(".cm-tooltip."+this.state.theme+"."+k+":before{margin-left: "+m+"px; margin-top:"+n+"px}",0),f.dom(h).css(l)}},{key:"render",value:function(){var a=this.props,c=a.className;a.style;c=d("cm-tooltip",c,this.state.theme,this.props.align);var e=this._renderTitle(),f=this._renderContent();return b.createElement("div",{className:c},e,f)}}]),e}(h);a.exports=n});