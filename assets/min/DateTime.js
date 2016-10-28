/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
define(["module","react","react-dom","classnames","moment","utils/Dom","utils/ClickAway","core/BaseComponent","Date","utils/shallowEqual","FormControl","utils/grids"],function(a,b,c,d,e,f,g,h,i,j,k,l){"use strict";function m(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function n(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function o(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var p=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},q=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),r=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(void 0===e){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if("value"in e)return e.value;var g=e.get;if(void 0!==g)return g.call(d)},s=b.PropTypes,t=l.getGrid,u=function(a){function e(a){m(this,e);var b=n(this,Object.getPrototypeOf(e).call(this,a));return b.addState({visibility:!1,value:a.value}),b}return o(e,a),q(e,[{key:"componentClickAway",value:function(){this.hide()}},{key:"show",value:function(){var a=this;if(!this.props.readOnly&&!this.props.disabled){var b=c.findDOMNode(this.refs.datePicker);b.style.display="block";var d=f.closest(b,".cm-datetime"),g=f.getOuterHeight(b)+5,h=f.overView(d,g);f.withoutTransition(d,function(){a.setState({dropup:h})}),this.state.visibility||(r(Object.getPrototypeOf(e.prototype),"show",this).call(this),setTimeout(function(){var b=a.refs.date;b.show(),a.bindClickAway()},0))}}},{key:"hide",value:function(){r(Object.getPrototypeOf(e.prototype),"hide",this).call(this),this.unbindClickAway();var a=this.refs.date;"datetime"===a.view&&"time"===a.state.stage&&a.setState({stage:1})}},{key:"setValue",value:function(a){this.setState({value:a})}},{key:"getValue",value:function(){return this.state.value}},{key:"_selectDate",value:function(a,b){this.setState({value:a}),this.props.onSelectDate&&this.props.onSelectDate(a,b),this.emit("selectDate",a,b),this.props.onChange&&this.props.onChange(a,b),this.emit("change",a,b)}},{key:"componentWillReceiveProps",value:function(a){if(!j(a,this.props)){var b=this.state.propsChangeFlag||0;this.setState({propsChangeFlag:b+1})}}},{key:"componentDidMount",value:function(){var a=this,b=this.refs.date;b.on("hide",function(){a.hide()}),b.on("selectTime",function(b){a.emit("selectTime",b)}),b.on("selectMonth",function(b){a.emit("selectMonth",b)}),b.on("selectYear",function(b){a.emit("selectYear",b)})}},{key:"getReference",value:function(){return this.refs.date}},{key:"render",value:function(){var a=this.props,c=a.className,e=a.grid,f=a.readOnly,g=a.disabled,h=a.name,j=a.placeholder,k=a.style;c=d(c,"cm-datetime",this.state.theme,t(e),{disabled:g||f,active:this.state.active&&!f,dropup:this.state.dropup});var l=this.state.value?this.state.value:"";return l=l?b.createElement("span",{className:"date-text"},b.createElement("input",{type:"hidden",name:h,defaultValue:this.state.value}),l):b.createElement("span",{className:"date-text"},b.createElement("input",{type:"hidden",name:h,defaultValue:this.state.value}),j," "),b.createElement("div",{ref:"datetime",onClick:this.show.bind(this),className:c,style:k||{}},l,b.createElement("i",{className:"fa fa-calendar"}),b.createElement("div",{className:"cm-datetime-wrap",ref:"datePicker",style:{display:this.state.visibility?"block":"none"}},b.createElement(i,p({ref:"date"},this.props,{onSelectDate:this._selectDate.bind(this)}))))}}]),e}(h);u=g(u),u.propTypes={className:s.string,style:s.object,disabled:s.bool,readOnly:s.bool,value:s.oneOfType([s.string,s.instanceOf(e)]),view:s.oneOf(["datetime","date","time"]),format:s.string,startDate:s.oneOfType([s.string,s.instanceOf(e)]),endDate:s.oneOfType([s.string,s.instanceOf(e)])},k.register(u,"datetime"),a.exports=u});