/**
 * @author cqb 2016-05-19.
 * @module Form
 */

const React = require("react");
const ReactDOM = require("react-dom");
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const grids = require('utils/grids');
const Button = require('Button');
const Dom = require('utils/Dom');
const Ajax = require('core/Ajax');
const getGrid = grids.getGrid;
const PropTypes = React.PropTypes;

/**
 * Form 类
 * @class Form
 * @constructor
 * @extend BaseComponent
 */
class Form extends BaseComponent {

    constructor(props) {
        super(props);

        this.action = props.action;
        this.method = props.method;
        this.target = props.target;
        //是否使用默认提交按钮
        this.useDefaultSubmitBtn = this.props.useDefaultSubmitBtn == undefined ? true : this.props.useDefaultSubmitBtn;

        this.items = {};

        this.addState({

        });
    }

    /**
     * 是否验证通过
     * @method isValid
     * @returns {boolean} 是否验证通过
     */
    isValid(){
        for(let name in this.items){
            let control = this.items[name];

            if(!control.ref.check()){
                return false;
            }
        }

        return true;
    }

    /**
     * 将子元素绑定到表单
     * @method itemBind
     * @param data 子元素数据
     */
    itemBind(data){
        if(data.name && data.isFormItem){
            this.items[data.name] = data;
        }else{
            console.log(data.ref , "need a name property");
        }
    }

    /**
     * 将子元素从表单中解绑
     * @method itemUnBind
     * @param name
     */
    itemUnBind(name){
        delete this.items[name];
    }

    /**
     * 渲染子元素
     * @method renderChildren
     * @returns {*}
     */
    renderChildren(){
        return React.Children.map(this.props.children, (child)=>{
            let componentName = child.type.name || child.type.toString().match(/function\s*([^(]*)\(/)[1];
            if(componentName === 'FormControl'){
                let props = Object.assign({
                    "data-itemBind": this.itemBind.bind(this)
                },child.props);
                props.layout = this.props.layout ? this.props.layout : props.layout;
                return React.cloneElement(child, props);
            }else {
                return child;
            }
        });
    }

    /**
     * 提交表单
     * @method submit
     */
    submit(){
        let {method,customParams, success, error} = this.props;
        if(this.isValid()){
            if(method === "ajax"){
                let params = customParams ? customParams() : this.getFormParams();
                Ajax.ajax({
                    url: this.action,
                    method: 'post',
                    data: params,
                    dataType: "json",
                    success: success,
                    error: error
                });
            }else if(method === "custom"){
                if(this.props.submit) {
                    this.props.submit();
                }
            }else{
                this.refs.form.submit();
            }
        }
    }

    /**
     * 获取表单的Items
     * method getItems
     * @returns {{}|*}
     */
    getItems(){
        return this.items;
    }

    /**
     * 获取表单元素的值
     * @method getFormParams
     * @returns {{}}
     */
    getFormParams(){
        let params = {};
        for(let name in this.items){
            let control = this.items[name];
            let value = control.ref.getValue();
            params[name] = value;
        }

        return params;
    }

    /**
     * 渲染提交按钮
     * @method renderSubmit
     * @returns {XML}
     */
    renderSubmit(){
        if(this.useDefaultSubmitBtn) {
            return (
                <Button theme="success" onClick={this.submit.bind(this)}>{this.props.submitText || "保 存"}</Button>
            );
        }else{
            return null;
        }
    }

    render () {
        let { className, grid, style, children} = this.props;

        className = classnames("cm-form",className, getGrid(grid));

        return (
            <form ref="form" className={className} style={style} action={this.action} method={this.method||"post"} target={this.target}>
                {this.renderChildren()}

                <div style={{"textAlign": "center"}}>
                    {this.renderSubmit()}
                </div>
            </form>
        );
    }
}

Form.propTypes = {
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
    style: PropTypes.object,
    /**
     * 宽度
     * @attribute grid
     * @type {Object/Number}
     */
    grid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * 提交服务
     * @attribute action
     * @type {String}
     */
    action: PropTypes.string,
    /**
     * 提交方式
     * @attribute method
     * @type {String}
     */
    method: PropTypes.oneOf(["post","get","ajax","custom"]),
    /**
     * 提交目标
     * @attribute target
     * @type {String}
     */
    target: PropTypes.string,
    /**
     * 提交按钮文字
     * @attribute submitText
     * @type {String}
     */
    submitText: PropTypes.string,
    /**
     * 布局
     * @attribute layout
     * @type {String}
     */
    layout: PropTypes.string,
    /**
     * 是否使用默认的提交按钮
     * @attribute useDefaultSubmitBtn
     * @type {String/Boolean}
     */
    useDefaultSubmitBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

module.exports = Form;