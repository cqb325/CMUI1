/**
 * @author cqb 2016-05-09.
 * @module Tooltip
 */

const React = require("react");
const ReactDOM = require('react-dom');
const classnames = require("classnames");
const Core = require('Core');
const Dom = require('utils/Dom');
const Events = require('utils/Events');
const BaseComponent = require("core/BaseComponent");

/**
 * Tooltip 类
 * @class Tooltip
 * @constructor
 * @extend BaseComponent
 */
class Tooltip extends BaseComponent {
    constructor(props) {
        super(props);

        this.addState({
            title: this.props.title,
            content: this.props.content
        });

        //鼠标移走后延迟隐藏
        this.delay = this.props.delay || 0;
        this.offset = {x: 0, y: 0};
        if(this.props.offset){
            Object.assign(this.offset, this.props.offset);
        }
    }

    _renderTitle(){
        if(this.state.title) {
            return <div className="cm-tooltip-tile">{this.state.title}</div>;
        }else{
            return null;
        }
    }

    _renderContent(){
        return <div className="cm-tooltip-content">{this.state.content||this.props.children}</div>;
    }

    bind(target){
        if(!target){
            return false;
        }

        let targetEle = ReactDOM.findDOMNode(target);
        this._targetEle = targetEle;
        this._timer = null;
        let trigger = this.props.trigger || "hover";
        let showEvent,hideEvent;
        this.status = "hide";
        if(trigger === "hover"){
            showEvent = "mouseenter";
            hideEvent = "mouseleave";
        }else if(trigger === "toggle"){
            showEvent = "click";
        }
        Events.on(targetEle, showEvent, (e)=> {
            this.show(e, trigger);
        });
        Events.on(targetEle, hideEvent, (e)=>{
            this.hide(e);
        });
    }

    getTarget(){
        return this._targetEle;
    }

    show(e, trigger){
        if(this.status === "hide") {
            this.calculatePosition(e ? (e.target || e.srcElement) : this._targetEle);
            let tip = Dom.dom(ReactDOM.findDOMNode(this));
            tip.addClass("slide");
            if (this._timer) {
                clearTimeout(this._timer);
            }
            this.status = "show";
        }else{
            if(e && trigger === "toggle" && this.status === "show"){
                this.hide();
            }
        }
    }

    hide(e){
        if(this.status === "show" && this._isMounted) {
            let tip = Dom.dom(ReactDOM.findDOMNode(this));
            this._timer = setTimeout(()=> {
                tip.removeClass("slide");
                tip.hide();
                this.status = "hide";
            }, this.delay);
        }
    }

    calculatePosition(ele){
        let top = ele.offsetTop;
        let left = ele.offsetLeft;

        ele = Dom.dom(ele);
        let width = ele.width();
        let height = ele.height();

        let tip = ReactDOM.findDOMNode(this);

        if(tip.parentNode == ele[0] && Dom.css(ele[0], "position") === "relative"){
            top = 0;
            left = 0;
        }

        Dom.dom(tip).show();
        let tipWidth = Dom.dom(tip).width();
        let tipHeight = Dom.dom(tip).height();

        let align = this.props.align || "top";
        let css = {};
        let arrowLeft = 0, arrowTop = 0;
        if(align === "top"){
            css["top"] = (top - tipHeight - 6 + this.offset.y)+"px";
            css["left"] = (left + (width / 2) - (tipWidth/2) + this.offset.x)+"px";
            arrowLeft = -this.offset.x-6;
        }
        if(align === "bottom"){
            css["top"] = (top + height + 6 + this.offset.y)+"px";
            css["left"] = (left + (width / 2) - (tipWidth/2) + this.offset.x)+"px";
            arrowLeft = -this.offset.x-6;
        }

        if(align === "left"){
            css["top"] = (top + height/2 - tipHeight/2 + this.offset.y)+"px";
            css["left"] = (left - tipWidth - 6 )+"px";
            arrowTop = -this.offset.y-6;
        }

        if(align === "right"){
            css["top"] = (top + height/2 - tipHeight/2 + this.offset.y)+"px";
            css["left"] = (left + width + 6  + this.offset.x)+"px";
            arrowTop = -this.offset.y-6;
        }


        let style = document.createElement("style");
        document.head.appendChild(style);
        let sheet = style.sheet;

        if(sheet.addRule) {
            sheet.addRule('.cm-tooltip.' + this.state.theme + '.' + align + ':before', 'margin-left: ' + arrowLeft + 'px;margin-top:' + arrowTop + 'px'); // 兼容IE浏览器
        }
        if(sheet.insertRule) {
            sheet.insertRule('.cm-tooltip.' + this.state.theme + '.' + align + ':before{margin-left: ' + arrowLeft + 'px; margin-top:' + arrowTop + 'px}', 0); // 支持非IE的现代浏览器
        }

        Dom.dom(tip).css(css);
    }

    componentDidMount(){
        this._isMounted = true;
        if(this.props.bindTarget){
            this.bind(this.props.bindTarget);
        }
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render(){
        let {className, style} = this.props;
        className = classnames("cm-tooltip", className, this.state.theme, this.props.align);

        let title = this._renderTitle();
        let contents = this._renderContent();
        return (
            <div className={className}>
                {title}
                {contents}
            </div>
        );
    }
}

module.exports = Tooltip;