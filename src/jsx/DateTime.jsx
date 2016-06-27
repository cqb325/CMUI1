/**
 * @author cqb 2016-04-05.
 * @module Datetime
 */

const React = require("react");
const ReactDOM = require("react-dom");
const classnames = require("classnames");
const moment = require("moment");
const Dom = require("utils/Dom");
const clickAway = require("utils/ClickAway");
const BaseComponent = require("core/BaseComponent");
const PropTypes = React.PropTypes;
const Date = require('Date');
const shallowEqual = require("utils/shallowEqual");
const FormControl = require('FormControl');
const grids = require('utils/grids');
const getGrid = grids.getGrid;

/**
 * Datetime 类
 * @class Datetime
 * @constructor
 * @extend BaseComponent
 */
class Datetime extends BaseComponent {
    constructor (props) {
        super(props);

        this.addState({
            visibility: false,
            value: props.value
        });
    }

    /**
     * ClickAway 点击别的地方的回调
     * @method componentClickAway
     */
    componentClickAway() {
        this.hide();
    }

    /**
     * 显示操作
     * @method show
     */
    show(){
        if (this.props.readOnly || this.props.disabled) {
            return;
        }

        let ele = ReactDOM.findDOMNode(this.refs.datePicker);
        ele.style.display = 'block';

        let container = Dom.closest(ele, ".cm-datetime");
        let offset = Dom.getOuterHeight(ele) + 5;
        let dropup = Dom.overView(container, offset);

        Dom.withoutTransition(container, () => {
            this.setState({ dropup });
        });

        if(!this.state.visibility) {
            super.show();
            setTimeout(() => {
                let dateComp = this.refs.date;
                dateComp.show();

                this.bindClickAway();
            }, 0);
        }
    }

    /**
     * 隐藏操作
     * @method show
     * @returns {boolean}
     */
    hide() {
        super.hide();
        this.unbindClickAway();

        let dateComp = this.refs.date;

        if(dateComp.view === "datetime" && dateComp.state.stage === "time"){
            dateComp.setState({
                stage: 1
            });
        }
    }

    /**
     * 设置值
     * @method setValue
     * @param value {String} 当前值
     */
    setValue(value) {
        this.setState({
            value: value
        });
    }

    /**
     * 获取值
     * @method getValue
     * @return {String} 当前值
     */
    getValue() {
        return this.state.value;
    }

    _selectDate(value, date){
        this.setState({
            value: value
        });

        if(this.props.onSelectDate) {
            this.props.onSelectDate(value, date);
        }

        this.emit("selectDate", value, date);


        if(this.props.onChange) {
            this.props.onChange(value, date);
        }

        this.emit("change", value, date);
    }

    componentWillReceiveProps(newProps){
        if(!shallowEqual(newProps, this.props)){
            let propsChangeFlag = this.state.propsChangeFlag || 0;
            this.setState({
                propsChangeFlag: propsChangeFlag + 1
            });
        }
    }

    componentDidMount(){
        let dateComp = this.refs.date;

        dateComp.on("hide", ()=>{
            this.hide();
        });

        dateComp.on("selectTime", (value)=>{
            this.emit("selectTime", value);
        });
        dateComp.on("selectMonth", (value)=>{
            this.emit("selectMonth", value);
        });
        dateComp.on("selectYear", (value)=>{
            this.emit("selectYear", value);
        });
    }

    getReference(){
        return this.refs.date;
    }

    /**
     * 渲染组件结构
     * @method render
     * @returns {XML}
     */
    render() {
        let {className, grid, readOnly, disabled, name, placeholder, style} = this.props;
        className = classnames(
            className,
            'cm-datetime',
            this.state.theme,
            getGrid(grid),
            {
                disabled: disabled || readOnly,
                active: this.state.active && !readOnly,
                dropup: this.state.dropup
            }
        );

        let text = this.state.value ? this.state.value : "";
        text = text ?
            (<span className="date-text"><input type="hidden" name={name} value={this.state.value}/>{text}</span>) :
            (<span className="date-text"><input type="hidden" name={name} value={this.state.value}/>{placeholder}&nbsp;</span>);

        return (<div ref="datetime" onClick={this.show.bind(this)} className={className} style={style||{}}>
            {text}
            <i className="fa fa-calendar" />
            <div className="cm-datetime-wrap" ref="datePicker" style={{display: this.state.visibility ? "block" : "none"}}>
                <Date ref="date" {...this.props} onSelectDate={this._selectDate.bind(this)}></Date>
            </div>
        </div>);
    }
}

Datetime = clickAway(Datetime);

Datetime.propTypes = {
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
     * 只读
     * @attribute readOnly
     * @type {Boolean}
     */
    readOnly: PropTypes.bool,
    /**
     * 默认值
     * @attribute value
     * @type {string/moment}
     */
    value: PropTypes.oneOfType([PropTypes.string,PropTypes.instanceOf(moment)]),
    /**
     * 显示状态 "datetime","date","time"
     * @attribute view
     * @type {string}
     */
    view: PropTypes.oneOf(["datetime","date","time"]),
    /**
     * 格式化
     * @attribute format
     * @type {string}
     */
    format: PropTypes.string,
    /**
     * 开始时间
     * @attribute startDate
     * @type {string/moment}
     */
    startDate: PropTypes.oneOfType([PropTypes.string,PropTypes.instanceOf(moment)]),
    /**
     * 结束时间
     * @attribute endDate
     * @type {string/moment}
     */
    endDate: PropTypes.oneOfType([PropTypes.string,PropTypes.instanceOf(moment)])
};

FormControl.register(Datetime, "datetime");

module.exports = Datetime;