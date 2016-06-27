/**
 * @author cqb 2016-04-27.
 * @module CheckBoxGroup
 */

const React = require("react");
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const CheckBox = require("CheckBox");
const Ajax = require("core/Ajax");
const PropTypes = React.PropTypes;
const FormControl = require('FormControl');

/**
 * CheckBoxGroup 类
 * @class CheckBoxGroup
 * @constructor
 * @extend BaseComponent
 */
class CheckBoxGroup extends BaseComponent {
    constructor(props) {
        super(props);

        this.addState({
            data: props.data,
            value: props.value || ""
        });
    }

    /**
     * 值变化回调
     * @method handleChange
     * @param value {String} 当前操作对象的值
     * @param checked   {Boolean} 知否选中
     * @param event     {Event} 事件对象
     * @param item  {Object} 当前操作对象
     */
    handleChange(value, checked, event, item){
        const { readOnly, disabled} = this.props;

        if (readOnly || disabled) {
            return;
        }

        item._checked = checked;
        let data = this.state.data, ret=[];
        let value_key = this.props.valueField ? this.props.valueField : "id";
        data.forEach(function(theItem) {
            if(theItem._checked){
                let value = theItem[value_key];
                ret.push(value);
            }
        });

        this.handleTrigger(ret.join(","));
    }

    /**
     * 处理值变化
     * @method handleTrigger
     * @param value {String} 当前值
     */
    handleTrigger(value){
        this.state.value = value;
        if(this.props.onChange) {
            this.props.onChange(value);
        }

        this.emit("change", value);
    }

    /**
     * 设置值
     * @method setValue
     * @param value {String} 要设置的值
     */
    setValue(value){
        this.setState({value: value});
    }

    /**
     * 获取值
     * @method getValue
     * @returns {*}
     */
    getValue(){
        return this.state.value;
    }

    /**
     * 渲染子节点
     * @method _renderItems
     * @returns {Array} 子对象
     * @private
     */
    _renderItems(){
        let {valueField, textField, name} = this.props;

        let data = this.state.data || [];
        let values = this.state.value.split(",");
        return data.map(function(item, index){
            let value_key = valueField ? valueField : "id";

            let text_key = textField ? textField : "text";
            let value = item[value_key], text = item[text_key];
            let checked = values.indexOf(value) != -1;
            item._checked = checked;

            return (<CheckBox key={index}
                              name={name}
                              disabled={this.props.disabled}
                              readOnly={this.props.readOnly}
                              value={value}
                              label={text}
                              checked={checked}
                              item={item}
                              onChange={this.handleChange.bind(this)}
                ></CheckBox>);
        }, this);
    }

    componentWillMount(){
        if(this.props.url){
            let scope = this;
            Ajax.get(this.props.url, {}, function(data, err){
                scope.setState({
                    data: data
                });
            });
        }
    }

    render () {
        let { className,name,layout } = this.props;
        className = classnames(
            className,
            'cm-checkbox-group',
            {
                stack: layout == "stack"
            }
        );

        return (
            <span className={className}>
                {this._renderItems()}
            </span>
        );
    }
}

CheckBoxGroup.defaultProps = {
    layout: "inline"
};

CheckBoxGroup.propTypes = {
    /**
     * 数据源
     * @attribute data
     * @type {Array}
     */
    data: PropTypes.array,
    /**
     * 默认值
     * @attribute value
     * @type {String}
     */
    value: PropTypes.string,
    /**
     * 数据源地址
     * @attribute url
     * @type {String}
     */
    url: PropTypes.string,
    /**
     * 只读属性
     * @attribute readOnly
     * @type {Boolean}
     */
    readOnly: PropTypes.bool,
    /**
     * 禁用属性
     * @attribute disabled
     * @type {Boolean}
     */
    disabled: PropTypes.bool,
    /**
     * 组名
     * @attribute name
     * @type {String}
     */
    name: PropTypes.string,
    /**
     * class样式名称
     * @attribute className
     * @type {String}
     */
    className: PropTypes.string,
    /**
     * 行式inline、堆积stack布局
     * @attribute layout
     * @type {String}
     */
    layout: PropTypes.oneOf(["inline","stack"]),
    /**
     * value字段
     * @attribute valueField
     * @type {String}
     */
    valueField: PropTypes.string,
    /**
     * 显示字段
     * @attribute textField
     * @type {String}
     */
    textField: PropTypes.string,
    /**
     * 值变化回调
     * @attribute onChange
     * @type {Function}
     */
    onChange: PropTypes.func
};

FormControl.register(CheckBoxGroup, "checkbox", "array");

module.exports = CheckBoxGroup;