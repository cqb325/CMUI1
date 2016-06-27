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
const Clock = require('Clock');

/**
 * Datetime 类
 * @class Datetime
 * @constructor
 * @extend BaseComponent
 */
class Datetime extends BaseComponent {
    constructor (props) {
        super(props);

        let stages = {
            "time": 0,
            "date": 1,
            "month": 2,
            "year": 3
        };

        this.view = props.view || "datetime";
        let stage = this.view != "datetime" ? props.view : "date", minStage = 0, maxStage = 3;
        if(props.timeOnly){
            this.view = stage = "time";
            maxStage = 0;
        }
        if(props.dateOnly){
            minStage = 1;
            this.view = "date";
        }
        if(props.monthOnly){
            this.view = stage = "month";
            minStage = 2;
        }
        if(props.yearOnly){
            this.view = stage = "year";
            minStage = 3;
        }
        this.minStage = minStage;
        this.maxStage = maxStage;
        this.addState({
            stage: stages[stage],
            visibility: false,
            value: props.value,
            current: moment(props.value),
            startDate: this.props.startDate ? moment(this.props.startDate) : false,
            endDate: this.props.endDate ? moment(this.props.endDate) : false
        });
    }

    /**
     * 格式化值
     * @method formatValue
     * @param value {String} 日期的值
     * @returns {String} 格式化后的日期
     */
    formatValue(value){
        if(this.props.format){
            return moment(value).format(this.props.format);
        }

        let view = this.view;
        let format = null;
        if(view === "datetime"){
            format = "YYYY-MM-DD HH:mm:ss";
        }
        if(view === "date"){
            format = "YYYY-MM-DD";
        }
        if(view === "time"){
            format = "HH:mm:ss";
        }

        if(view === "month"){
            format = "YYYY-MM-01";
        }
        if(view === "year"){
            format = "YYYY-01-01";
        }
        return format ? moment(value).format(format) : "";
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

        let today = moment();

        if(!this.state.visibility) {
            super.show();
            setTimeout(() => {
                this.setState({
                    current: moment(this.state.value) || today
                });

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
        if(this.view === "datetime" && this.state.stage === "time"){
            this.setState({
                stage: 1
            });
        }
    }

    /**
     * 日期选择回调 触发selectDate事件
     * @method dayChange
     * @param date {Object} moment对象
     */
    dayChange(date){
        this.setState({
            value: this.formatValue(date),
            current: date
        });

        this.emit("selectDate", date.toDate());

        if(this.minStage == 0){
            setTimeout(() => {
                this.setState({
                    stage: 0
                });
            },0);
        }else {
            this.hide();
        }
    }

    /**
     * 选择年份 触发selectYear事件
     * @method yearChange
     * @param year {String} 选择的年份
     */
    yearChange(year) {
        var current = this.state.current;
        current.set({"year": year, date: 1});
        let state;
        if(this.minStage == 3){
            state = {
                value: this.formatValue(current),
                current: current
            };
        }else {
            state = {
                stage: 2,
                current: current
            };
        }
        setTimeout(() => {
            this.setState(state);
        }, 0);

        this.emit("selectYear", year);
    }

    /**
     * 月份选择，触发selectMonth事件
     * @method monthChange
     * @param month {String} 选择的年份
     */
    monthChange(month) {
        let current = this.state.current;
        current.set({"month": month, date: 1});

        let state;
        if(this.minStage == 2){
            state = {
                value: this.formatValue(current),
                current: current
            };
        }else {
            state = {
                stage: 1,
                current: current
            };
        }
        setTimeout(() => {
            this.setState(state);
        }, 0);
        this.emit("selectMonth", month);
    }

    /**
     * 时刻变化，触发selectTime事件
     * @method timeChange
     * @param time{String} 选择的时刻
     */
    timeChange(time){
        time = time.time;
        let current = this.state.current;
        current.set({"hour": time.get("hour"), minute: time.get("minute"), second: time.get("second")});

        setTimeout(() => {
            this.setState({
                current: current,
                value: current.format("YYYY-MM-DD HH:mm:ss")
            });
        }, 0);

        this.emit("selectTime", current.format("HH:mm:ss"));
    }

    /**
     * 改变当前日历显示状态
     * @method stageChange
     * @param stage {String} 显示的状态，包含datetime date time month year
     */
    stageChange(stage){
        if(stage < this.minStage || stage > this.maxStage){
            return;
        }
        if(this.state.stage === stage){
            stage = 1;
        }
        window.setTimeout(()=>{
            this.setState({stage});
        }, 0);
    }

    /**
     * 前一个月
     * @method prev
     */
    prev(){
        let stage = this.state.stage;
        let d;
        if(stage == 1) {
            d = this.state.current.add(-1, 'month');
        }
        if(stage == 2){
            d = this.state.current.add(-1, 'year');
        }
        this.setState({current: d});
    }

    /**
     * 后一个月
     * @method prev
     */
    next() {
        let stage = this.state.stage;
        let d;
        if(stage == 1) {
            d = this.state.current.add(1, 'month');
        }
        if(stage == 2){
            d = this.state.current.add(1, 'year');
        }
        this.setState({current: d});
    }

    /**
     * 渲染要显示的日期，如果设置了startDate或endDate需要进行过滤
     * @method renderDays
     * @return {Array} 日期元素结构
     */
    renderDays(){
        let value = this.state.value,
            current = moment(this.state.current),
            year = current.year(),
            month = current.month(),
            first = moment(current.set("date", 1)),
            end = moment(first).add(1,'months').add(-1,'days'),
            min = 1 - first.weekday(),
            max = (Math.ceil((end.get("date") - min + 1) / 7) * 7),
            days = [];

        //当前视窗需要渲染的日期
        for (let date, i = 0; i < max; i++) {
            let temp = moment(first);
            date = temp.add(i+min, "days");
            days.push(date);
        }

        //当天
        let isToday = value ?
            (year === moment(value).get("year") && month === moment(value).get('month')) :
            false;

        let startDate = this.state.startDate;
        let endDate = this.state.endDate;

        return days.map(function (d, i) {
            //日期过滤
            let disabled = (startDate && moment(d.format(startDate._f)).diff(startDate) < 0) ? true : false;
            disabled = disabled || ((endDate && moment(d.format(endDate._f)).diff(endDate) > 0) ? true : false);

            let className = classnames(
                'day',
                {
                    disabled: disabled,
                    gray: d.get('month') !== month,
                    today: isToday && moment(value).get('date') === d.get('date') && moment(value).get('month') === d.get('month')
                }
            );

            return <button type="button" onClick={() => { this.dayChange(d); }} key={i} className={className}>{d.get('date')}</button>;
        }, this);
    }

    /**
     * 构建需要渲染的年份
     * @method renderYears
     * @returns {Array} 年份渲染结构
     */
    renderYears() {
        let current = moment(this.state.current),
            year = current.get("year");

        let ret = [];
        for(let i = year - 12; i < year + 13; i++){
            ret.push(<button type="button" onClick={() => { this.yearChange(i); }} key={i} className={'year'}>{i}</button>);
        }

        return ret;
    }

    /**
     * 构建需要渲染的月份
     * @method renderMonths
     * @returns {Array} 月份渲染结构
     */
    renderMonths() {
        let current = moment(this.state.current),
            year = current.get("year"),
            month = current.get("month");

        let ret = [];
        let months = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
        for(let i = 0; i < 12; i++){
            ret.push(<button type="button" onClick={() => { this.monthChange(i); }} key={i} className={'month'}>{months[i]}</button>);
        }

        return ret;
    }

    /**
     * 关闭时钟
     * @method timeClose
     */
    timeClose() {
        if(this.view !== "time") {
            this.setState({
                stage: 1
            });
        }
    }

    /**
     * 渲染时钟
     * @method renderClock
     * @returns {XML}
     */
    renderClock(){
        return (
            <Clock ref="clock" view={this.view} value={this.state.current} onChange={this.timeChange.bind(this)} onTimeClose={this.timeClose.bind(this)}></Clock>
        );
    }

    /**
     * 清除显示的日期
     * @method clear
     */
    clear() {
        this.setState({
            value: null
        });
    }

    /**
     * 清除显示的日期
     * @method today
     */
    today() {
        let time = moment(this.state.value);
        let today = moment();
        if(this.view === "datetime"){
            let hour = time.get("hour"),
                minute = time.get("minute"),
                second = time.get("second");
            today.set("hour", hour);
            today.set("minute", minute);
            today.set("second", second);
        }

        this.setState({
            value: today,
            current: moment(today)
        });

        this.emit("selectDate", moment(today).toDate());
    }

    /**
     * 获取星期文案
     * @method _getWeek
     * @returns {Array} 星期结构
     * @private
     */
    _getWeek() {
        return ["日","一","二","三","四","五","六"].map(function (w, i) {
            return <div key={i} className="week">{w}</div>;
        });
    }

    /**
     * 获取日历的头部
     * @method _getHeader
     * @returns {XML} 头部结构
     * @private
     */
    _getHeader(now) {
        if(this.state.stage == 0){
            return "";
        }
        let prev = this.state.stage == 3 ? null : (<a className="prev" onClick={this.prev.bind(this)}>
            <i className="fa fa-chevron-left"/>
        </a>);
        let next = this.state.stage == 3 ? null : (<a className="next" onClick={this.next.bind(this)}>
            <i className="fa fa-chevron-right" />
        </a>);
        let month = this.state.stage > 1 ? null : (<a className="month" onClick={() => { this.stageChange(2); }}>
            {now.format('MM')}
        </a>);
        return (
            <div style={this.props.style} className="date-picker-header">
                {prev}
                <a className="year" onClick={() => { this.stageChange(3); }}>
                    {now.format('YYYY')}
                </a>
                {month}
                {next}
            </div>
        );
    }

    /**
     * 日历footer结构
     * @method _getFooter
     * @returns {XML} footer结构
     * @private
     */
    _getFooter() {
        if(this.state.stage == 1 && this.props.tools) {
            return (
                <div className="date-picker-footer">
                    <a className="clear" onClick={this.clear.bind(this)}>
                        清除
                    </a>
                    <a className="today-btn" onClick={this.today.bind(this)}>
                        今天
                    </a>
                </div>
            );
        }else{
            return "";
        }
    }

    /**
     * 根据日历的显示状态构建显示结构
     * @method _getView
     * @returns {XML} 显示结构
     * @private
     */
    _getView() {
        switch (this.state.stage){
            case 1:{
                //星期结构
                let weeks = this._getWeek();
                let cont = this.renderDays();
                return (
                    <div className="inner">
                        {weeks}
                        {cont}
                    </div>
                );
            }
            case 3: {
                let cont = this.renderYears();
                return (
                    <div className="inner">
                        {cont}
                    </div>
                );
            }
            case 2: {
                let cont = this.renderMonths();
                return (
                    <div className="inner">
                        {cont}
                    </div>
                );
            }
            case 0: {
                let cont = this.renderClock();
                return (
                    <div className="inner">
                        {cont}
                    </div>
                );
            }
        }
    }

    /**
     * 设置开始时间
     * @method setStartDate
     * @param start {String/moment} 要设置的时间值
     */
    setStartDate(start) {
        this.setState({
            startDate: moment(start)
        });
    }

    /**
     * 设置开始时间
     * @method setEndDate
     * @param end {String/moment} 要设置的时间值
     */
    setEndDate(end) {
        this.setState({
            endDate: moment(end)
        });
    }

    /**
     * 设置值
     * @method setValue
     * @param value {String} 当前值
     */
    setValue(value) {
        this.setState({
            value: value,
            current: moment(value)
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

    /**
     * 渲染组件结构
     * @method render
     * @returns {XML}
     */
    render() {
        let className = classnames(
            this.props.className,
            'cm-datetime',
            this.state.theme,
            {
                disabled: this.props.disabled || this.props.readOnly,
                active: this.state.active && !this.props.readOnly,
                dropup: this.state.dropup
            }
        );

        let text = this.state.value ? this.formatValue(this.state.value) : "";
        text = text ?
            (<span className="date-text">{text}</span>) :
            (<span className="date-text">{this.props.placeholder}&nbsp;</span>);

        let now = moment(this.state.current);

        let header = this._getHeader(now);

        let view = this._getView();

        let footer = this._getFooter();

        return (<div ref="datetime" onClick={this.show.bind(this)} className={className} style={this.props.style||{}}>
            {text}
            <i className="fa fa-calendar" />
            <div className="cm-datetime-wrap" ref="datePicker" style={{display: this.state.visibility ? "block" : "none"}}>
                <div className="date-picker">
                    {header}
                    {view}
                    {footer}
                </div>
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

module.exports = Datetime;