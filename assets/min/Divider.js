/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
define(["module","react","classnames","core/BaseComponent"],function(a,b,c,d){"use strict";function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var h=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=function(a){function d(a){return e(this,d),f(this,Object.getPrototypeOf(d).call(this,a))}return g(d,a),h(d,[{key:"render",value:function(){var a=this.props,d=a.style,e=a.className,f=a.theme;return e=c(e,"cm-divider",f),b.createElement("hr",{style:d,className:e})}}]),d}(d);i.defaultProps={theme:"default"},i.propTypes={},a.exports=i});