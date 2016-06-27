/**
 * @author cqb 2016-04-20.
 * @module Pagination
 */

const React = require("react");
const ReactDOM = require("react-dom");
const Component = React.Component;
const Core = require("Core");
const PropTypes = React.PropTypes;
const classnames = require("classnames");
const FontIcon = require("FontIcon");
const BaseComponent = require("core/BaseComponent");


/**
 * PagePrev Component
 */
class PagePrev extends Component {
    constructor (props) {
        super(props);
        this.state = {
            pageNum: props.current
        };
    }

    render() {
        let className = classnames("prev",{
            disabled: this.state.pageNum == 1
        });
        return (<li onClick={this.props.onClick} className={className}><a href="javascript:void(0)">
            <FontIcon icon="angle-left"/>
        </a></li>);
    }
}

/**
 * PageNext Component
 */
class PageNext extends Component {
    render() {
        let className = classnames("next",{
            disabled: this.props.disabled
        });

        return (<li onClick={this.props.onClick} className={className}><a href="javascript:void(0)">
            <FontIcon icon="angle-right"/>
        </a></li>);
    }
}

/**
 * PageItem Component
 */
class PageItem extends Component {
    render() {
        let className = classnames({
            active: this.props.active
        });
        return (<li onClick={this.props.onClick} className={className}><a href="javascript:void(0)">{this.props.currentIndex}</a></li>);
    }
}

/**
 * 分页组件
 * @class Pagination
 * @extend BaseComponent
 */
class Pagination extends BaseComponent {
    constructor(props) {
        super(props);

        this.addState({
            current: props.current,
            _current: props.current,
            pageSize: props.pageSize,
            total: props.total,
            displayedPages: 5
        });
    }

    /**
     * 更新数据
     * @method update
     * @param data {Object} 分页数据
     */
    update(data) {
        let params = {};
        if(data.pageSize != undefined){
            params.pageSize = data.pageSize;
        }
        if(data.displayedPages != undefined){
            params.displayedPages = data.displayedPages;
        }
        if(data.total != undefined){
            params.total = data.total;
        }

        if(data.current != undefined){
            params.current = data.current;
            params._current = data.current;

            let size = data.pageSize || this.state.pageSize;
            let total = data.total || this.state.total;

            if (params.current > this._calcPage(size, total)) {
                this.setState(params);
                this._changePageSize(size, true);
                return;
            }
        }

        this.setState(params);
    }

    /**
     * 计算页数
     * @method _calcPage
     * @param p
     * @param total
     * @returns {number}
     * @private
     */
    _calcPage(p, total) {
        let pageSize = p;
        if (typeof pageSize === 'undefined') {
            pageSize = this.state.pageSize;
        }
        total = total || this.state.total;
        return Math.floor((total - 1) / pageSize) + 1;
    }

    /**
     * 页数是否合法
     * @method _isValid
     * @param page {Number} 页号
     * @returns {boolean} 是否合法
     * @private
     */
    _isValid(page) {
        return typeof page === 'number' && page >= 1 && page !== this.state.current;
    }

    /**
     * 选择每页显示个数
     * @method _selectPageSize
     * @private
     */
    _selectPageSize(){
        this._changePageSize(parseInt(ReactDOM.findDOMNode(this.refs.pageSize).value));
    }

    /**
     * 改变每页显示个数
     * @method _changePageSize
     * @param size {Number} 每页记录数
     * @param preventCallback {Boolean} 阻止回调
     * @private
     */
    _changePageSize(size, preventCallback) {
        let current = this.state.current;

        if (typeof size === 'number') {
            this.setState({
                pageSize: size
            });
            if (this.state.current > this._calcPage(size)) {
                current = this._calcPage(size);
                this.setState({
                    current: current,
                    _current: current
                });
                ReactDOM.findDOMNode(this.refs.pageNum).value = current;
            }
        }
        if(!preventCallback) {
            if (this.props.onShowSizeChange) {
                this.props.onShowSizeChange(current, size);
                this.emit("showSizeChange", current, size);
            } else {
                this.goToPage();
            }
        }
    }

    /**
     * 页号改变
     * @method _handleChange
     * @param p 当前页号
     * @returns {*}
     * @private
     */
    _handleChange(p) {
        let page = p;
        if (this._isValid(page)) {
            if (page > this._calcPage()) {
                page = this._calcPage();
            }

            if (!('current' in this.props)) {
                this.setState({
                    current: page,
                    _current: page
                });
            }

            if(this.props.onChange) {
                this.update({current: page});
                this.props.onChange(page, this.state.pageSize);
                this.emit("change", page, this.state.pageSize);
            }else{
                this.goToPage(page);
            }

            ReactDOM.findDOMNode(this.refs.pageNum).value = page;

            return page;
        }

        return this.state.current;
    }

    /**
     * 跳转到第几页
     * @method goToPage
     */
    goToPage(){
        var page = parseInt(ReactDOM.findDOMNode(this.refs.pageNum).value);
        if(this._isValid(page) && page <= this._calcPage()) {
            if(this.props.onChange) {
                this.props.onChange(page, this.state.pageSize);
            }
        }
    }

