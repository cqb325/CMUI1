define(['module', 'react', './BaseDemo', 'Toast', "./Tile", "Button"], function (module, React, BaseDemo, Toast, Tile, Button) {
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

    var ToastPage = function (_BaseDemo) {
        _inherits(ToastPage, _BaseDemo);

        function ToastPage() {
            _classCallCheck(this, ToastPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(ToastPage).apply(this, arguments));
        }

        _createClass(ToastPage, [{
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
                            '\n<Toast></Toast>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "基本使用方式" },
                        React.createElement(Toast, null),
                        React.createElement(
                            Button,
                            { onClick: function onClick() {
                                    window.Toast.show();
                                    window.setTimeout(function () {
                                        window.Toast.hide();
                                    }, 1000);
                                } },
                            '显 示'
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '\n<Toast></Toast>\n\n<Button onClick={()=>{\n    window.Toast.show();\n    window.setTimeout(()=>{\n        window.Toast.hide();\n    }, 1000);\n}}>显 示</Button>\n'
                        )
                    )
                );
            }
        }]);

        return ToastPage;
    }(BaseDemo);

    module.exports = ToastPage;
});
