/**
 * @author cqb 2016-06-23.
 * @module Panel
 */

const React = require("react");
const ReactDOM = require('react-dom');
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const Core = require('Core');
const strings = require('utils/strings');
const Dom = require('utils/Dom');
const FontIcon = require('FontIcon');
const substitute = strings.substitute;
const PropTypes = React.PropTypes;
const createFragment = React.addons.createFragment;
const grids = require('utils/grids');
const getGrid = grids.getGrid;
const shallowEqual = require('utils/shallowEqual');

/**
 * Panel 类
 * @class Panel
 * @constructor
 * @extend BaseComponent
 */
class Panel extends BaseComponent {
    constructor(props) {
        super(props);

        this.addState({
            title: props.title || "",
            content: props.content || ""
        });
    }

    renderHeader(){
        let tools = this.props.tools;
        let align = tools ? tools.align || "right" : "";

        let tools_cont = null;
        if(tools) {
            let components = tools.components;

            if(components && components.length){
                let className = classnames("cm-panel-tools", align);

                let components_map = {};
                components.forEach(function(comp, index){
                    components_map["keys_"+index] = comp;
                });
                tools_cont = (
                    <span className={className}>
                        {createFragment(components_map)}
                    </span>
                );
            }
        }

        if(tools_cont) {
            if (align === "right") {
                return createFragment({
                    title: this.state.title,
                    tools: tools_cont
                });
            } else {
                return createFragment({
                    tools: tools_cont,
                    title: this.state.title
                });
            }
        }else{
            return this.state.title;
        }
    }

    renderFooter(){
        let tools = this.props.footers;
        let tools_cont= null;
        if(tools) {
            let components = tools.components;

            if(components && components.length){
                let className = classnames("cm-panel-footer-tools");

                let components_map = {};
                components.forEach(function(comp, index){
                    components_map["keys_"+index] = comp;
                });
                tools_cont = (
                    <div className="cm-panel-footer">
                        <span className={className}>
                            {createFragment(components_map)}
                        </span>
                    </div>
                );
            }
        }

        return tools_cont;
    }

    componentWillReceiveProps(nextProps){
        if(this.props.content !== nextProps.content || this.props.title !== nextProps.title){
            this.setState({
                title: nextProps.title,
                content: nextProps.content
            });
        }
    }

    render(){
        let {className, style, grid} = this.props;

        className = classnames("cm-panel", className, getGrid(grid));

        let headContent = this.renderHeader();
        return (
            <div className={className} style={style}>
                <div className="cm-panel-title">
                    {headContent}
                </div>
                <div className="cm-panel-content">
                    {this.props.children}
                    {this.state.content}
                </div>
                {this.renderFooter()}
            </div>
        );
    }
}

Panel.propTypes = {
    /**
     * 标题
     * @attribute title
     * @type {String}
     */
    title: PropTypes.string,
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
    style: PropTypes.object
};

module.exports = Panel;