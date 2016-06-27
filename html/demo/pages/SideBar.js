define(['module', 'react', 'react-dom', 'SideBar', "./Tile"], function (module, React, ReactDOM, SideBar, Tile) {
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

    var SideBarPage = function (_Component) {
        _inherits(SideBarPage, _Component);

        function SideBarPage() {
            _classCallCheck(this, SideBarPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(SideBarPage).apply(this, arguments));
        }

        _createClass(SideBarPage, [{
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
                var data = [{ text: "Button", icon: "fa fa-square", link: "" }, { text: "DateTime", icon: "fa fa-calendar", link: "" }, { text: "Grids", icon: "fa fa-th", link: "" }, { text: "FontIcon", icon: "fa fa-flag", children: [{ text: "FontIcon", link: "" }, { text: "AllIcons", link: "" }] }, { text: "Table", icon: "fa fa-table", link: "" }, { text: "Pagination", icon: "fa fa-ellipsis-h", link: "" }, { text: "Accordion", icon: "fa fa-list", link: "" }];
                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        Tile,
                        { header: "使用方式" },
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code' },
                            '\n\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "基本使用" },
                        React.createElement(
                            'div',
                            { className: 'mb-30', style: { position: "relative", height: 500 } },
                            React.createElement(SideBar, { data: data, style: { width: '200px' }, logo: './assets/imgs/logo.png', header: 'SideBar' })
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '\n\n'
                        )
                    )
                );
            }
        }]);

        return SideBarPage;
    }(Component);

    module.exports = SideBarPage;
});
