/**
 * @author cqb 2016-04-20.
 * @module SideBar
 */

const React = require("react");
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const shallowEqual = require("utils/shallowEqual");
const Component = React.Component;
const PropTypes = React.PropTypes;
const FontIcon = require("FontIcon");
const Store = require("store");
const EnhancedButton = require('internal/EnhancedButton');

const ReactRouter = require('ReactRouter');
const Link = ReactRouter.Link;


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
            icon = item.icon ? (<FontIcon icon={item.icon} className={"menu-icon"}></FontIcon>) : null,
            link = item.link ? item.link : null,
            text = item.text,
            children = item.children;

        let visible = item._visible;
        let subMenu = children ? (<SubMenus visible={visible} onSelect={this.props.onSelect} items={children} isSub={true}></SubMenus>) : "";

        let className = classnames({
            active: item._active
        });

        link = link ? (
            <Link to={link} data-identity={this.props.identity} onClick={this._onSelect.bind(this)}>
                <EnhancedButton initFull={true}>
                {icon}
                {text}
                </EnhancedButton>
            </Link>
        ) : (
            <a href="javascript:void(0)" data-identity={this.props.identity} onClick={this._onSelect.bind(this)}>
                <EnhancedButton initFull={true}>
                {icon}
                {text}
                </EnhancedButton>
            </a>
        );
        return (
            <li className={className}>
                {link}
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
                <ul className={className} style={{display: visible}}>
                    {menus}
                </ul>
            );
        }else {
            return (<ul className={className}>{menus}</ul>);
        }
    }
}

/**
 * SideBar 类
 * @class SideBar
 * @constructor
 * @extend BaseComponent
 */
class SideBar extends BaseComponent {
    constructor(props) {
        super(props);

        this.data = {};
        this._initActive = null;
        this._buildData(this.data, -1, props.data);
        this.addState({
            data: props.data,
            _active: this._initActive
        });
    }

    /**
     * 重新构建数据
     * @method _buildData
     * @param root
     * @param parentId
     * @param data
     * @private
     */
    _buildData(root, parentId, data){
        let prefix = this.props ? this.props.prefix + "_" :  "";
        data.forEach(function(item){
            item._parentId = parentId;
            root[item.id] = item;

            let activeId = Store.get(prefix+"sideBar_active");
            if(activeId && activeId === item.id){
                item._active = true;
                item._visible = true;
                this._initActive = item;
                if(item._parentId != -1){
                    let parent = this.getItem(item._parentId);
                    parent._active = true;
                    parent._visible = true;
                }

                if(this.props.onInitActive){
                    this.props.onInitActive(item);
                }
            }

            if(item.children && item.children.length){
                this._buildData(root, item.id, item.children);
            }
        }, this);
    }

    /**
     * 设置激活状态
     * @method setActive
     * @param item {Object} 要激活的item
     */
    setActive(item){
        if(typeof item === "string"){
            item = this.getItem(id);
        }

        this._onSelect(item);
    }

    clearActive(){
        let prefix = this.props.prefix + "_" || "";
        Store.set(prefix+"sideBar_active", "");
        this.setState({_active: null});
    }

    /**
     * 获取状态
     * @param id
     * @returns {*}
     */
    getItem(id){
        return this.data[id];
    }

    /**
     * 选中节点
     * @method _onSelect
     * @param item
     * @private
     */
    _onSelect(item){
        let prefix = this.props.prefix + "_" || "";
        Store.set(prefix+"sideBar_active", item.id);
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
        let className = classnames("cm-sidebar", this.state.theme, this.props.className);

        return (
            <div>
                <div className="section client">
                    <div className={className} style={this.props.style}>
                        <div className="sidebar-header">
                            <img className="pull-left" src={this.props.logo}/><span>{this.props.header}</span>
                        </div>
                        <SubMenus onSelect={this._onSelect.bind(this)} items={this.state.data} isSub={false}></SubMenus>
                    </div>
                </div>
                <div className="desktop-wrap client">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

SideBar.propTypes = {
    /**
     * 数据
     * @attribute data
     * @type {Array}
     */
    data: PropTypes.array
};

module.exports = SideBar;