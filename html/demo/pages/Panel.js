define(['module', 'react', './BaseDemo', 'Panel', "./Tile", "Button", "FontIcon", "IconButton"], function (module, React, BaseDemo, Panel, Tile, Button, FontIcon, IconButton) {
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

    var PanelPage = function (_BaseDemo) {
        _inherits(PanelPage, _BaseDemo);

        function PanelPage() {
            _classCallCheck(this, PanelPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(PanelPage).apply(this, arguments));
        }

        _createClass(PanelPage, [{
            key: 'render',
            value: function render() {

                var tools = {
                    align: "right",
                    components: [React.createElement(
                        Button,
                        { flat: true, icon: 'flask' },
                        '操 作'
                    ), React.createElement(
                        Button,
                        { flat: true, icon: 'save', className: 'ml-10' },
                        '保 存'
                    )]
                };

                var footers = {
                    components: [React.createElement(
                        Button,
                        { theme: 'success', raised: true, icon: 'save' },
                        '保 存'
                    ), React.createElement(
                        Button,
                        { theme: 'info', raised: true, icon: 'flask', className: 'ml-10' },
                        '取 消'
                    )]
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
                            '\n<Toast></Toast>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "基本使用方式" },
                        React.createElement(
                            'div',
                            { style: { background: "#F3F7FA", padding: '40px' } },
                            React.createElement(
                                Panel,
                                { title: '标题', tools: tools, footers: footers },
                                '内容'
                            )
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

        return PanelPage;
    }(BaseDemo);

    module.exports = PanelPage;
});
