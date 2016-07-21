/**
 * @author cqb 2016-07-11.
 * @module Dialog
 */

const React = require("react");
const ReactDOM = require('react-dom');
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const Dom = require('utils/Dom');
const PropTypes = React.PropTypes;
const createFragment = React.addons.createFragment;
const Panel = require('Panel');
const Button = require('Button');

/**
 * Dialog 类
 * @class Dialog
 * @constructor
 * @extend BaseComponent
 */
class Dialog extends BaseComponent {
    constructor(props) {
        super(props);

        this.addState({
            title: props.title || "",
            visibility: false
        });

        this.footers = props.footers || {
            components: [
                <Button theme="success" raised={true} onClick={this.btnHandler.bind(this, true)} icon="save" >{props.okButtonText||"保 存"}</Button>,
                <Button theme="info" raised={true} onClick={this.btnHandler.bind(this, false)} icon="flask" className="ml-10">{props.cancleButtonText||"取 消"}</Button>
            ]
        };

        this.backdrop = null;

        //保存的数据
        this.data = null;
    }

    setData(data){
        this.data = data;
    }

    getData(){
        return this.data;
    }

    setTitle(title){
        this.setState({
            title: title
        });
    }

    /**
     * 按钮点击处理函数
     * @param flag
     */
    btnHandler(flag){
        if(this.props.onConfirm){
            let ret = this.props.onConfirm(flag);
            if(ret){
                this.close();
            }

            return ret;
        }

        this.close();
        return true;
    }

    close(){
        this.setState({
            visibility: false
        });

        if(this.props.onClose){
            this.props.onClose();
        }
        this.emit("close");
        this.backdrop.style.display = "none";
    }

    open(){
        this.setState({
            visibility: true
        });

        if(!this.backdrop){
            let ele = Dom.query(".shadow-backdrop");
            if(ele){
                this.backdrop = ele;
            }else {
                this.backdrop = document.createElement("div");
                this.backdrop.setAttribute("class", "shadow-backdrop");
                document.body.appendChild(this.backdrop);
            }
        }

        this.backdrop.style.display = "block";

        window.setTimeout(()=>{
            let ele = ReactDOM.findDOMNode(this);
            let w = ele.clientWidth;
            let h = ele.clientHeight;
            ele.style.marginLeft = -w/2+"px";
            ele.style.marginTop = -h/2+"px";

            if(this.props.onOpen){
                this.props.onOpen();
            }
            this.emit("open");
        }, 0);
    }

    render(){
        let {className, style} = this.props;
        className = classnames("cm-dialog", className);
        let props = Object.assign({}, this.props);
        props.className = className;

        let sty = style || {};
        sty.display = this.state.visibility ? "block" : "none";
        props.style = sty;

        props.footers = this.footers;

        return (
            <Panel {...props}>{this.props.children}</Panel>
        );
    }
}

Dialog.propTypes = {
    /**
     * 标题
     * @attribute title
     * @type {String}
     */
    title: PropTypes.string,
    /**
     * 信息
     * @attribute msg
     * @type {String}
     */
    msg: PropTypes.string,
    /**
     * 类型
     * @attribute type
     * @type {String}
     */
    type: PropTypes.oneOf(["info", "confirm", "error", "warning"]),
    /**
     * 自定义class
     * @attribute className
     * @type {String}
     */
    className: PropTypes.string,
    /**
     * 自定义样式
     * @attribute style
     * @type {Object}
     */
    style: PropTypes.object
};

module.exports = Dialog;