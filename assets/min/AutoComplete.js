/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
define(["module","react","react-dom","./classnames","./core/BaseComponent","./Core","./core/Ajax","./utils/ClickAway","./internal/EnhancedButton","./utils/strings","./utils/Dom","./utils/grids","./Input","./FormControl"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){"use strict";function o(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function p(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function q(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var r=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),s=j.substitute,t=b.PropTypes,u=l.getGrid,v=function(a){function e(a){o(this,e);var b=p(this,Object.getPrototypeOf(e).call(this,a));b.selectedItems={};var c=a.valueField||"id",d=b._rebuildData(a.data,a.value,c);return b.data=d,b.addState({value:a.value,active:!1,data:d}),b.timer=null,b.showOptions=b.showOptions.bind(b),b.hideOptions=b.hideOptions.bind(b),b}return q(e,a),r(e,[{key:"_rebuildData",value:function(a,b,c){if(!a)return null;if(f.isArray(a)){var d=a[0];return f.isString(d)?a.map(function(a){var c={id:a,text:a};return a==b&&(this.selectedItems[a]=c),c}):f.isObject(d)?(void 0!=b&&a.forEach(function(a){a[c]==b&&(this.selectedItems[b]=a)},this),a):null}if(f.isObject(a)){var e=[];for(var g in a){var h={id:g,text:a[g]};g==b&&(this.selectedItems[b]=h),e.push(h)}return e}return null}},{key:"_renderValues",value:function(){var a=this,c=this.selectedItems[this.state.value],e=this.props.textField||"text",f=c?c[e]:this.props.placeholder?this.props.placeholder+"":"",g=d("cm-select-value",{placeholder:!c&&this.props.placeholder});return b.createElement(m,{type:"text",className:g,name:this.props.name,value:f,trigger:"change",onChange:function(b){a.timer&&window.clearTimeout(a.timer),a.timer=setTimeout(function(){a.filter(b),a.timer=null},200)}})}},{key:"filter",value:function(a){var b=this;if(this.props.filterurl)!function(){var c=b;g.get(b.props.filterurl,{keyword:a},function(a){a&&c.setState({data:a})})}();else{if(!this.data)return;var c=this.data.filter(function(b){return b.text.indexOf(a)!=-1});this.setState({data:c})}this.showOptions()}},{key:"_selectItem",value:function(a){var b=this.props.valueField||"id",c=null;a?this.props.multi?(this.selectedItems[a[b]]=a,c=this.getSelectedValues()):(c=a[b],this.selectedItems={},this.selectedItems[c]=a,this.hideOptions()):this.props.multi||this.hideOptions(),this.setState({value:c}),this.props.onChange&&this.props.onChange(c,a),this.emit("change",c,a)}},{key:"getSelectedValues",value:function(){if(this.selectedItems){var a=[];for(var b in this.selectedItems)a.push(b);return a.join(",")}return""}},{key:"getValue",value:function(){return this.getSelectedValues()}},{key:"setValue",value:function(a){var b=this.props.valueField||"id",c=this.state.data;if(null!=a&&void 0!=a&&""!=a||(this.selectedItems={},this.setState({value:a})),void 0!=a)for(var d in c){var e=c[d];if(e[b]==a){this.selectedItems[a]=e,this.setState({value:a});break}}}},{key:"_renderOptions",value:function(){var a=this.props,c=(a.disabled,a.readOnly,a.textField),e=a.valueField,f=a.optionsTpl,g=this.state.data;if(!g)return"";var h=[];return!this.props.multi&&this.props.hasEmptyOption&&h.push(b.createElement("li",{key:-1,onClick:this._selectItem.bind(this,null)},b.createElement("a",{href:"javascript:void(0)"},b.createElement(i,{initFull:!0,touchRippleColor:"rgba(0, 0, 0, 0.1)"},this.props.choiceText||"--请选择--")))),g.forEach(function(a,g){c=c||"text",e=e||"id";var j=a[c],k=a[e],l=d({active:!!this.selectedItems[k]}),m=j;f&&(m=s(f,a)),h.push(b.createElement("li",{className:l,key:g,onClick:this._selectItem.bind(this,a)},b.createElement("a",{href:"javascript:void(0)"},b.createElement(i,{initFull:!0,touchRippleColor:"rgba(0, 0, 0, 0.1)"},b.createElement("span",{dangerouslySetInnerHTML:{__html:m}})))))},this),h}},{key:"componentClickAway",value:function(){this.hideOptions()}},{key:"showOptions",value:function(){var a=this;if(!this.props.readOnly&&!this.props.disabled&&!this.state.active){var b=c.findDOMNode(this.refs.options);b.style.display="block";var d=k.closest(b,".cm-select"),e=k.getOuterHeight(b)+5,f=k.overView(d,e);k.withoutTransition(d,function(){a.setState({dropup:f})}),this.bindClickAway(),setTimeout(function(){a.setState({active:!0})},0)}}},{key:"hideOptions",value:function(){var a=this;this.setState({active:!1});var b=c.findDOMNode(this.refs.options);this.unbindClickAway();var d=500;this.isLtIE9()&&(d=0),setTimeout(function(){a.state.active===!1&&(b.style.display="none")},d)}},{key:"setData",value:function(a){a=this._rebuildData(a),this.data=a,this.setState({data:a,value:""})}},{key:"componentWillMount",value:function(){var a=this;this.props.url&&!function(){var b=a;g.get(a.props.url,{},function(a){a&&b.setData(a)})}()}},{key:"render",value:function(){var a=this.props,c=a.className,e=a.disabled,f=a.readOnly,g=a.style,h=a.grid;c=d("cm-select",u(h),{active:this.state.active,disabled:e||f,dropup:this.state.dropup,hasEmptyOption:this.props.hasEmptyOption});var i=this._renderValues(),j=this._renderOptions();return b.createElement("div",{className:c,style:g,onClick:this.showOptions},i,b.createElement("span",{className:"cm-select-cert"}),b.createElement("div",{className:"cm-select-options-wrap"},b.createElement("div",{ref:"options",className:"cm-select-options"},b.createElement("ul",null,j))))}}]),e}(e);v=h(v),v.propTypes={data:t.oneOfType([t.array,t.object]),value:t.string,className:t.string,disabled:t.bool,readOnly:t.bool,multi:t.bool,style:t.object,textField:t.string,valueField:t.string,choiceText:t.string,placeholder:t.string},n.register(v,"autocomplete"),a.exports=v});