    /**
     * 前一页
     * @method _prev
     * @private
     */
    _prev() {
        if (this._hasPrev()) {
            this._handleChange(this.state.current - 1);
        }
    }

    /**
     * 后一页
     * @method _next
     * @private
     */
    _next() {
        if (this._hasNext()) {
            this._handleChange(this.state.current + 1);
        }
    }

    /**
     * 是否有前一页
     * @method _hasPrev
     * @returns {boolean}
     * @private
     */
    _hasPrev() {
        return this.state.current > 1;
    }

    /**
     * 是否存在后一页
     * @method _hasNext
     * @returns {boolean}
     * @private
     */
    _hasNext() {
        return this.state.current < this._calcPage();
    }

    /**
     * 跳到第一页
     * @method _jumpPrev
     * @private
     */
    _jumpPrev() {
        this._handleChange(Math.max(1, this.state.current - 5));
    }

    /**
     * 跳到后一页
     * @method _jumpNext
     * @private
     */
    _jumpNext() {
        this._handleChange(Math.min(this._calcPage(), this.state.current + 5));
    }

    /**
     * 获取中间显示的页号
     * @method _getInterval
     * @returns {{start: number, end: number}}
     * @private
     */
    _getInterval() {
        let state = this.state;
        let pages = this._calcPage();
        let displayedPages = state.displayedPages;
        let half = displayedPages / 2;
        return {
            start: Math.ceil(state.current > half ? Math.max(Math.min(state.current - half, (pages - displayedPages)), 0) : 0),
            end: Math.ceil(state.current > half ? Math.min(state.current + half, pages) : Math.min(half, pages))
        };
    }

    render(){
        let pages = this._calcPage();
        let pagerList = [];

        let current = this.state.current;
        let interval = this._getInterval();
        if(pages <= 9){
            for(let i = 0; i < pages; i++){
                let active = current === i+1;
                pagerList.push((<PageItem key={i+1} onClick={this._handleChange.bind(this, i+1)} active={active} currentIndex={i+1}/>));
            }
        }else {
            let edges = 2;
            let end = Math.min(edges, interval.start);
            for (let i = 0; i < end; i++) {
                pagerList.push(<PageItem key={i+1} onClick={this._handleChange.bind(this, i+1)}
                                         currentIndex={i+1}/>);
            }
            if (edges < interval.start && (interval.start - edges != 1)) {
                pagerList.push(<li key={"...1"} className="disabled"><span className="ellipse">...</span></li>);
            } else if (interval.start - edges == 1) {
                pagerList.push(<PageItem key={edges+1} onClick={this._handleChange.bind(this, edges+1)}
                                         currentIndex={edges+1} />);
            }

            for (let j = interval.start; j < interval.end; j++) {
                let active = current === j+1;
                pagerList.push(<PageItem key={j+1} onClick={this._handleChange.bind(this, j+1)}
                                         currentIndex={j+1} active={active}/>);
            }

            if (interval.end < pages && edges > 0) {
                if (pages - edges > interval.end && (pages - edges - interval.end != 1)) {
                    pagerList.push(<li key={"...2"} className="disabled"><span className="ellipse">...</span></li>);
                } else if (pages - edges - interval.end == 1) {
                    pagerList.push(<PageItem key={interval.end+1} onClick={this._handleChange.bind(this, interval.end+1)}
                                             currentIndex={interval.end+1}/>);
                }
                let begin = Math.max(pages - edges, interval.end);
                for (let k = begin; k < pages; k++) {
                    pagerList.push(<PageItem key={k+1} onClick={this._handleChange.bind(this, k+1)}
                                             currentIndex={k+1}/>);
                }
            }
        }

        return (
            <div className="data-page pull-right mt-30">
                <ul className="pagination" style={{float: "left"}}>
                    <PagePrev current={current} onClick={this._prev.bind(this, null)}/>
                    {pagerList}
                    <PageNext current={current} onClick={this._next.bind(this, null)} disabled={current==pages}/>
                </ul>
                <div style={{display: "inline-block",float: "left", margin: "25px 0"}}>
                    <span className="ml-10">共{pages}页</span>&nbsp;
                    <span className="page-code">
                        每页<select name="pageSize" className="pageSize" value={this.state.pageSize} ref="pageSize" onChange={this._selectPageSize.bind(this, null)}>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>条
                    </span>&nbsp;
                    <span className="page-code">
                        到第 <input name="pageNum" ref="pageNum" autoComplete="off" value={this.state.current} onChange={this.goToPage.bind(this, null)} type="text" style={{width: "40px"}}/>页
                    </span>
                </div>
            </div>
        );
    }
}

Pagination.propTypes = {
    /**
     * 当前选中的页号
     * @attribute current
     * @type {number}
     */
    current: PropTypes.number,
    /**
     * 记录总数
     * @attribute total
     * @type {number}
     */
    total: PropTypes.number,
    /**
     * 每页记录数
     * @attribute pageSize
     * @type {number}
     */
    pageSize: PropTypes.number
};

module.exports = Pagination;