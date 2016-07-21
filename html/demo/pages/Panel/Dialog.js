define(['module', 'react', '../BaseDemo', 'Dialog', "../Tile", "Button", "FontIcon", "IconButton"], function (module, React, BaseDemo, Dialog, Tile, Button, FontIcon, IconButton) {
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

    var DialogPage = function (_BaseDemo) {
        _inherits(DialogPage, _BaseDemo);

        function DialogPage() {
            _classCallCheck(this, DialogPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(DialogPage).apply(this, arguments));
        }

        _createClass(DialogPage, [{
            key: 'showTip',
            value: function showTip() {
                this.refs.dialog.open();
            }
        }, {
            key: 'closeDialog',
            value: function closeDialog() {
                this.refs.dialog.close();
            }
        }, {
            key: 'render',
            value: function render() {

                var footers = {
                    components: [React.createElement(
                        Button,
                        { theme: 'success', raised: true, icon: 'save' },
                        '保 存'
                    ), React.createElement(
                        Button,
                        { theme: 'info', raised: true, onClick: this.closeDialog.bind(this), icon: 'flask', className: 'ml-10' },
                        '取 消'
                    )]
                };

                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        Dialog,
                        { title: '表单', ref: 'dialog' },
                        '弹框内容'
                    ),
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
                        { header: "基本使用方式" },
                        React.createElement(
                            Button,
                            { onClick: this.showTip.bind(this) },
                            '显示提示框'
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

        return DialogPage;
    }(BaseDemo);

    module.exports = DialogPage;
});
