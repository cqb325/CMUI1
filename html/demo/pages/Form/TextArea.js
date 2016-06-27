define(['module', 'react', '../BaseDemo', 'TextArea', "../Tile", 'Label'], function (module, React, BaseDemo, TextArea, Tile, Label) {
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

    var AreaPage = function (_BaseDemo) {
        _inherits(AreaPage, _BaseDemo);

        function AreaPage() {
            _classCallCheck(this, AreaPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(AreaPage).apply(this, arguments));
        }

        _createClass(AreaPage, [{
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
                            '\n<TextArea\n    name={String}               //字段的名称\n    className={String}          //自定义class\n    style={Object}              //自定义样式\n    readOnly={Boolean}          //只读模式\n    autoHeight={Boolean}        //自适应高度 默认false\n    height={String}             //高度\n></FormControl>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "基本使用" },
                        React.createElement(
                            Label,
                            { grid: 0.1, htmlFor: 'defaultInput', style: { "verticalAlign": "top" } },
                            '文本框:'
                        ),
                        React.createElement(TextArea, { id: 'defaultInput', grid: 1, height: '100px' }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '\n<Label grid={0.1} htmlFor="defaultInput" style={{"verticalAlign": "top"}}>文本框:</Label>\n<TextArea id="defaultInput" grid={1} height="100px"></TextArea>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "自适应" },
                        React.createElement(
                            Label,
                            { grid: 0.1, htmlFor: 'defaultInput', style: { "verticalAlign": "top" } },
                            '文本框:'
                        ),
                        React.createElement(TextArea, { id: 'defaultInput', autoHeight: 'true', grid: 1, height: '100px' }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code2' },
                            '\n<Label grid={0.1} htmlFor="defaultInput" style={{"verticalAlign": "top"}}>文本框:</Label>\n<TextArea id="defaultInput" autoHeight="true" grid={1} height="100px"></TextArea>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "只读" },
                        React.createElement(
                            Label,
                            { grid: 0.1, htmlFor: 'defaultInput', style: { "verticalAlign": "top" } },
                            '文本框:'
                        ),
                        React.createElement(
                            TextArea,
                            { id: 'defaultInput', readOnly: 'true', grid: 1, height: '100px' },
                            '只读'
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code3' },
                            '\n<Label grid={0.1} htmlFor="defaultInput" style={{"verticalAlign": "top"}}>文本框:</Label>\n<TextArea id="defaultInput" readOnly="true" grid={1} height="100px">只读</TextArea>\n'
                        )
                    )
                );
            }
        }]);

        return AreaPage;
    }(BaseDemo);

    module.exports = AreaPage;
});
