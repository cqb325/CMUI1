
const React = require("react");
const Component = React.Component;
const createFragment = React.addons.createFragment;
const TouchRipple = require("internal/TouchRipple");

class EnhancedButton extends Component {

    /**
     * 创建按钮子元素
     * @method createButtonChildren
     * @returns {*}
     */
    createButtonChildren() {
        const {
            children,
            disabled,
            centerRipple,
            touchRippleColor,
            touchRippleOpacity,
            initFull
            } = this.props;

        const touchRipple = !disabled ? (
            <TouchRipple
                centerRipple={centerRipple}
                color={touchRippleColor}
                opacity={touchRippleOpacity}
                initFull={initFull}
                >
                {children}
            </TouchRipple>
        ): undefined;

        return createFragment({
            touchRipple: touchRipple,
            children: touchRipple ? undefined : children
        });
    }

    handleClick(event) {
        if (!this.props.disabled) {
            if(this.props.onClick) {
                this.props.onClick(event);
            }
        }
    }

    render() {
        const {
            disabled,
            onClick,
            style
            } = this.props;

        const mergedStyles = Object.assign({
            border: 10,
            background: 'none',
            boxSizing: 'border-box',
            display: 'inline-block',
            cursor: disabled ? 'default' : 'pointer',
            textDecoration: 'none',
            outline: 'none',
            font: 'inherit'
        }, style);

        const buttonChildren = this.createButtonChildren();

        let props = {
            style:mergedStyles,
            disabled: disabled,
            onClick: this.handleClick.bind(this)
        };
        return(
            <span {...props}>
                {buttonChildren}
            </span>
        );
    }
}

module.exports = EnhancedButton;