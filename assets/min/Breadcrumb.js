/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
define(["module","react","classnames","core/BaseComponent"],function(a,b,c,d){"use strict";function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var h=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},i=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),j=b.PropTypes,k=function(a){function d(a){return e(this,d),f(this,Object.getPrototypeOf(d).call(this,a))}return g(d,a),i(d,[{key:"renderItems",value:function(){var a=this;return b.Children.map(this.props.children,function(c){var d="";if(c.type)if(c.type.name)d=c.type.name;else{var e=c.type.toString().match(/function\s*([^(]*)\(/);e&&(d=e[1])}if("Item"===d){var f=h({separator:a.props.separator},c.props);return b.cloneElement(c,f)}return c})}},{key:"render",value:function(){var a=c("cm-breadcrumb",this.props.className);return b.createElement("div",{className:a,style:this.props.style},this.renderItems())}}]),d}(d);k.propTypes={className:j.string,style:j.object};var l=function(a){function d(a){return e(this,d),f(this,Object.getPrototypeOf(d).call(this,a))}return g(d,a),i(d,[{key:"render",value:function(){var a=c("cm-breadcrumb-link",this.props.className),d=this.props.link,e=d?b.createElement("a",{className:a,href:this.props.link},this.props.children):b.createElement("span",{className:a},this.props.children);return b.createElement("span",null,e,b.createElement("span",{className:"cm-breadcrumb-separator"},this.props.separator||"/"))}}]),d}(d);l.propTypes={className:j.string,style:j.object,link:j.string},k.Item=l,a.exports=k});