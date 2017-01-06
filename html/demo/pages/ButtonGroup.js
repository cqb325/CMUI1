define(['module', 'react', './BaseDemo', 'classnames', 'Button', 'ButtonGroup', 'IconButton', "./Tile"], function (module, React, BaseDemo, classnames, Button, ButtonGroup, IconButton, Tile) {
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

    var ButtonPage = function (_BaseDemo) {
        _inherits(ButtonPage, _BaseDemo);

        function ButtonPage() {
            _classCallCheck(this, ButtonPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonPage).apply(this, arguments));
        }

        _createClass(ButtonPage, [{
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
                            '\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "样式" },
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                ButtonGroup,
                                null,
                                React.createElement(
                                    Button,
                                    { theme: 'primary' },
                                    'PRIMARY'
                                ),
                                React.createElement(
                                    Button,
                                    { theme: 'primary' },
                                    'PRIMARY'
                                ),
                                React.createElement(
                                    Button,
                                    { theme: 'primary' },
                                    'PRIMARY'
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'mt-10' },
                            React.createElement(
                                ButtonGroup,
                                null,
                                React.createElement(Button, { theme: 'primary', icon: 'cloud' }),
                                React.createElement(Button, { theme: 'primary', icon: 'cloud' })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'mt-10' },
                            React.createElement(
                                ButtonGroup,
                                null,
                                React.createElement(Button, { icon: 'cloud', size: 'small' }),
                                React.createElement(Button, { icon: 'cloud', size: 'small' })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'mt-10' },
                            React.createElement(
                                ButtonGroup,
                                null,
                                React.createElement(
                                    Button,
                                    { theme: 'success' },
                                    'PRIMARY'
                                ),
                                React.createElement(
                                    Button,
                                    { theme: 'success' },
                                    'PRIMARY'
                                ),
                                React.createElement(
                                    Button,
                                    { theme: 'success' },
                                    'PRIMARY'
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'mt-10' },
                            React.createElement(
                                ButtonGroup,
                                null,
                                React.createElement(
                                    Button,
                                    { theme: 'warning' },
                                    'warning'
                                ),
                                React.createElement(
                                    Button,
                                    { theme: 'warning' },
                                    'warning'
                                ),
                                React.createElement(
                                    Button,
                                    { theme: 'warning' },
                                    'warning'
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'mt-10' },
                            React.createElement(
                                ButtonGroup,
                                null,
                                React.createElement(
                                    Button,
                                    { theme: 'danger' },
                                    'danger'
                                ),
                                React.createElement(
                                    Button,
                                    { theme: 'danger' },
                                    'danger'
                                ),
                                React.createElement(
                                    Button,
                                    { theme: 'danger' },
                                    'danger'
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'mt-10' },
                            React.createElement(
                                ButtonGroup,
                                null,
                                React.createElement(
                                    Button,
                                    { theme: 'default' },
                                    'cancel'
                                ),
                                React.createElement(
                                    Button,
                                    { theme: 'primary' },
                                    'ok'
                                )
                            )
                        )
                    )
                );
            }
        }]);

        return ButtonPage;
    }(BaseDemo);

    module.exports = ButtonPage;
});
