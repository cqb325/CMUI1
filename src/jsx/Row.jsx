const React = require("react");
const classnames = require("classnames");

let Col = React.createClass({
    render(){
        let className = classnames("cm-row", this.props.className);
        let eleName = this.props.component || "div";
        return React.createElement(eleName, {
            className: className,
            style: this.props.style
        }, this.props.children);
    }
});


module.exports = Col;