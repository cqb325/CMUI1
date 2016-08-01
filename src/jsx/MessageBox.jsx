/**
 * @author cqb 2016-06-23.
 * @module MessageBox
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
 * MessageBox 类
 * @class MessageBox
 * @constructor
 * @extend BaseComponent
 */
class MessageBox extends BaseComponent {
    constructor(props) {
        super(props);

        this.addState({
            title: props.title || "",
            msg: props.msg || "",
            visibility: false,
            type: props.type || "info"
        });

        this.confirm = this.confirm.bind(this);
        this.cancle = this.cancle.bind(this);

        let components = [<Button theme="success" raised={true} icon="check" onClick={this.confirm}>确 定</Button>];
        if(props.type === "confirm"){
            components.push(<Button theme="info" raised={true} icon="close" className="ml-10" onClick={this.cancle}>取 消</Button>);
        }
        this.footers = {
            components: components
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

    cancle(){
        if(this.state.type === "confirm" && this.props.confirm){
            this.props.confirm.apply(this, [false]);
            this.hide();
        }else{
            this.hide();
        }
    }

    hide(){
        this.setState({
            visibility: false
        });

        if(this.props.onHide){
            this.props.onHide();
        }
        this.emit("hide");
        this.backdrop.style.display = "none";
    }

    confirm(){
        if(this.props.confirm){
            if(this.state.type === "confirm") {
                if (this.props.confirm.apply(this, [true])) {
                    this.hide();
                }
            }else{
                this.props.confirm.apply(this, []);
                this.hide();
            }
        }else{
            this.hide();
        }
    }

    show(msg, title){
        this.setState({
            title: this.state.title || title,
            msg: msg,
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

            if(this.props.onShow){
                this.props.onShow();
            }
            this.emit("show");
        }, 0);
    }

    render(){
        let {className, style} = this.props;
        className = classnames("cm-messageBox", className, this.state.type);
        let props = Object.assign({}, this.props);
        props.className = className;

        let sty = style || {};
        sty.display = this.state.visibility ? "block" : "none";
        props.style = sty;

        props.footers = this.footers;

        return (
            <Panel {...props} content={this.state.msg}></Panel>
        );
    }
}

MessageBox.propTypes = {
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

module.exports = MessageBox;