/**
 * @author cqb 2017-01-05.
 * @module Switch
 */

const React = require("react");
const ReactDOM = require('react-dom');
const Dom = require('utils/Dom');
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const FontIcon = require("FontIcon");

/**
 * Switch 类
 * @class Switch
 * @constructor
 * @extend BaseComponent
 */
class Switch extends BaseComponent {
    constructor(props) {
        super(props);

        this.addState({
            checked: props.checked,
            disabled: props.disabled || false
        });
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.checked !== this.state.checked){
            this.setState({
                checked: nextProps.checked
            })
        }
    }

    componentDidMount(){

    }

    toggleSwitch(){
        if(this.state.disabled){
            return;
        }
        this.setState({
            checked: !this.state.checked
        });

        let value = this.state.checked ? 1 : 0;
        if(this.props.onChange){
            this.props.onChange(value);
        }
        this.emit("change", value);
    }

    render(){
        let {className, style} = this.props;
        className = classnames("cm-switch", className, this.props.size, {
            checked: this.state.checked,
            disabled: this.state.disabled
        });

        let text = this.state.checked ? this.props.checkedText : this.props.unCheckedText;

        return (
            <span className={className} style={style} tabIndex="0" onClick={this.toggleSwitch.bind(this)}>
                <span className="cm-switch-inner">{text}</span>
                <input name={this.props.name} type="hidden" value={this.state.checked ? 1 : 0}/>
            </span>
        );
    }
}

module.exports = Switch;