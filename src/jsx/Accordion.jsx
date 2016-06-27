/**
 * @author cqb 2016-04-05.
 * @module Accordion
 */

const React = require("react");
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const shallowEqual = require("utils/shallowEqual");
const Component = React.Component;
const PropTypes = React.PropTypes;
const FontIcon = require("FontIcon");
const UUID = require("utils/UUID");
const EnhancedButton = require('internal/EnhancedButton');

/**
 * MenuItem Component
 */
class MenuItem extends Component {

    _onSelect(event){
        let item = this.props.data;
        if(this.props.onSelect){
            this.props.onSelect(item);
        }
    }

    render() {
        let item = this.props.data,
            icon = item.icon ? (<FontIcon icon={item.icon} className={"menu-icon"}></FontIcon>) : "",
            link = item.link ? item.link : "javascript:void(0)",
            text = item.text,
            content = item.content;

        let visible = item._visible;
        let subMenu = content ? (<SubMenus visible={visible} onSelect={this.props.onSelect} content={content} isSub={true}></SubMenus>) : "";

        let className = classnames({
            active: item._active
        });
        return (
            <li className={className}>
                <a href={link} data-identity={this.props.identity} onClick={this._onSelect.bind(this)}>
                    <EnhancedButton initFull={true}>
                        {icon}
                        {text}
                    </EnhancedButton>
                </a>
                {subMenu}
            </li>
        );
    }
}

/**
 * SubMenus Component
 */
class SubMenus extends Component{
    render() {
        let menus = [];
        let subs = this.props.items;

        if(subs) {
            for (let i = 0; i < subs.length; i++) {
                let item = subs[i];
                let identity = item["identity"] || item["text"];
                menus.push(<MenuItem onSelect={this.props.onSelect} key={i} identity={identity} data={item}/>);
            }
        }

        let className = classnames({
            submenu: this.props.isSub
        });

        let visible = this.props.visible ? 'block' : "none";
        if(this.props.isSub){
            return (
                <ul className={className} style={{display: visible}} dangerouslySetInnerHTML={{__html: this.props.content}}>
                </ul>
            );
        }else {
            return (<ul className={className}>{menus}</ul>);
        }
    }
}

/**
 * Accordion 类
 * @class Accordion
 * @constructor
 * @extend BaseComponent
 */
class Accordion extends BaseComponent {
    constructor(props) {
        super(props);

        this.data = {};
        this._buildData(this.data, -1, props.data);
        this.addState({
            data: props.data,
            _active: null
        });
    }

    _buildData(root, parentId, data){
        data.forEach(function(item){
            item._id = UUID.v4();
            item._parentId = parentId;
            root[item._id] = item;

            if(item.children && item.children.length){
                this._buildData(root, item._id, item.children);
            }
        }, this);
    }

    getItem(id){
        return this.data[id];
    }

    _onSelect(item){
        if(this.state._active && shallowEqual(this.state._active, item)){
            if(item._parentId == -1) {
                item._visible = !item._visible;
                this.setState({_active: item});
            }
        }else{
            let last = this.state._active;
            if(last){
                last._active = false;
                last._visible = false;

                if(last._parentId != -1){
                    let parent = this.getItem(last._parentId);
                    if(shallowEqual(parent, item)){
                        item._active = true;
                        item._visible = false;
                        this.setState({_active: item});
                        return;
                    }else{
                        parent._active = false;
                        parent._visible = false;
                    }
                }
            }
            if(item._parentId != -1){
                let parent = this.getItem(item._parentId);
                parent._active = true;
                parent._visible = true;
            }
            item._active = true;
            item._visible = true;
            this.setState({_active: item});
        }

        if(this.props.onSelect){
            this.props.onSelect(item);
        }
    }

    render(){
        let className = classnames("cm-accordion", this.state.theme, this.props.className);

        return (
            <div className={className} style={this.props.style}>
                <SubMenus onSelect={this._onSelect.bind(this)} items={this.state.data} isSub={false}></SubMenus>
            </div>
        );
    }
}

Accordion.propTypes = {
    /**
     * 数据
     * @attribute data
     * @type {Array}
     */
    data: PropTypes.array
};

module.exports = Accordion;