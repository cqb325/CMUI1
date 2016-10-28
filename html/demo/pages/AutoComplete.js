define(['module', 'react', './BaseDemo', 'AutoComplete', "./Tile"], function (module, React, BaseDemo, AutoComplete, Tile) {
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

    var SelectPage = function (_BaseDemo) {
        _inherits(SelectPage, _BaseDemo);

        function SelectPage() {
            _classCallCheck(this, SelectPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectPage).apply(this, arguments));
        }

        _createClass(SelectPage, [{
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
                        { header: "基本使用方式" },
                        '选择：',
                        React.createElement(AutoComplete, { data: [], filterurl: './pages/data2.json' })
                    )
                );
            }
        }]);

        return SelectPage;
    }(BaseDemo);

    module.exports = SelectPage;
});
