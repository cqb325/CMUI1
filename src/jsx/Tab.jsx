/**
 * @author cqb 2016-05-09.
 * @module Select
 */

const React = require("react");
const ReactDOM = require('react-dom');
const classnames = require("classnames");
const Core = require('Core');
const BaseComponent = require("core/BaseComponent");
const EnhancedButton = require('internal/EnhancedButton');

/**
 * Tab 类
 * @class Tab
 * @constructor
 * @extend BaseComponent
 */
class Tab extends BaseComponent {
    constructor(props) {
        super(props);

        this.addState({
            data: props.data,
            activeIndex: props.activeIndex || 0
        });
    }

    _selectTab(item){
        if(!item.active){

            let data = this.state.data;
            let index = data.indexOf(item);
            item.active = true;
            let last = this.state.activeIndex;

            data[last].active = false;
            this.emit("beforeSelect", item);
            if(this.props.onBeforeSelect){
                this.props.onBeforeSelect(item);
            }
            this.setState({activeIndex: index});
            this.emit("select", item);
            if(this.props.onSelect){
                this.props.onSelect(item);
            }
        }
    }

    /**
     * 根据索引选择tab
     * @param index {Number} 选择的索引
     */
    selectByIndex(index){
        if(index > 0 && index < this.state.data.length){
            this.setState({
                activeIndex: index
            });
        }
    }

    /**
     * 获取tab对象
     * @param index
     * @returns {*}
     */
    getItem(index){
        return this.state.data[index];
    }

    /**
     * 获取激活的tab
     * @method getActiveItem
     * @returns {*}
     */
    getActiveItem(){
        return this.state.data[this.state.activeIndex];
    }

    _getHeader(){
        let data = this.state.data,
            activeIndex = this.state.activeIndex;
        return data.map(function(item, index){
            if(activeIndex == index){
                item.active = true;
            }

            let className = classnames({
                active: item.active
            });
            return (
                <li key={index} className={className} onClick={()=>{this._selectTab(item)}}>
                    <EnhancedButton initFull={true} touchRippleColor={'rgba(0, 0, 0, 0.1)'}>
                        <a href="javascript:void(0)">{item.text}</a>
                    </EnhancedButton>
                </li>
            );
        }, this);
    }

    _getContent(){
        let data = this.state.data,
            activeIndex = this.state.activeIndex;

        return data.map(function(item, index){
            if(activeIndex == index){
                item.active = true;
            }

            let className = classnames("cm-tab-panel",{
                active: item.active
            });

            let component = item.component;
            let tabPanel = React.createElement(component, {ref: item.id, data: item.data});
            return (
                <div key={index} className={className}>
                    {tabPanel}
                </div>
            );
        }, this);
    }

    render(){
        let {className, style} = this.props;
        className = classnames("cm-tab", className);

        let headers = this._getHeader();
        let contents = this._getContent();
        return (
            <div className={className} style={style}>
                <ul className="cm-tab-header">
                    {headers}
                </ul>
                <div className="cm-tab-content">
                    {contents}
                </div>
            </div>
        );
    }
}

module.exports = Tab;