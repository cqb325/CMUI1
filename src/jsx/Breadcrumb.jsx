/**
 * @author cqb 2017-01-04.
 * @module Breadcrumb
 */

const React = require("react");
const PropTypes = React.PropTypes;
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");

class Breadcrumb extends BaseComponent {
    constructor(props){
        super(props);
    }

    renderItems(){
        return React.Children.map(this.props.children, (child)=>{
            let componentName = "";
            if(child.type){
                if(child.type.name){
                    componentName = child.type.name;
                }else{
                    let matches = child.type.toString().match(/function\s*([^(]*)\(/);
                    if(matches){
                        componentName = matches[1];
                    }
                }
            }
            if(componentName === 'Item'){
                let props = Object.assign({
                    "separator": this.props.separator
                },child.props);
                return React.cloneElement(child, props);
            }else {
                return child;
            }
        });
    }

    render(){
        let className = classnames("cm-breadcrumb", this.props.className);
        return (<div className={className} style={this.props.style}>
            {this.renderItems()}
        </div>);
    }
}

Breadcrumb.propTypes = {
    /**
     * 自定义class
     * @attribute className
     * @type {String}
     */
    className: PropTypes.string,
    /**
     * 自定义style
     * @attribute style
     * @type {Object}
     */
    style: PropTypes.object,
};

class Item extends BaseComponent{
    constructor(props){
        super(props);
    }

    render(){
        let className = classnames("cm-breadcrumb-link", this.props.className);
        let link = this.props.link;
        let linkEle = link ? (<a className={className} href={this.props.link}>
            {this.props.children}
        </a>) : <span className={className}>{this.props.children}</span>;
        return (<span>
            {linkEle}
            <span className="cm-breadcrumb-separator">{this.props.separator || "/"}</span>
        </span>);
    }
}

Item.propTypes = {
    /**
     * 自定义class
     * @attribute className
     * @type {String}
     */
    className: PropTypes.string,
    /**
     * 自定义style
     * @attribute style
     * @type {Object}
     */
    style: PropTypes.object,
    /**
     * 链接地址
     * @attribute link
     * @type {String}
     */
    link: PropTypes.string
};

Breadcrumb.Item = Item;

module.exports = Breadcrumb;