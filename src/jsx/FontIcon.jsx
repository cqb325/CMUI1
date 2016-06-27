/**
 * @author cqb 2016-04-17.
 * @module FontIcon
 */

const React = require("react");
const PropTypes = React.PropTypes;
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");

/**
 * 字体图标
 * @class FontIcon
 * @extend BaseComponent
 */
class FontIcon extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render(){
        const {
            icon,
            spin,
            pulse,
            title
        } = this.props;

        let size = this.props.size ? "fa-"+this.props.size : false;
        let rotate = this.props.rotate ? "fa-rotate-"+this.props.rotate : false;
        let className = classnames("fa", "fa-"+icon, size, this.props.className,{
            "fa-spin": spin,
            "fa-pulse": pulse
        }, rotate);

        let style = this.props.style || {};
        if(this.props.color){
            style.color = this.props.color;
        }
        return(
            <i className={className} style={style} onClick={this.props.onClick} title={title}>
                {this.props.children}
            </i>
        );
    }
}

FontIcon.propTypes = {
    /**
     * 图标名称 font awesome 中的图标
     * @attribute icon
     * @type {String}
     */
    icon: PropTypes.string
};

module.exports = FontIcon;