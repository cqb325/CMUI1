define(['module', 'react', 'react-dom', 'Switch', "./Tile"], function (module, React, ReactDOM, Switch, Tile) {
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
                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(Tile, { header: "使用方式" }),
                    React.createElement(
                        Tile,
                        { header: "基本使用" },
                        React.createElement(Switch, null),
                        ' asd 中文',
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement(Switch, { checked: true }),
                        ' ',
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement(Switch, { disabled: true }),
                        ' ',
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement(Switch, { checkedText: '开', unCheckedText: '关' }),
                        ' ',
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement(Switch, { checkedText: 'on', unCheckedText: 'off' }),
                        ' ',
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement(Switch, { size: 'small' }),
                        ' ',
                        React.createElement('br', null),
                        React.createElement('br', null)
                    )
                );
            }
        }]);

        return PaginationPage;
    }(Component);

    module.exports = PaginationPage;
});
