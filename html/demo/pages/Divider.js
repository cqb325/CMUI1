define(['module', 'react', './BaseDemo', 'classnames', 'Divider', 'utils/animation', "./Tile"], function (module, React, BaseDemo, classnames, Divider, Animation, Tile) {
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

    var Page = function (_BaseDemo) {
        _inherits(Page, _BaseDemo);

        function Page() {
            _classCallCheck(this, Page);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Page).apply(this, arguments));
        }

        _createClass(Page, [{
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
                            '<Divider\n    theme={String}          //default、dotted、dashed\n    className={String}      //自定义class\n    style={Object}          //样式\n></Divider>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "样式" },
                        React.createElement(Divider, null),
                        React.createElement(
                            Animation,
                            { from: { width: "50px", height: "50px", opacity: "1" }, to: { width: "200px", height: "200px", opacity: "0.2" }, time: '300' },
                            React.createElement('div', { style: { background: "#ff0000", width: "50px", height: "50px" } })
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '<Divider />'
                        ),
                        React.createElement(Divider, { theme: 'dotted' }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code2' },
                            '<Divider theme="dotted"/>'
                        ),
                        React.createElement(Divider, { theme: 'dashed' }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code3' },
                            '<Divider theme="dashed"/>'
                        )
                    )
                );
            }
        }]);

        return Page;
    }(BaseDemo);

    module.exports = Page;
});
