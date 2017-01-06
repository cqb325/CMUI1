/**
 * @author cqb 2016-04-05.
 * @module Affix
 */

const React = require("react");
const ReactDOM = require("react-dom");
const PropTypes = React.PropTypes;
const classnames = require("classnames");
const Events = require("utils/Events");
const Dom = require("utils/Dom");
const BaseComponent = require("core/BaseComponent");

/**
 * Affix 类
 * @class Affix
 * @constructor
 * @extend BaseComponent
 */
class Affix extends BaseComponent {

    constructor(props){
        super(props);

        this.addState({
            offsetTop: props.offsetTop||0,
            offsetBottom: props.offsetBottom||0,
            target: props.target,
            offset: null
        });
    }

    componentWillUnmount(){
        this._isMounted = false;

        let target = null;
        if(this.state.target){
            target = Dom.query(this.state.target);
        }else{
            target = document.body;
        }
        target = Dom.dom(target);
        Events.off(target[0], "scroll", this._listener);
    }

    componentDidMount(){
        this._isMounted = true;
        let ele = Dom.dom(ReactDOM.findDOMNode(this));
        let target = null;
        if(this.state.target){
            target = Dom.query(this.state.target);
        }else{
            target = document.body;
        }
        target = Dom.dom(target);

        let parentOffset = target.offset();
        let eleOffset = ele.offset();
        var needH = (eleOffset.top - parentOffset.top - this.state.offsetTop);
        var bw = target[0].style.borderLeftWidth;
        var pl = parseFloat(target[0].style.paddingLeft);

        let listener = this._listener = (e)=>{
            if(this._isMounted) {
                if (target[0].scrollTop > needH) {
                    this.setState({
                        offset: {
                            top: target[0].scrollTop + parseFloat(this.state.offsetTop) - needH,
                            left: eleOffset.left - parentOffset.left - bw - pl
                        }
                    });
                } else {
                    this.setState({
                        offset: null
                    });
                }
            }
        };

        Events.on(target[0], "scroll", listener);
    }

    render(){
        var style = {};
        if(this.state.offset){
            style= {"top":　this.state.offset.top+"px", left: this.state.offset.left+"px", position: "relative"};
        }

        let className = classnames("cm-affix", {
            fixed: !!this.state.offset
        });

        return(
            <div ref="affix" style={style} className={className}>
                {this.props.children}
            </div>
        );
    }
}

module.exports = Affix;