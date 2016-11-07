/**
 * @author cqb 2016-05-05.
 * @module Progress
 */

const React = require("react");
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const grids = require('utils/grids');
const getGrid = grids.getGrid;

/**
 * Progress 类
 * @class Progress
 * @constructor
 * @extend BaseComponent
 */
class Progress extends BaseComponent {
    constructor(props) {
        super(props);

        this.addState({
            value: parseFloat(props.value) || parseFloat(props.min) || 0,
            min: parseFloat(props.min) || 0,
            max: parseFloat(props.max) || 100
        });
    }

    update(value){
        if(this.isMounted()) {
            this.setState({
                value: value
            });
        }
    }

    render(){
        let {className, style, disabled, grid, showPercent, striped,active} = this.props;
        className = classnames("cm-progress", className, getGrid(grid), this.state.theme, {
            disabled: disabled,
            striped: striped,
            active: active
        });
        let width = ((this.state.value - this.state.min) / (this.state.max - this.state.min) * 100).toFixed(2) +"%";
        let percent = showPercent ? width : null;
        return (
            <div className={className} style={style}>
                <div className="cm-progress-bar" style={{width: width}}>
                    {percent}
                </div>
            </div>
        );
    }
}

module.exports = Progress;