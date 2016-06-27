/**
 * @author cqb 2016-04-26.
 * @module Input
 */

const React = require("react");
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const grids = require('utils/grids');
const getGrid = grids.getGrid;
const Omit = require('utils/omit');
const Dom = require('utils/Dom');
const Regs = require('utils/regs');
const FormControl = require('FormControl');
const PropTypes = React.PropTypes;

/**
 * TextArea 类
 * @class TextArea
 * @constructor
 * @extend BaseComponent
 */
class TextArea extends BaseComponent {

    defaultProps = {
        trigger: 'blur',
        value: ''
    };

    constructor(props) {
        super(props);

        this.addState({
            value: props.value
        });
    }

    componentWillReceiveProps (nextProps) {
        let value = nextProps.value;
        if (value !== this.props.value && value !== this.state.value) {
            this.setState({ value });
        }
    }

    handleChange(event){
        this.props.autoHeight && this.autoHeight(event);

        const { readOnly, type, trigger } = this.props;

        if (readOnly) {
            return;
        }

        let value = event.target.value;

        this.setState({ value });

        if (trigger === 'change') {
            this.handleTrigger(event);
        }
    }

    autoHeight(event){
        let ele = event.target;
        if(!this.initHeight){
            this.initHeight = ele.clientHeight;
        }
        if(ele.scrollHeight > this.initHeight) {
            ele.style.height = 'auto';
            ele.style.overflowY = "hidden";
            ele.scrollTop = 0; //防抖动
            let pd = this.getPadding(ele);
            ele.style.height = (ele.scrollHeight+pd) + 'px';
        }
    }

    getPadding(ele){
        let pd_top = parseFloat(Dom.css(ele, "paddingTop"));
        let pd_bottom = parseFloat(Dom.css(ele, "paddingBottom"));
        let bd_top = parseFloat(Dom.css(ele, "borderTopWidth"));
        let bd_bottom = parseFloat(Dom.css(ele, "borderBottomWidth"));

        return pd_top+pd_bottom+bd_top+bd_bottom;
    }

    handleTrigger(event){
        let value = event.target.value;
        if(this.props.onChange) {
            this.props.onChange(value, event);
        }
        this.emit("change", value);
    }

    getValue(){
        return this.state.value;
    }

    setValue(value){
        this.setState({ value });
    }

    render () {
        let { className, grid, type, trigger, style, height} = this.props;
        const others = Omit(this.props, ["className", "grid", "type", "trigger", "style"]);
        let handleChange = this.props.handleChange ? (event)=>{this.props.handleChange(event, {component: this})} : this.handleChange.bind(this);
        style = style || {};
        style["height"] = height;
        const props = {
            className: classnames(
                className,
                'cm-form-control',
                getGrid(grid)
            ),
            onChange: handleChange,
            style
        };

        if (trigger && trigger !== 'change') {
            let handle = 'on' + trigger.charAt(0).toUpperCase() + trigger.slice(1);
            props[handle] = handleChange;
        }

        return (<textarea {...others} {...props} value={this.state.value}></textarea>);
    }
}


FormControl.register(TextArea, ["textarea"]);

TextArea.propTypes = {
    /**
     * 默认选中的值
     * @attribute value
     * @type {String}
     */
    value: PropTypes.string,
    /**
     * 自定义class
     * @attribute className
     * @type {String}
     */
    className: PropTypes.string,
    /**
     * 禁用
     * @attribute disabled
     * @type {Boolean}
     */
    disabled: PropTypes.bool,
    /**
     * 只读
     * @attribute readOnly
     * @type {Boolean}
     */
    readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /**
     * 自适应高度
     * @attribute autoHeight
     * @type {Boolean}
     */
    autoHeight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /**
     * 高度
     * @attribute height
     * @type {String}
     */
    height: PropTypes.string
};

module.exports = TextArea;