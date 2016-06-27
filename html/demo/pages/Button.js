define(['module', 'react', './BaseDemo', 'classnames', 'Button', 'IconButton', "./Tile"], function (module, React, BaseDemo, classnames, Button, IconButton, Tile) {
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
                            '<Button\n    theme={String}          //default、primary、success、info、warning、danger\n    disabled={boolean}      //禁用状态\n    raised={Boolean}        //raised状态\n    icon={String}           //图标\n    iconAlign={String}      //left right\n    style={Object}          //样式\n></Button>\n\n\n<IconButton\n    icon={String}           //图标\n    disabled={boolean}      //禁用状态\n    style={Object}          //样式\n></IconButton>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "样式" },
                        React.createElement(
                            Button,
                            null,
                            '按钮'
                        ),
                        React.createElement('span', { className: 'mr-10' }),
                        React.createElement(
                            Button,
                            { theme: 'primary' },
                            'PRIMARY'
                        ),
                        React.createElement('span', { className: 'mr-10' }),
                        React.createElement(
                            Button,
                            { theme: 'success' },
                            'SUCCESS'
                        ),
                        React.createElement('span', { className: 'mr-10' }),
                        React.createElement(
                            Button,
                            { theme: 'info' },
                            'INFO'
                        ),
                        React.createElement('span', { className: 'mr-10' }),
                        React.createElement(
                            Button,
                            { theme: 'warning' },
                            'WARNING'
                        ),
                        React.createElement('span', { className: 'mr-10' }),
                        React.createElement(
                            Button,
                            { theme: 'danger' },
                            'DANGER'
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '<Button>按钮</Button>'
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code2' },
                            '<Button theme="success">SUCCESS</Button>'
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code3' },
                            '<Button theme="info">INFO</Button>'
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code4' },
                            '<Button theme="warning">WARNING</Button>'
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code5' },
                            '<Button theme="danger">DANGER</Button>'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "RAISED" },
                        React.createElement(
                            Button,
                            { theme: 'warning', raised: 'true' },
                            'RAISED'
                        ),
                        React.createElement('span', { className: 'mr-10' }),
                        React.createElement(
                            Button,
                            { theme: 'success', raised: 'true' },
                            'SUCCESS'
                        ),
                        React.createElement('span', { className: 'mr-10' }),
                        React.createElement(
                            Button,
                            { theme: 'success', raised: 'true', disabled: true },
                            'RAISED'
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code9' },
                            '\n<Button theme="warning" raised="true">RAISED</Button>\n<span className="mr-10"></span>\n<Button theme="success" raised="true">SUCCESS</Button>\n<span className="mr-10"></span>\n<Button theme="success" raised="true" disabled={true}>RAISED</Button>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "禁用" },
                        React.createElement(
                            Button,
                            { disabled: true },
                            '禁用按钮'
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code6' },
                            '<Button disabled={true}>禁用按钮</Button>'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "带图标按钮" },
                        React.createElement(
                            Button,
                            { icon: 'calendar', theme: 'success' },
                            'FONT ICON'
                        ),
                        React.createElement('span', { className: 'mr-10' }),
                        React.createElement(
                            Button,
                            { icon: 'calendar', iconAlign: 'right', theme: 'warning' },
                            'ICON RIGHT'
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code7' },
                            '\n<Button icon="calendar" theme=\'success\'>FONT ICON</Button>\n<Button icon="calendar" iconAlign="right" theme=\'warning\'>ICON RIGHT</Button>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "图标按钮" },
                        React.createElement(IconButton, { icon: 'github' }),
                        React.createElement(IconButton, { icon: 'pinterest', style: { fontSize: '48px' } }),
                        React.createElement(IconButton, { icon: 'github', disabled: true }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code8' },
                            '\n<IconButton icon="github"/>\n<IconButton icon="pinterest" style={{fontSize: \'48px\'}}/>\n<IconButton icon="github" disabled={true}/>\n'
                        )
                    )
                );
            }
        }]);

        return ButtonPage;
    }(BaseDemo);

    module.exports = ButtonPage;
});
