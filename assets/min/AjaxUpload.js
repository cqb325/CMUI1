/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
define(["module","react","react-dom","classnames","core/BaseComponent","Core","utils/UUID","core/Ajax","internal/EnhancedButton","utils/strings","utils/Dom","FontIcon","WebUploader","utils/grids","jquery"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){"use strict";function p(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function q(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function r(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var s=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),t=(j.substitute,b.PropTypes),u=n.getGrid,v=function(a){function e(a){p(this,e);var b=q(this,Object.getPrototypeOf(e).call(this,a));return b.addState({fileName:null,status:!1}),b.uploader=null,b.pickId="pick_"+g.v4(),b.file=null,b.params={},b}return r(e,a),s(e,[{key:"setParams",value:function(a){this.params=a}},{key:"componentDidMount",value:function(){this.initWebUploader()}},{key:"initWebUploader",value:function(){var a=requirejs.dir;if(!this.uploader){this.uploader=m.create({swf:a+"/Uploader.swf",server:this.props.service,pick:{id:"#"+this.pickId,multiple:this.props.multiple},accept:this.props.accept,resize:!1,auto:this.props.autoUpload,fileVal:this.props.name,formData:this.params});var b=this;this.uploader.on("fileQueued",function(a){b.fileQueued(a)}),this.uploader.on("uploadProgress",function(a,c){b.updateProgress(c)}),this.uploader.on("uploadSuccess",function(a,c){b._uploadSuccess(a,c)}),this.uploader.on("uploadError",function(a){b._uploadError(a)}),this.uploader.on("uploadComplete",function(a){b._uploadComplete(a)})}}},{key:"fileQueued",value:function(a){var b=this;this.props.multiple||!function(){var d=b.file;d&&b.uploader.removeFile(d),b.file=a;var e=c.findDOMNode(b.refs.progress);e.parentNode.style.display="block",k.attr(e,"title","上传"),k.withoutTransition(e,function(){e.style.width="0"});var f=k.query(".webuploader-element-invisible",c.findDOMNode(b)),g=k.next(f);k.attr(g,"title",a.name),b.setState({fileName:a.name,status:!1})}()}},{key:"uploadFile",value:function(){this.uploader.upload()}},{key:"updateProgress",value:function(a){var b=c.findDOMNode(this.refs.progress);b.style.width=100*a+"%"}},{key:"_uploadSuccess",value:function(a){this.setState({status:"success"})}},{key:"_uploadError",value:function(a,b){var d=c.findDOMNode(this.refs.uploadBtn);k.attr(d,"title","上传文件错误"),console.log(b),this.setState({status:"error"})}},{key:"_uploadComplete",value:function(a){var b=this;"error"!==this.state.status&&setTimeout(function(){var a=c.findDOMNode(b.refs.progress);a.parentNode.style.display="none",a.style.width="0",b.setState({status:!1})},1300)}},{key:"render",value:function(){var a=this.props,c=a.disabled,e=a.readOnly,f=a.className,g=a.style,h=a.grid;f=d("cm-upload",f,u(h),{disabled:c||e});var i="upload";"success"===this.state.status&&(i="check"),"error"===this.state.status&&(i="exclamation-triangle");var j=this.state.fileName||this.props.placeHolder;return j=b.createElement("div",{className:"cm-upload-fileName"},j),b.createElement("div",{className:f,style:g},b.createElement("span",null," "),b.createElement("div",{id:this.pickId,className:"cm-upload-pick-btn"},j),b.createElement(l,{icon:i,title:"上传",ref:"uploadBtn",onClick:this.uploadFile.bind(this)}),b.createElement("div",{className:"cm-upload-progress"},b.createElement("div",{className:"cm-progress-bar",ref:"progress"})))}}]),e}(e);v.propTypes={value:t.string,className:t.string,disabled:t.bool,readOnly:t.bool,multi:t.bool,style:t.object,placeholder:t.string},a.exports=v});