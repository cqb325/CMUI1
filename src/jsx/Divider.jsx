/**
 * @author cqb 2016-09-12.
 * @module Divider
 */

const React = require("react");
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");


/**
 * Divider 类
 * @class Divider
 * @constructor
 * @extend BaseComponent
 */
class Divider extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render(){
        let {style, className, theme} = this.props;
        className = classnames(className, "cm-divider", theme);
        return (
            <hr style={style} className={className} />
        );
    }
}

Divider.defaultProps = {
    theme: "default"
};

Divider.propTypes = {

};

module.exports = Divider;