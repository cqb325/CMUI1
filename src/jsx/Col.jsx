const React = require("react");
const classnames = require("classnames");
const grids = require('utils/grids');

let Row = React.createClass({
    render(){
        let className = classnames("cm-col", this.props.className, grids.getGrid(this.props.grid));
        let eleName = this.props.component || "div";
        return React.createElement(eleName, {
            className: className,
            style: this.props.style
        }, this.props.children);
    }
});


module.exports = Row;