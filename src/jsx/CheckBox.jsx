/**
 * @author cqb 2016-04-26.
 * @module CheckBox
 */

const React = require("react");
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const EnhancedButton = require('internal/EnhancedButton');
const PropTypes = React.PropTypes;

/**
 * CheckBox 类
 * @class CheckBox
 * @constructor
 * @extend BaseComponent
 */
class CheckBox extends BaseComponent {
    constructor(props) {
        super(props);

        this.addState({
            value: props.value,
            checked: props.checked || false
        });
    }

    /**
     * 值变化回调
     * @method handleChange
     * @param event {Event} 事件对象
     */
    handleChange(event){
        const { readOnly, disabled} = this.props;

        if (readOnly || disabled) {
            return;
        }

        if(this.props.type == "radio" && this.state.checked){
            return;
        }

        let checked = !this.state.checked;
        this.setState({ checked: checked });

        this.handleTrigger(checked, event);
    }

    /**
     * 处理值变化
     * @method handleTrigger
     * @param checked {Boolean} 是否选中
     * @param event {Event} 事件对象
     */
    handleTrigger(checked, event){
        let value = this.state.value;
        if(this.props.onChange) {
            this.props.onChange(value, checked, event, this.props.item);
        }

        this.emit("change");
    }

    /**
     * 更新状态
     * @method updateState
     * @param state {Object} state对象
     */
    updateState(state){
        this.setState(state);
    }

    render () {
        let { className,name, type, item, readOnly, disabled } = this.props;
        className = classnames(
            className,
            'cm-checkbox',
            {
                active: this.state.checked,
                disabled: disabled || readOnly
            }
        );

        type = type || "checkbox";

        if(item){
            item._node = this;
        }

        return (
            <span className={className} onClick={this.handleChange.bind(this)}>
                <input ref="input" checked={this.state.checked}
                       type={type} name={name}
                       defaultValue={this.state.value}
                       style={{display: "none"}}
                       onChange={()=>{}}
                    />
                <span style={{position: "relative"}}>
                    <EnhancedButton disabled={disabled||readOnly} centerRipple={true} touchRippleColor={'rgba(0, 0, 0, 0.2)'}>
                        <span className="cm-checkbox-icon"></span>
                    </EnhancedButton>
                </span>
                <label>{this.props.label}</label>
            </span>
        );
    }
}

CheckBox.propTypes = {
    /**
     * 默认值
     * @attribute value
     * @type {String}
     */
    value: PropTypes.string,
    /**
     * 组件类型
     * @attribute type
     * @type {String}
     * @default checkbox
     */
    type: PropTypes.string,
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
     * 显示的label
     * @attribute label
     * @type {String}
     */
    label: PropTypes.string,
    /**
     * 值变化回调
     * @attribute onChange
     * @type {Function}
     */
    onChange: PropTypes.func
};

module.exports = CheckBox;