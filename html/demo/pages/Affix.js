define(['module', 'react', './BaseDemo', 'Affix', 'Button', "./Tile"], function (module, React, BaseDemo, Affix, Button, Tile) {
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

    var Tab1 = React.createClass({
        displayName: 'Tab1',
        render: function render() {
            return React.createElement(
                'span',
                null,
                'Tab1'
            );
        }
    });

    var Tab2 = React.createClass({
        displayName: 'Tab2',
        render: function render() {
            return React.createElement(
                'span',
                null,
                'Tab2'
            );
        }
    });

    var TabPage = function (_BaseDemo) {
        _inherits(TabPage, _BaseDemo);

        function TabPage() {
            _classCallCheck(this, TabPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(TabPage).apply(this, arguments));
        }

        _createClass(TabPage, [{
            key: 'render',
            value: function render() {
                var data = [{
                    id: "1",
                    text: "tab1",
                    component: Tab1
                }, {
                    id: "2",
                    text: "tab2",
                    component: Tab2
                }];
                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        Tile,
                        { header: "使用方式" },
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code' },
                            '\n<Tab\n    data={Array}                    //数据源\n    activeIndex={Integer}           //默认选中的Tab\n    onBeforeSelect={Function}       //选中前回调\n    onSelect={function}             //选中回调\n></Tab>\n\ndata = [{id: "xx", text: "tab1", component: Component}]\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "基本使用方式" },
                        React.createElement(
                            'div',
                            { style: { height: "200px", overflow: "auto", border: "1px solid #ccc" }, id: 'scroll-wrap' },
                            React.createElement(
                                'div',
                                { style: { height: "500px" } },
                                'asdasd',
                                React.createElement('br', null),
                                'asdasd',
                                React.createElement('br', null),
                                'asdasd',
                                React.createElement('br', null),
                                React.createElement(
                                    Affix,
                                    { offsetTop: '10' },
                                    React.createElement(
                                        Button,
                                        null,
                                        'Affix'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '\nlet Tab1 = React.createClass({\n    render(){\n        return(<span>Tab1</span>);\n    }\n});\n\nlet Tab2 = React.createClass({\n    render(){\n        return(<span>Tab2</span>);\n    }\n});\n\nlet data = [{\n    id: "1",\n    text: "tab1",\n    component: Tab1\n},{\n    id: "2",\n    text: "tab2",\n    component: Tab2\n}];\n<Tab data={data} activeIndex="1"></Tab>\n'
                        )
                    )
                );
            }
        }]);

        return TabPage;
    }(BaseDemo);

    module.exports = TabPage;
});
