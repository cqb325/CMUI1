define(['module', 'react', 'react-dom', 'classnames', "./Tile", "DateRange"], function (module, React, ReactDOM, classnames, Tile, DateRange) {
    'use strict';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Component = React.Component;

    var DateTimePage = function (_Component) {
        _inherits(DateTimePage, _Component);

        function DateTimePage() {
            _classCallCheck(this, DateTimePage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(DateTimePage).apply(this, arguments));
        }

        _createClass(DateTimePage, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                for (var i in this.refs) {
                    var ref = this.refs[i];
                    var block = ReactDOM.findDOMNode(ref);
                    SyntaxHighlighter.highlight({}, block);
                }
            }
        }, {
            key: 'render',
            value: function render() {
                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        Tile,
                        { header: "使用方式" },
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code' },
                            '<DateTime \n\
    view="datetime/date/time"   //视图类型datetime、date和time三种  \n\
    startDate="2016-04-05"      //开始时间 \n\
    endDate="2016-04-15"        //结束时间 \n\
    format="YYYY-MM-DD"         //格式化 参考`http://momentjs.cn/docs/#/displaying/format/` \n\
    value="2016-04-15"          //组件默认值 \n\
    readOnly={boolean}          //只读模式 \n\
    disabled={boolean}          //禁用模式 \n\
    style={Object}              //自定义样式 \n\
    className={String}          //自定义class \n\
    maxRange={number}          //最大选取的区域 \n\
></DateTime>'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "日期时间" },
                        React.createElement(DateRange, { value: '2016-06-01~2016-06-01', maxRange: 10 }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '\n<DateRange value="2016-06-01~2016-06-01" maxRange={60}></DateRange>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "快捷选择" },
                        React.createElement(DateRange, { value: '2016-06-01~2016-06-01', shortcuts: ["一周内", "一个月内", "三个月内", "半年内", "一个月后", "半年后"] }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code2' },
                            '\n<DateRange value="2016-06-01~2016-06-01" shortcuts={["一周内","一个月内","三个月内","半年内","一个月后","半年后"]}></DateRange>\n'
                        )
                    )
                );
            }
        }]);

        return DateTimePage;
    }(Component);

    module.exports = DateTimePage;
});
