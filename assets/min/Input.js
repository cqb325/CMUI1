/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
define(["module","react","classnames","core/BaseComponent","utils/grids","utils/omit","utils/regs","FormControl"],function(a,b,c,d,e,f,g,h){"use strict";function i(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function j(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function k(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var l=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},m=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),n=e.getGrid,o=function(a){function d(a){i(this,d);var b=j(this,Object.getPrototypeOf(d).call(this,a));return b.addState({value:a.value}),b}return k(d,a),m(d,[{key:"componentWillReceiveProps",value:function(a){var b=a.value;b!==this.props.value&&b!==this.state.value&&this.setState({value:b})}},{key:"handleChange",value:function(a){var b=this.props,c=b.readOnly,d=b.type,e=b.trigger;if(!c){var f=a.target.value;!f||"integer"!==d&&"number"!==d||g[d].test(f)||(f=this.state.value||""),this.setState({value:f}),"change"===e&&this.handleTrigger(a)}}},{key:"handleTrigger",value:function(a){var b=a.target.value;this.props.onChange(b,a),this.emit("change")}},{key:"getValue",value:function(){return this.state.value}},{key:"setValue",value:function(a){this.setState({value:a})}},{key:"render",value:function(){var a=this,d=this.props,e=d.className,g=d.grid,h=d.type,i=d.trigger,j=f(this.props,["className","grid","type","trigger"]),k=this.props["data-handleChange"]?function(b){a.props["data-handleChange"](b,{component:a})}:this.handleChange.bind(this),m={className:c(e,"cm-form-control",n(g)),onChange:k,type:"password"===h?h:"text",value:this.state.value};if(i&&"change"!==i){var o="on"+i.charAt(0).toUpperCase()+i.slice(1);m[o]=k}return b.createElement("input",l({},j,m))}}]),d}(d);o.defaultProps={trigger:"blur",value:""},h.register(o,["text"]),a.exports=o});