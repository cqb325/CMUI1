/**
 * @author cqb 2016-04-26.
 * @module Input
 */

const React = require("react");
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const grids = require('utils/grids');
const getGrid = grids.getGrid;
const Omit = require('utils/omit');
const Regs = require('utils/regs');
const Validation = require('utils/Validation');
const Label = require('Label');
const PropTypes = React.PropTypes;
const Ajax = require('core/Ajax');
const Tooltip = require('Tooltip');


/**
 * FormControl 类
 * 子元素只能有一个子元素控件
 * @class FormControl
 * @constructor
 * @extend BaseComponent
 */
class FormControl extends BaseComponent {
    displayName="FormControl";

    constructor(props) {
        super(props);

        this.rules = props.rules || {};
        this.messages = props.messages || {};
        this._isFormItem = (props.isFormItem != undefined) ? props.isFormItem : true;
        this._name = props.name;
        this._areaLabel = false;
        this._tipAlign = props.tipAlign || "right";
        if(props.required){
            this.rules["required"] = true;
        }
        this.addState({
            errorTip: ''
        });

        this.item = null;
    }

    /**
     * 获取类型对应的元素
     * @method _getControl
     * @param type
     * @returns {*}
     * @private
     */
    _getControl(type){
        let component = null;
        if(type) {
            component = FormControl.COMPONENTS[type];
            if(!component) {
                component = FormControl.COMPONENTS["text"];
            }

            let others = Omit(this.props, ["className","children","layout","rules","messages","isFormItem","onValid","onChange","label","labelGrid"]);
            let props = Object.assign({
                type: this.props.type,
                key: this.props.name,
                id: this.props.id,
                ref: "formItem",
                "data-valueType": component.valueType
            }, others);
            let componentName = component.component.name || component.component.toString().match(/function\s*([^(]*)\(/)[1];
            if(componentName === 'Input'){
                props["data-handleChange"] = this.handleChange.bind(this);
            }else if(componentName === 'TextArea'){
                this._areaLabel = true;
                props["data-handleChange"] = this.handleChange.bind(this);
            }else{
                props.onChange = this.onChange.bind(this);
            }

            component = React.createElement(component.component, props);
        }
        return component;
    }

    /**
     * 渲染子元素
     * @method _renderChildren
     * @returns {*}
     * @private
     */
    _renderChildren(){
        let {children} = this.props;

        return React.Children.map(children, (child, index)=>{
            let registerComp = this.isRegisterComponent(child);
            if(registerComp){
                let others = Omit(this.props, ["className","children","layout","rules","messages","isFormItem","onValid","onChange","label","labelGrid"]);
                let props = Object.assign({
                    key: index,
                    "data-valueType": registerComp.valueType,
                    ref: "formItem"
                }, others);

                props = Object.assign(props, child.props);

                let componentName = child.type.name || child.type.toString().match(/function\s*([^(]*)\(/)[1];

                if(componentName === 'Input' || componentName === 'TextArea'){
                    props["data-handleChange"] = this.handleChange.bind(this);
                    if(componentName === 'TextArea'){
                        this._areaLabel = true;
                    }
                }else{
                    props.onChange = this.onChange.bind(this);
                }

                return React.cloneElement(child, props);
            }else{
                return child;
            }
        });
    }

    /**
     * 判断是否为已注册的空间
     * @method isRegisterComponent
     * @param child
     * @returns {boolean}
     */
    isRegisterComponent(child){
        for(let type in FormControl.COMPONENTS){
            let typeComp = FormControl.COMPONENTS[type];
            if(typeComp.component == child.type){
                return typeComp;
            }
        }

        return false;
    }

    /**
     * 对Input处理change变化事件
     * @method handleChange
     * @param event {Event} 事件对象
     */
    handleChange(event){
        let { readOnly, type, trigger } = this.props;
        if(readOnly){
            return;
        }
        //textArea
        this.props.autoHeight && this.autoHeight(event);

        if(!this.item){
            this.item = this.refs["formItem"];
        }
        //chilren自定义
        type = type || this.item.props.type;

        let value = event.target.value;

        if (value && (type === 'integer' || type === 'number')) {
            if (!Regs[type].test(value)) {
                value = this.state.value || '';
            }
        }

        this.item.setState({ value });

        if(trigger && trigger == event.type) {
            let valid = this.check(value);
            if(this.props.onChange){
                this.props.onChange(value);
            }

            if (valid) {
            } else {
            }
        }
    }

    /**
     * 值变化回调
     * @method onChange
     * @param value 当前的值
     */
    onChange(value){
        let valid = this.check(value);
        if(this.props.onChange){
            this.props.onChange(value);
        }
    }

    /**
     * 验证元素
     * @method check
     * @param value {String} 元素的值
     * @returns {boolean} 是否通过
     */
    check(value){
        if(!value){
            value = this.item.getValue();
        }
        let rules = this.rules,
            messages = this.messages,
            rule, result, errorTip;

        if(!rules["required"] && (value == null || value == "" || value == undefined)){
            if(this.state.errorTip) {
                this.setState({errorTip: null});
            }
            return true;
        }

        if(this.item.props.valueType === 'array'){
            value = value ? value.split(",") : [];
        }

        if(rules["required"]){
            rule = { method: "required", parameters: rules[ "required" ] };
            result = this.validByMethod(value, rule, messages);
            if(result == false){
                return false;
            }
        }
        for(let method in rules){
            if(method === "required" || "remote"){
                continue;
            }
            rule = { method: method, parameters: rules[ method ] };

            result = this.validByMethod(value, rule, messages);
            if(result == false){
                return false;
            }
        }
        if(rules["remote"]){
            let url = rules[ "remote" ];
            var name = this.item.props.name;
            if(typeof url === 'function'){
                url = url();
            }else{
                url = this._URLParse(url);
                url = this._rebuildURL(url, {name: value});
            }

            result = this.validByRemote(value, url, messages);
            if(result == false){
                return false;
            }
        }

        if(this.props.onValid){
            this.props.onValid(value, true, this);
        }
        this.emit("valid", value, true, this);

        this.setState({errorTip: null});
        return true;
    }

    /**
     * 解析url
     * @method _URLParse
     * @param url
     * @param otherParams
     * @returns {{pathname: *, query: {}}}
     * @private
     */
    _URLParse(url, otherParams){
        url = url.split("?");
        let params = {};

        if(url[1]){
            let parts = url[1].split("=");
            if(parts.length){
                parts.forEach(function(part){
                    let pair = part.split("&");
                    params[pair[0]] = pair[1];
                });
            }
        }
        if(otherParams){
            for(let key in otherParams){
                params[key] = otherParams[key];
            }
        }

        return {
            pathname: url[0],
            query: params
        }
    }

    /**
     * 重构url
     * @param url
     * @returns {string}
     * @private
     */
    _rebuildURL(url){
        let suffix = [];
        if(url.query){
            for(let key in url.query){
                suffix.push(key+"="+url.query[key]);
            }
        }
        return url.pathname+"?"+suffix.join("&");
    }

    /**
     * 远程验证字段
     * @param value
     * @param url
     * @param messages
     */
    validByRemote(value, url, messages){
        let remoteRet = false;
        Ajax.ajax({
            url: url,
            type: "GET",
            dataType: "text",
            async: "false",
            success: function(ret){
                remoteRet = ret === "true";
            },
            error: function(){
                remoteRet = false;
            }
        });

        var errorTip;
        if(remoteRet === false) {
            errorTip = (messages && messages["remote"]) ? messages["remote"] : Validation.messages["remote"];
            if (typeof errorTip === 'function') {
                errorTip = errorTip.call(null, rule.parameters);
            }
            if(this._isMounted) {
                this.setState({errorTip});
            }
            if (this.props.onValid) {
                this.props.onValid(value, remoteRet, this);
            }
            this.emit("valid", value, remoteRet, this);
        }

        return remoteRet;
    }

    validByMethod(value, rule, messages){
        let method = rule.method;
        if(!Validation.methods[ method ]){
            console.error("验证中缺少"+method+"方法");
            return;
        }
        var result = Validation.methods[ method ].call( this, value, rule.parameters );
        var errorTip;
        if(result == false) {
            errorTip = (messages && messages[method]) ? messages[method] : Validation.messages[method];
            if (typeof errorTip === 'function') {
                errorTip = errorTip.call(null, rule.parameters);
            }
            this.setState({errorTip});
            if (this.props.onValid) {
                this.props.onValid(value, result, this);
            }
            this.emit("valid", value, result, this);
        }

        return result;
    }

    /**
     * 渲染提示信息
     * @method renderErrorTip
     * @returns {Element} 元素
     */
    renderErrorTip(){
        if(this.state.errorTip){
            return <Tooltip theme="danger" bindTarget={this} className={"error-tip"} align={this._tipAlign} ref="tooltip" content={this.state.errorTip}/>;
        }else{
            return null;
        }
    }

    /**
     * 获取表单元素
     * @method getReference
     * @returns {*}
     */
    getReference(){
        return this.refs["formItem"];
    }

    componentDidMount(){
        this._isMounted = true;
        this.item = this.refs["formItem"];
        if(this.props["data-itemBind"] && this.isFormItem()){
            this.props["data-itemBind"]({
                ref: this,
                name: this.props.name,
                isFormItem: this.isFormItem()
            });
        }
    }

    /**
     * 是否验证通过
     * @method isValid
     * @return {boolean} 是否验证通过
     */
    isValid(){
        return !this.state.errorTip;
    }

    /**
     * 获取值
     * @method getValue
     * @returns {String} 字段的值
     */
    getValue(){
        return this.item.getValue();
    }

    /**
     * 设置值
     * @method setValue
     * @param value
     */
    setValue(value){
        this.item.setValue(value);
    }

    /**
     * 获取表单名称
     * @method getName
     * @return {String}  表单名称
     */
    getName(){
        return this._name;
    }

    /**
     * 是否为表单元素
     * @method isFormItem
     * @return {boolean} 是否为表单元素
     */
    isFormItem(){
        return this._isFormItem;
    }

    /**
     * 设置错误信息
     * @method setErrorTip
     * @param msg {String} 错误信息
     */
    setErrorTip(msg){
        this.setState({errorTip: msg});
    }

    /**
     * 动态设置验证规则
     * @param rule
     * @param rule_args
     */
    setRule(rule, rule_args){
        this.rules[rule] = rule_args;
    }

    /**
     * 动态设置验证提示消息
     * @param rule
     * @param message
     */
    setMessage(rule, message){
        this.messages[rule] = message;
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render(){
        let {
            label,
            labelGrid,
            type,
            layout,
            className,
            style,
            children,
            required
            } = this.props;

        className = classnames("cm-form-group", className,{
            inline: layout === "inline",
            invalid: this.state.errorTip ? true : false
        });

        let labelClass = classnames("cm-form-label", {
            required: required || this.required
        });

        let items = this._getControl(type);
        let errorTip = this.renderErrorTip();
        let customChildren = this._renderChildren();

        let labelEle = null;
        if(label){
            if(layout === "inline"){
                labelEle = <Label className={labelClass} component="label" grid={labelGrid} style={this._areaLabel ? {"verticalAlign": "top"} : {}}>{label}</Label>;
            }
            if(layout === "stack"){
                labelEle = <Label className={labelClass} grid={labelGrid} style={this._areaLabel ? {"verticalAlign": "top"} : {}}>{label}</Label>;
            }
        }
        return(
            <div className={className} style={style}>
                {labelEle}
                {items}
                {customChildren}
                {errorTip}
            </div>
        );
    }
}

FormControl.defaultProps = {
    layout: 'inline',
    trigger: "blur"
};

FormControl.COMPONENTS = {

};

/**
 * 注册空间到FormControl
 * @param component 空间类
 * @param type 空间类型
 * @param valueType 值类型
 */
FormControl.register = function(component, type, valueType){
    if(type instanceof Array){
        type.forEach(function(theType){
            if(theType == "number" || theType == "integer" || theType == "tel"){
                valueType = "number";
            }
            FormControl.COMPONENTS[theType] = {
                component: component,
                valueType: valueType || "string"
            };
        });
    }else {
        FormControl.COMPONENTS[type] = {
            component: component,
            valueType: valueType || "string"
        };
    }
};

FormControl.propTypes = {
    /**
     * 类型
     * @attribute type
     * @type {String}
     */
    type: PropTypes.string,
    /**
     * 字段名称
     * @attribute name
     * @type {String}
     */
    name: PropTypes.string,
    /**
     * 布局
     * @attribute layout
     * @type {String}
     */
    layout: PropTypes.string,
    /**
     * 字段提示文字
     * @attribute label
     * @type {String}
     */
    label: PropTypes.string,
    /**
     * 文本框的提示
     * @attribute placeholder
     * @type {String}
     */
    placeholder: PropTypes.string,
    /**
     * 文本的宽度
     * @attribute labelGrid
     * @type {Object/Number}
     */
    labelGrid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * 验证规则
     * @attribute rules
     * @type {Object}
     */
    rules: PropTypes.object,
    /**
     * 字段对应错误信息的提示语
     * @attribute messages
     * @type {Object}
     */
    messages: PropTypes.object,
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
     * 是否为表单元素  默认true 如为false则不会在表单中上传
     * @attribute isFormItem
     * @type {Boolean}
     */
    isFormItem: PropTypes.bool,
    /**
     * 是否必须的校验
     * @attribute required
     * @type {Boolean}
     */
    required: PropTypes.bool,
    /**
     * 验证后的回调
     * @attribute onValid
     * @type {Function}
     */
    onValid: PropTypes.func,
    /**
     * 值变化后的回调
     * @attribute onChange
     * @type {Function}
     */
    onChange: PropTypes.func,
    /**
     * 提示位置
     * @attribute tipAlign
     * @type {String}
     * @default right
     */
    tipAlign: PropTypes.string
};

module.exports = FormControl;