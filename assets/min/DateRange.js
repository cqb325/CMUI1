/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
define(["module","react","react-dom","classnames","moment","utils/Dom","utils/ClickAway","core/BaseComponent","Date","./Button","FormControl"],function(a,b,c,d,e,f,g,h,i,j,k){"use strict";function l(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function m(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function n(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var o=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},p=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),q=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(void 0===e){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if("value"in e)return e.value;var g=e.get;if(void 0!==g)return g.call(d)},r=b.PropTypes,s=function(a){function g(a){l(this,g);var b=m(this,Object.getPrototypeOf(g).call(this,a));b._selectedDate=[];var c=a.sep||"~",d=void 0,f=void 0;if(a.value){var h=a.value.split(c);d=e(h[0]),f=e(h[1]),b._selectedDate[0]=d,b._selectedDate[1]=f}return b.maxRange=a.maxRange||0,b.isSibling=!1,b._isSelecting=!1,b.addState({visibility:!1,start:d,end:f,startDate:a.startDate,endDate:a.endDate}),b}return n(g,a),p(g,[{key:"getValue",value:function(){return this.state.start&&this.state.end?[this.state.start.format("YYYY-MM-DD"),this.state.end.format("YYYY-MM-DD")]:""}},{key:"setValue",value:function(a){if(a){var b=this.props.sep||"~",c=a.split(b);start=e(c[0]),end=e(c[1]),this._selectedDate[0]=start,this._selectedDate[1]=end,this.setState({start:start,end:end})}else this._selectedDate[0]=null,this._selectedDate[1]=null,this.setState({start:null,end:null})}},{key:"componentClickAway",value:function(){this.hide()}},{key:"show",value:function(){var a=this;if(!this.props.readOnly&&!this.props.disabled){var b=c.findDOMNode(this.refs.datePicker);b.style.display="block";var d=f.closest(b,".cm-datetime"),h=f.getOuterHeight(b)+5,i=f.overView(d,h);f.withoutTransition(d,function(){a.setState({dropup:i})}),this.state.visibility||(q(Object.getPrototypeOf(g.prototype),"show",this).call(this),setTimeout(function(){a.setState({current:e(a.state.value)||today}),a.bindClickAway()},0))}}},{key:"hide",value:function(){q(Object.getPrototypeOf(g.prototype),"hide",this).call(this),this.unbindClickAway()}},{key:"_selectStartDate",value:function(a,b){this._isSelecting?this._inMaxRange(a)&&(this._isSelecting=!1,this._selectedDate[1]=a,this.updateRange(),this._selectDate(),this.hide()):(this.props.onSelectStart&&this.props.onSelectStart(a,b),this._isSelecting=!0,this._selectedDate[0]=a,this._selectedDate[1]=null,this.updateRange())}},{key:"_selectEndDate",value:function(a,b){this._isSelecting?this._inMaxRange(a)&&(this._isSelecting=!1,this._selectedDate[1]=a,this.updateRange(),this._selectDate(),this.hide()):(this.props.onSelectStart&&this.props.onSelectStart(a,b),this._isSelecting=!0,this._selectedDate[0]=a,this._selectedDate[1]=null,this.updateRange())}},{key:"updateRange",value:function(){var a=this.refs.startDate,b=this.refs.endDate,c=void 0;c=1==this._selectedDate.length?[this._selectedDate[0],this._selectedDate[0]]:[this._selectedDate[0],this._selectedDate[1]],c.sort(function(a,b){return e(a).toDate().getTime()-e(b).toDate().getTime()}),a.setState({selectedRange:c}),b.setState({selectedRange:c})}},{key:"_selectDate",value:function(){this._selectedDate.sort(function(a,b){return e(a).toDate().getTime()-e(b).toDate().getTime()}),this.setState({start:e(this._selectedDate[0]),end:e(this._selectedDate[1])});var a=this.refs.startDate,b=this.refs.endDate,c=e(this._selectedDate[0]),d=e(this._selectedDate[1]);if(c.isSame(d,"month")&&(c.isSame(a.state.current,"month")?(d.set("date",1),d.add(1,"month")):(c.set("date",1),c.add(-1,"month"))),a.setState({current:c}),b.setState({current:d}),this.props.onSelected&&this.props.onSelected(this._selectedDate[0],this._selectedDate[1]),this._selectedDate=[],this.props.onChange){var f=this.props.sep||"~",g=e(this._selectedDate[0]).format("YYYY-MM-DD"),h=e(this._selectedDate[1]).format("YYYY-MM-DD");this.props.onChange(g+f+h)}}},{key:"componentDidMount",value:function(){var a=this,b=this.state.start,c=this.state.end;b?(b=e(b),c=e(c),b.format("YYYY-MM")==c.format("YYYY-MM")&&b.add(-1,"month")):(b=e(),c=e(),b.add(-1,"month"));var d=this.refs.startDate,f=this.refs.endDate;this.checkIsSibling(b,c),d.setState({current:b}),f.setState({current:c}),this.updateRange(),d.on("selectPrev",function(){a.checkIsSibling()}),d.on("selectNext",function(){a.checkIsSibling()}),d.on("selectMonth",function(){a.checkIsSibling()}),f.on("selectPrev",function(){a.checkIsSibling()}),f.on("selectNext",function(){a.checkIsSibling()}),f.on("selectMonth",function(){a.checkIsSibling()}),d.on("hoverDay",function(b){a._isSelecting&&(a._inMaxRange(b)?(a._selectedDate[1]=b,a.updateRange()):a._selectMaxRange(b))}),f.on("hoverDay",function(b){a._isSelecting&&(a._inMaxRange(b)?(a._selectedDate[1]=b,a.updateRange()):a._selectMaxRange(b))})}},{key:"_selectMaxRange",value:function(a){var b=e(this._selectedDate[0]);b.isBefore(a)?this._selectedDate[1]=b.add(this.maxRange-1,"day"):this._selectedDate[1]=b.add(1-this.maxRange,"day"),this.updateRange()}},{key:"_inMaxRange",value:function(a){if(0===this.maxRange)return!0;var b=e(this._selectedDate[0]),c=[b,e(a)];c.sort(function(a,b){return e(a).toDate().getTime()-e(b).toDate().getTime()});var d=c[0].add(this.maxRange-1,"day");return!d.isBefore(c[1])}},{key:"checkIsSibling",value:function(a,b){var c=this.refs.startDate,d=this.refs.endDate;a=a||c.state.current,b=b||d.state.current;var e=!1;a.get("month")==b.get("month")-1&&a.get("year")==b.get("year")&&(e=!0),this.isSibling!=e&&(this.isSibling=e,window.setTimeout(function(){c.setState({nextBtn:!e}),d.setState({prevBtn:!e})},0))}},{key:"selectShortCuts",value:function(a){if(a){var b=a();this.refs.startDate,this.refs.endDate;this._isSelecting=!1,this._selectedDate[0]=b[0],this._selectedDate[1]=b[1],this.updateRange(),this._selectDate(),this.hide()}}},{key:"clear",value:function(){this._selectedDate=[],this.updateRange(),this.setState({start:null,end:null}),this.hide()}},{key:"renderTools",value:function(){var a=this.props.clear;return a?b.createElement("span",{className:"pull-right"},b.createElement(j,{theme:"info",flat:"true",onClick:this.clear.bind(this)},"清除")):null}},{key:"renderShortCuts",value:function(){var a=this.props.shortcuts;return a?a.map(function(a,c){var d=null,e=void 0;return"string"==typeof a?(e=a,d=g.SHORTCUTS[a]):(e=a.name,d=a.dates),d?b.createElement("a",{href:"javascript:void(0)",className:"date-range-shortcut",key:c,onClick:this.selectShortCuts.bind(this,d)},e):null},this):null}},{key:"render",value:function(){var a=d(this.props.className,"cm-datetime","cm-dateRange",this.state.theme,{disabled:this.props.disabled||this.props.readOnly,dropup:this.state.dropup}),c=this.props.sep||"~",e=this.state.start?this.state.start.format("YYYY-MM-DD"):"",f=this.state.end?this.state.end.format("YYYY-MM-DD"):"",g=this.props.startName||"startDate",h=this.props.endName||"endDate",j=b.createElement("span",{className:"date-text"},b.createElement("input",{type:"hidden",name:g,value:e}),e," "),k=b.createElement("span",{className:"date-text"},b.createElement("input",{type:"hidden",name:h,value:f}),f," "),l={dateOnly:!0,value:e,completion:!1,startDate:this.state.startDate,endDate:this.state.endDate},m={dateOnly:!0,value:f,completion:!1,startDate:this.state.startDate,endDate:this.state.endDate},n=0;return this.state.start&&this.state.end&&(n=this.state.end.diff(this.state.start,"days")+1),b.createElement("div",{ref:"datetime",onClick:this.show.bind(this),className:a,style:this.props.style||{}},j,c,k,b.createElement("div",{className:"cm-datetime-wrap",ref:"datePicker",style:{display:this.state.visibility?"block":"none"}},b.createElement("div",{className:"tools-info"},b.createElement("span",null,"选择了: ",n,"天"),this.renderShortCuts(),this.renderTools()),b.createElement(i,o({ref:"startDate"},l,{onSelectDate:this._selectStartDate.bind(this)})),b.createElement(i,o({ref:"endDate"},m,{onSelectDate:this._selectEndDate.bind(this)}))))}}]),g}(h);s=g(s),s.SHORTCUTS={"一周内":function(){var a=e(),b=e();return b.add(-6,"day"),[b,a]},"一个月内":function(){var a=e(),b=e();return b.add(-1,"month"),[b,a]},"三个月内":function(){var a=e(),b=e();return b.add(-3,"month"),[b,a]},"半年内":function(){var a=e(),b=e();return b.add(-6,"month"),[b,a]},"一年内":function(){var a=e(),b=e();return b.add(-1,"year"),[b,a]},"一周后":function(){var a=e(),b=e();return a.add(6,"day"),[b,a]},"一个月后":function(){var a=e(),b=e();return a.add(1,"month"),[b,a]},"三个月后":function(){var a=e(),b=e();return a.add(3,"month"),[b,a]},"半年后":function(){var a=e(),b=e();return a.add(6,"month"),[b,a]},"一年后":function(){var a=e(),b=e();return a.add(1,"year"),[b,a]}},s.propTypes={value:r.string,sep:r.string},k.register(s,"daterange"),a.exports=s});