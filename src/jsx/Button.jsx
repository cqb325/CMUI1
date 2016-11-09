/**
 * @author cqb 2016-04-05.
 * @module Button
 */

const React = require("react");
const PropTypes = React.PropTypes;
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const FontIcon = require('FontIcon');
const EnhancedButton = require('internal/EnhancedButton');


/**
 * Button 类
 * @class Button
 * @constructor
 * @extend BaseComponent
 */
class Button extends BaseComponent {
    constructor(props) {
        super(props);

        this.addState({
            disabled: props.disabled,
            raised: false,
            text: null
        });
    }

    /**
     * 禁用
     * @method disable
     * @param elem {Element} 显示的内容
     */
    disable(elem) {
        this.setState({ disabled: true, show: elem });
    }

    /**
     * 启用
     * @method enable
     * @param elem {Element} 显示的内容
     */
    enable(elem) {
        this.setState({ disabled: false, show: elem });
    }

    /**
     * 设置按钮的文字
     * @method setText
     * @param text {String} 要设置的按钮文字
     */
    setText(text){
        this.setState(text);
    }

    /**
     * 点击回调
     * @private
     * @method _handleClick
     */
    _handleClick(e){
        if(this.state.disabled){
            return;
        }
        if (this.props.onClick) {
            this.props.onClick();
        }
        this.emit("click");
        if (this.props.once) {
            this.disable();
        }
    }

    handleMouseDown = (event) => {
        if (event.button === 0 && !this.props.disabled) {
            this.setState({
                raised: true
            });
        }
    };

    handleMouseUp = () => {
        if(!this.props.disabled) {
            this.setState({
                raised: false
            });
        }
    };

    /**
     * 渲染
     */
    render(){
        const className = classnames(
            this.props.className,
            'cm-button',
            this.state.theme,
            {
                "cm-iconButton": this.props.iconButton,
                raised: this.props.raised && this.state.raised,
                flat: this.props.flat
            }
        );

        let link = this.props.href || "javascript:void(0)";

        let props = this.props;
        let iconPosition = this.props.iconAlign || "left";
        let icon = this.props.icon ? (<FontIcon icon={this.props.icon} className={iconPosition}/>) : null;

        let nodes = iconPosition === "left" ?
            (<EnhancedButton>
                {icon}
                {props.children}
            </EnhancedButton>) :
            (<EnhancedButton>
                {props.children}
                {icon}
            </EnhancedButton>);

        return (
            <a href={link} ref="button"
               disabled={this.state.disabled}
               onClick={this._handleClick.bind(this)}
               onMouseUp={this.handleMouseUp}
               onMouseDown={this.handleMouseDown}
               className={className}
               style={this.props.style}
               target={this.props.target}>
                {nodes}
            </a>
        );
    }
}

Button.propTypes = {
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
     * 禁用
     * @attribute disabled
     * @type {Boolean}
     */
    disabled: PropTypes.bool,
    /**
     * 主题
     * @attribute theme
     * @type {String}
     */
    theme: PropTypes.string,
    /**
     * 升起效果
     * @attribute raised
     * @type {string/bool}
     */
    raised: PropTypes.oneOfType([PropTypes.string,PropTypes.bool]),
    /**
     * 无边框效果
     * @attribute flat
     * @type {string/bool}
     */
    flat: PropTypes.oneOfType([PropTypes.string,PropTypes.bool]),
    /**
     * 链接地址
     * @attribute href
     * @type {string}
     */
    href: PropTypes.string,
    /**
     * 图标
     * @attribute icon
     * @type {string}
     */
    icon: PropTypes.string,
    /**
     * 图标位置
     * @attribute iconAlign
     * @type {string}
     */
    iconAlign: PropTypes.oneOf(["left","right"])
};

module.exports = Button;