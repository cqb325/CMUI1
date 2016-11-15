define(['module', 'react', 'react-dom', 'classnames', 'FontIcon', "../Tile"], function (module, React, ReactDOM, classnames, FontIcon, Tile) {
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

    var FontIconPage = function (_Component) {
        _inherits(FontIconPage, _Component);

        function FontIconPage() {
            _classCallCheck(this, FontIconPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(FontIconPage).apply(this, arguments));
        }

        _createClass(FontIconPage, [{
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
                        { header: "基本" },
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                FontIcon,
                                { font: 'custom-icon', icon: 'check' },
                                'check'
                            )
                        ),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                FontIcon,
                                { font: 'custom-icon', icon: 'muying' },
                                'muying'
                            )
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '<FontIcon font="icon" icon="custom-icon-check">check</FontIcon>\n                    <FontIcon font="icon" icon="custom-icon-muying">muying</FontIcon>'
                        )
                    )
                );
            }
        }]);

        return FontIconPage;
    }(Component);

    module.exports = FontIconPage;
});
