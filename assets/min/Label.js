/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
define(["module","react","classnames","utils/grids"],function(a,b,c,d){"use strict";var e=b.createClass({displayName:"Label",render:function(){var a=c("cm-label",this.props.className,d.getGrid(this.props.grid)),e=this.props.component||"div";return b.createElement(e,{className:a,style:this.props.style},this.props.children)}});a.exports=e});