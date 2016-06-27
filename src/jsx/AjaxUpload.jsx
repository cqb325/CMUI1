/**
 * @author cqb 2016-05-01.
 * @module Upload
 */

const React = require("react");
const ReactDOM = require('react-dom');
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const Core = require('Core');
const UUID = require('utils/UUID');
const Ajax = require('core/Ajax');
const EnhancedButton = require('internal/EnhancedButton');
const strings = require('utils/strings');
const Dom = require('utils/Dom');
const FontIcon = require('FontIcon');
const WebUploader = require('WebUploader');
const substitute = strings.substitute;
const PropTypes = React.PropTypes;
const grids = require('utils/grids');
const jquery = require('jquery');
const getGrid = grids.getGrid;

/**
 * Upload 类
 * @class Upload
 * @constructor
 * @extend BaseComponent
 */
class Upload extends BaseComponent {
    constructor(props) {
        super(props);

        this.addState({
            fileName: null,
            status: false
        });

        this.uploader = null;
        this.pickId = "pick_"+UUID.v4();
        this.file = null;
        this.params = {};
    }

    setParams(params){
        this.params = params;
    }

    componentDidMount(){
        this.initWebUploader();
    }

    initWebUploader(){
        let dir = requirejs.dir;
        if(this.uploader){
            return;
        }
        this.uploader = WebUploader.create({
            // swf文件路径
            swf: dir+'/Uploader.swf',
            // 文件接收服务端。
            server: this.props.service,
            // 选择文件的按钮。
            pick: {
                id: "#"+this.pickId,
                multiple: this.props.multiple
            },
            accept: this.props.accept,
            // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
            resize: false,
            auto: this.props.autoUpload,
            fileVal: this.props.name,
            formData: this.params
        });

        let scope = this;
        this.uploader.on('fileQueued', function( _file ) {
            scope.fileQueued(_file);
        });

        this.uploader.on( 'uploadProgress', function( file, percentage ) {
            scope.updateProgress(percentage);
        });

        this.uploader.on( 'uploadSuccess', function( file , reason) {
            scope._uploadSuccess(file, reason);
        });

        this.uploader.on( 'uploadError', function( file ) {
            scope._uploadError(file);
        });

        this.uploader.on( 'uploadComplete', function( file ) {
            scope._uploadComplete(file);
        });
    }

    fileQueued(file){
        if(this.props.multiple){

        }else{
            let lastFile = this.file;
            if(lastFile){
                this.uploader.removeFile(lastFile);
            }

            this.file = file;

            let ele = ReactDOM.findDOMNode(this.refs.progress);
            ele.parentNode.style.display = "block";
            Dom.attr(ele, "title", "上传");
            Dom.withoutTransition(ele, () => {
                ele.style.width = "0";
            });

            let te = Dom.query(".webuploader-element-invisible", ReactDOM.findDOMNode(this));
            let label = Dom.next(te);
            Dom.attr(label, "title", file.name);

            this.setState({
                fileName: file.name,
                status: false
            });
        }
    }

    uploadFile(){
        this.uploader.upload();
    }

    updateProgress(percentage){
        let ele = ReactDOM.findDOMNode(this.refs.progress);
        ele.style.width = percentage * 100 + "%";
    }

    _uploadSuccess(file){
        this.setState({
            status: "success"
        });
    }

    _uploadError(file, reason){
        let ele = ReactDOM.findDOMNode(this.refs.uploadBtn);
        Dom.attr(ele, "title", "上传文件错误");
        console.log(reason);
        this.setState({
            status: "error"
        });
    }

    _uploadComplete(file){
        if(this.state.status === "error"){
            return ;
        }
        setTimeout(()=>{
            let ele = ReactDOM.findDOMNode(this.refs.progress);
            ele.parentNode.style.display = "none";
            ele.style.width = "0";
            this.setState({
                status: false
            });
        }, 1300);
    }

    render(){
        let {disabled, readOnly, className, style, grid} = this.props;

        className = classnames("cm-upload", className, getGrid(grid), {
            disabled: disabled || readOnly
        });

        let icon = "upload";

        if(this.state.status === "success"){
            icon = "check";
        }
        if(this.state.status === "error"){
            icon = "exclamation-triangle";
        }
        let txt = this.state.fileName || this.props.placeHolder;
        txt = (<div className="cm-upload-fileName">{txt}</div>);
        return (
            <div className={className} style={style}>
                <span>&nbsp;</span>
                <div id={this.pickId} className="cm-upload-pick-btn">
                    {txt}
                </div>
                <FontIcon icon={icon} title="上传" ref="uploadBtn" onClick={this.uploadFile.bind(this)}></FontIcon>
                <div className="cm-upload-progress">
                    <div className="cm-progress-bar" ref="progress"></div>
                </div>
            </div>
        );
    }
}

Upload.propTypes = {
    /**
     * 默认选中的值
     * @attribute value
     * @type {String}
     */
    value: PropTypes.string,
    /**
     * 自定义class
     * @attribute className
     * @type {String}
     */
    className: PropTypes.string,
    /**
     * 禁用
     * @attribute disabled
     * @type {Boolean}
     */
    disabled: PropTypes.bool,
    /**
     * 只读
     * @attribute readOnly
     * @type {Boolean}
     */
    readOnly: PropTypes.bool,
    /**
     * 多选状态
     * @attribute multi
     * @type {Boolean}
     */
    multi: PropTypes.bool,
    /**
     * 自定义样式
     * @attribute style
     * @type {Object}
     */
    style: PropTypes.object,
    /**
     * holder文字
     * @attribute placeholder
     * @type {String}
     */
    placeholder: PropTypes.string
};

module.exports = Upload;