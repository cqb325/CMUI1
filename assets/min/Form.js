/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
define(["module","react","react-dom","classnames","core/BaseComponent","utils/grids","Button","utils/Dom","core/Ajax"],function(a,b,c,d,e,f,g,h,i){"use strict";function j(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function k(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function l(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var m=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=f.getGrid,p=b.PropTypes,q=function(a){function c(a){j(this,c);var b=k(this,Object.getPrototypeOf(c).call(this,a));return b.action=a.action,b.method=a.method,b.target=a.target,b.useDefaultSubmitBtn=void 0==b.props.useDefaultSubmitBtn||b.props.useDefaultSubmitBtn,b.items={},b.addState({}),b}return l(c,a),n(c,[{key:"isValid",value:function(){for(var a in this.items){var b=this.items[a];if(!b.ref.check())return!1}return!0}},{key:"itemBind",value:function(a){a.name&&a.isFormItem?this.items[a.name]=a:console.log(a.ref,"need a name property")}},{key:"itemUnBind",value:function(a){delete this.items[a]}},{key:"renderChildren",value:function(){var a=this;return b.Children.map(this.props.children,function(c){var d=c.type.name||c.type.toString().match(/function\s*([^(]*)\(/)[1];if("FormControl"===d){var e=m({"data-itemBind":a.itemBind.bind(a)},c.props);return e.layout=a.props.layout?a.props.layout:e.layout,b.cloneElement(c,e)}return c})}},{key:"submit",value:function(){var a=this.props,b=a.method,c=a.customParams,d=a.success,e=a.error;if(this.isValid())if("ajax"===b){var f=c?c():this.getFormParams();i.ajax({url:this.action,method:"post",data:f,dataType:"json",success:d,error:e})}else"custom"===b?this.props.submit&&this.props.submit():this.refs.form.submit()}},{key:"getItems",value:function(){return this.items}},{key:"getFormParams",value:function(){var a={};for(var b in this.items){var c=this.items[b],d=c.ref.getValue();a[b]=d}return a}},{key:"renderSubmit",value:function(){return this.useDefaultSubmitBtn?b.createElement(g,{theme:"success",onClick:this.submit.bind(this)},this.props.submitText||"保 存"):null}},{key:"render",value:function(){var a=this.props,c=a.className,e=a.grid,f=a.style;a.children;return c=d("cm-form",c,o(e)),b.createElement("form",{ref:"form",className:c,style:f,action:this.action,method:this.method||"post",target:this.target},this.renderChildren(),b.createElement("div",{style:{textAlign:"center"}},this.renderSubmit()))}}]),c}(e);q.propTypes={className:p.string,style:p.object,grid:p.oneOfType([p.string,p.number]),action:p.string,method:p.oneOf(["post","get","ajax","custom"]),target:p.string,submitText:p.string,layout:p.string,useDefaultSubmitBtn:p.oneOfType([p.string,p.bool])},a.exports=q});