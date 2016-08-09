/**
 * @author cqb 2016-04-20.
 * @module Table
 */
const React = require("react");
const Core = require("Core");
const PropTypes = React.PropTypes;
const classnames = require("classnames");
const BaseComponent = require("core/BaseComponent");
const moment = require("moment");
const Dom = require("utils/Dom");

/**
 * Table 类
 * @class Table
 * @extend BaseComponent
 */
class Table extends BaseComponent {
    constructor(props) {
        super(props);

        this.addState({
            data: props.data || [],
            header: props.header
        });
    }

    /**
     * 设置数据
     * @method setData
     * @param data {Array} 表体数据
     */
    setData(data){
        this.setState({data: data});
    }

    /**
     * 重置表格数据
     * @method resetData
     * @param data {Object} {header: [], data: []}
     */
    resetData(data){
        this.setState({header: data.header, data: data.data});
    }

    /**
     * 渲染表头
     * header = [{name: '',text: ''},{}];
     * @method _renderHeader
     * @private
     */
    _renderHeader(){
        let header = this.state.header,
            cols;
        if(header) {
            cols = header.map(function (col, colIndex) {
                if(col.hide) {
                    return null;
                }else{
                    return (<th key={"header_"+colIndex} className={col.className} width={col.width}
                                name={col.name}>{col.text}</th>);
                }
            });
        }
        return (
            <thead>
                <tr>
                    {cols}
                </tr>
            </thead>
        );
    }

    /**
     * 渲染表体数据
     * @method _renderBody
     * @private
     */
    _renderBody(){
        let data = this.state.data,
            header = this.state.header,
            rows;

        if(data && data.length && header){
            rows = data.map(function(row, rowIndex){
                let cells =  header.map(function(col, colIndex){
                    if(col.hide){
                        return null;
                    }else {
                        let value = row[col.name];
                        value = this._formatData(value, col, row);
                        let tip = "";
                        if (React.isValidElement(value)) {
                            if(col.tip){
                                tip = value.props.children;
                            }
                            return (
                                <td key={"cell_"+rowIndex+"_"+colIndex} title={tip}>
                                    {value}
                                </td>
                            );
                        }

                        if(value instanceof Array){
                            value = value.join("");
                            col.tip = false;
                        }

                        if(col.tip){
                            tip = value+"";
                            if('<' == tip.charAt(0)){
                                tip = Dom.dom(tip).text();
                            }
                        }
                        return (
                            <td key={"cell_"+rowIndex+"_"+colIndex} title={tip}
                                dangerouslySetInnerHTML={{__html: value}}></td>
                        );
                    }
                }, this);

                return (
                    <tr key={"row_"+rowIndex}>{cells}</tr>
                );
            }, this);
        }

        return (
            <tbody>
                {rows}
            </tbody>
        );
    }

    /**
     * 格式化数据
     * @param value
     * @param col
     * @param row
     * @returns {*}
     * @private
     */
    _formatData(value, col, row){
        if(col.format){
            let formatFun;
            if(Core.isFunction(col.format)){
                formatFun = col.format;
            }else if(Core.isString(col.format)){
                formatFun = Table.Formats[col.format];
            }
            if(formatFun) {
                value = formatFun(value, col, row);
            }
        }

        return value;
    }

    render(){
        let className = classnames("cm-table","table",this.props.className,{
            "table-bordered": this.props.bordered,
            "table-striped": this.props.striped,
            "table-hover": this.props.hover
        });
        let header = this._renderHeader();
        let body = this._renderBody();
        return (
            <div className="table-responsive">
                <table className={className} style={this.props.style}>
                    {header}
                    {body}
                </table>
            </div>
        );
    }
}

Table.propTypes = {
    /**
     * 表中数据
     * @attribute data
     * @type {Array}
     */
    data: PropTypes.array,
    /**
     * 表头定义
     * @attribute header
     * @type {Array}
     */
    header: PropTypes.array,
    /**
     * 宽度
     * @attribute width
     * @type {String}
     * @default auto/100%
     */
    width: PropTypes.string,
    /**
     * 高度
     * @attribute height
     * @type {String}
     * @default auto
     */
    height: PropTypes.string,
    /**
     * 是否显示边框
     * @attribute bordered
     * @type {Boolean}
     * @default false
     */
    bordered: PropTypes.bool,
    /**
     * 是否交替显示背景
     * @attribute striped
     * @type {Boolean}
     * @default false
     */
    striped: PropTypes.bool,
    /**
     * 鼠标滑过是否显示背景色
     * @attribute hover
     * @type {Boolean}
     * @default false
     */
    hover: PropTypes.bool
};


Table.Formats = {
    /**
     * 日期格式化
     * @param value
     * @param column
     * @param row
     * @returns {*}
     * @constructor
     */
    DateFormat: function(value, column, row){
        return moment(value).format("YYYY-MM-DD");
    },

    /**
     * 日期时间格式化
     * @param value
     * @param column
     * @param row
     * @returns {*}
     * @constructor
     */
    DateTimeFormat: function(value, column, row){
        return moment(value).format("YYYY-MM-DD HH:mm:ss");
    }
};

module.exports = Table;