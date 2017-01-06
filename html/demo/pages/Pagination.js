define(['module', 'react', 'react-dom', 'Pagination', "./Tile"], function (module, React, ReactDOM, Pagination, Tile) {
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

    var PaginationPage = function (_Component) {
        _inherits(PaginationPage, _Component);

        function PaginationPage() {
            _classCallCheck(this, PaginationPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(PaginationPage).apply(this, arguments));
        }

        _createClass(PaginationPage, [{
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
                var pageChange = function pageChange(page, size) {
                    console.log(page);
                };
                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        Tile,
                        { header: "使用方式" },
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code' },
                            '\n<Pagination\n    current={Number}            //当前的页号\n    pageSize={Number}           //每页的记录数\n    total={Number}              //所有记录数\n    onChange={Function}         //页号改变回调\n></Pagination>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "基本使用" },
                        React.createElement(Pagination, { current: 10, pageSize: 10, total: 1000, onChange: pageChange }),
                        React.createElement(Pagination, { shape: 'circle', theme: 'cyan', current: 10, pageSize: 10, total: 1000, onChange: pageChange }),
                        React.createElement(Pagination, { shape: 'none', displayInfo: false, theme: 'cyan', current: 10, pageSize: 10, total: 1000, onChange: pageChange }),
                        React.createElement(Pagination, { theme: 'primary', current: 10, pageSize: 10, total: 1000, onChange: pageChange }),
                        React.createElement(Pagination, { shape: 'circle', theme: 'primary', current: 10, pageSize: 10, total: 1000, onChange: pageChange }),
                        React.createElement(Pagination, { shape: 'none', displayInfo: false, theme: 'primary', current: 10, pageSize: 10, total: 1000, onChange: pageChange }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '\nlet pageChange = function(page, size){\n    console.log(page);\n};\n<Pagination current={10} pageSize={10} total={1000} onChange={pageChange}></Pagination>'
                        )
                    )
                );
            }
        }]);

        return PaginationPage;
    }(Component);

    module.exports = PaginationPage;
});
