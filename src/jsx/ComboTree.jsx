/**
 * @author cqb 2016-04-29.
 * @module ComboTree
 */

const React = require("react");
const ReactDOM = require('react-dom');
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const Core = require('Core');
const Ajax = require('core/Ajax');
const clickAway = require("utils/ClickAway");
const Dom = require('utils/Dom');
const PropTypes = React.PropTypes;
const grids = require('utils/grids');
const getGrid = grids.getGrid;
const FormControl = require('FormControl');
const Tree = require('Tree');

/**
 * ComboTree 类
 * @class ComboTree
 * @constructor
 * @extend BaseComponent
 */
class ComboTree extends BaseComponent {
    constructor(props) {
        super(props);

        this.selectedItems = {};

        this.addState({
            value: props.value,
            active: false,
            data: props.data
        });

        this.showOptions = this.showOptions.bind(this);
        this.hideOptions = this.hideOptions.bind(this);
    }

    /**
     * 渲染值域区域
     * @method _renderValues
     * @returns {XML}
     * @private
     */
    _renderValues(){
        let item = this.selectedItems[this.state.value];
        let label = item ? item["text"] : (this.props.placeholder ? this.props.placeholder+" " : " "),
            className = classnames("cm-select-value", {
                placeholder: !item && this.props.placeholder
            });

        return(<span className={className}>{label}&nbsp;</span>);
    }

    /**
     * 选中选项
     * @method _selectItem
     * @param item 选中的选项
     * @private
     */
    _selectItem(item){
        let valueField = "id";

        let value = null;
        if(!item){
            if (!this.props.multi) {
                this.hideOptions();
            }
        }else {
            if (this.props.multi) {
                this.selectedItems[item[valueField]] = item;
                value = this.getSelectedValues();
            } else {
                value = item[valueField];
                this.selectedItems = {};
                this.selectedItems[value] = item;
            }
        }

        this.setState({
            value: value
        });

        if(this.props.onChange){
            this.props.onChange(value, item);
        }

        this.emit("change", value, item);
    }

    /**
     * 获取选中的值
     * @method getSelectedValues
     * @returns {string}
     */
    getSelectedValues(){
        if(this.selectedItems){
            let ret = [];
            for(let value in this.selectedItems){
                ret.push(value);
            }
            return ret.join(",");
        }
        return "";
    }

    getValue(){
        return this.getSelectedValues();
    }

    setValue(obj){
        this.selectedItems[obj.id] = obj;
        this.setState({value: obj.id});
    }

    /**
     * ClickAway 点击别的地方的回调
     * @method componentClickAway
     */
    componentClickAway() {
        this.hideOptions();
    }

    /**
     * 显示下拉框
     * @method showOptions
     */
    showOptions(){
        if (this.props.readOnly || this.props.disabled) {
            return;
        }

        let options = ReactDOM.findDOMNode(this.refs.options);
        options.style.display = 'block';

        let container = Dom.closest(options, ".cm-select");
        let offset = Dom.getOuterHeight(options) + 5;
        let dropup = Dom.overView(container, offset);

        Dom.withoutTransition(container, () => {
            this.setState({ dropup });
        });

        this.bindClickAway();

        setTimeout(() => {
            this.setState({ active: true });
        }, 0);
    }

    /**
     * 隐藏下拉框
     * @method hideOptions
     */
    hideOptions(){
        this.setState({ active: false });
        let options = ReactDOM.findDOMNode(this.refs.options);

        this.unbindClickAway();

        let time = 500;
        if(this.isLtIE9()){
            time = 0;
        }

        setTimeout(() => {
            if (this.state.active === false) {
                options.style.display = 'none';
            }
        }, time);
    }

    /**
     * 设置值
     * @method setData
     * @param data 新值
     */
    setData(data){
        this.setState({
            data: data,
            value: ""
        });
    }

    getReference(){
        return this.refs.tree;
    }

    componentWillMount(){
        if(this.props.url){
            let scope = this;
            Ajax.get(this.props.url, {}, function(data){
                if(data) {
                    scope.setState({
                        data: data
                    });
                }
            });
        }
    }

    render(){
        let {className, disabled, readOnly, style, grid} = this.props;
        className = classnames("cm-select", getGrid(grid), {
            active: this.state.active,
            disabled: disabled || readOnly,
            dropup: this.state.dropup,
            hasEmptyOption: this.props.hasEmptyOption
        });

        let text = this._renderValues();
        return(
            <div className={className} style={style} onClick={this.showOptions}>
                {text}
                <span className="cm-select-cert"></span>

                <div className="cm-select-options-wrap">
                    <div ref="options" className="cm-select-options">
                        <Tree ref="tree" data={this.state.data} onSelect={this._selectItem.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

ComboTree = clickAway(ComboTree);

ComboTree.propTypes = {
    /**
     * 数据源
     * @attribute data
     * @type {Array/Object}
     */
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
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
    readOnly: PropTypes.bool,
    /**
     * 多选状态
     * @attribute multi
     * @type {Boolean}
     */
    multi: PropTypes.bool,
    /**
     * 自定义样式
     * @attribute style
     * @type {Object}
     */
    style: PropTypes.object,
    /**
     * 请选择文字
     * @attribute choiceText
     * @type {String}
     */
    choiceText: PropTypes.string,
    /**
     * holder文字
     * @attribute placeholder
     * @type {String}
     */
    placeholder: PropTypes.string
};

if(FormControl) {
    FormControl.register(ComboTree, "combotree");
}

module.exports = ComboTree;