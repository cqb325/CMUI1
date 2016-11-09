/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
define(["module","react","classnames","core/BaseComponent","utils/grids"],function(a,b,c,d,e){"use strict";function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var i=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),j=e.getGrid,k=function(a){function d(a){f(this,d);var b=g(this,Object.getPrototypeOf(d).call(this,a));return b.addState({value:parseFloat(a.value)||parseFloat(a.min)||0,min:parseFloat(a.min)||0,max:parseFloat(a.max)||100}),b}return h(d,a),i(d,[{key:"update",value:function(a){this._isMounted&&this.setState({value:a})}},{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var a=this.props,d=a.className,e=a.style,f=a.disabled,g=a.grid,h=a.showPercent,i=a.striped,k=a.active;d=c("cm-progress",d,j(g),this.state.theme,{disabled:f,striped:i,active:k});var l=((this.state.value-this.state.min)/(this.state.max-this.state.min)*100).toFixed(2)+"%",m=h?l:null;return b.createElement("div",{className:d,style:e},b.createElement("div",{className:"cm-progress-bar",style:{width:l}},m))}}]),d}(d);a.exports=k});