define(['module', 'react', '../BaseDemo', 'Panel', "../Tile", "Button", "FontIcon", "IconButton", "Form", 'Input', 'CheckBoxGroup', 'RadioGroup', 'DateTime', 'Select', 'Upload', 'Label', 'FormControl'], function (module, React, BaseDemo, Panel, Tile, Button, FontIcon, IconButton, Form, Input, CheckBoxGroup, RadioGroup, DateTime, Select, Upload, Label, FormControl) {
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

                var groupData = [{ id: "0", text: "iPhone" }, { id: "1", text: "Android" }, { id: "2", text: "WinPhone" }];

                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        Tile,
                        { header: "使用方式" },
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code' },
                            '\n<Panel\n    title={String}                      //标题\n    tools={tools}                       //标题栏按钮\n    footers={footers}>                  //面板底部按钮\n    {String}                            //内容\n</Panel>\n'
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
                            '\n<div style={{background: "#F3F7FA", padding: \'40px\'}}>\n    <Panel title="标题" tools={tools} footers={footers}>内容</Panel>\n</div>\n'
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
                                { title: '标题', footers: footers },
                                React.createElement(
                                    Form,
                                    { action: 'xxxxx', layout: 'stack', method: 'ajax', useDefaultSubmitBtn: false },
                                    React.createElement(FormControl, { type: 'text', name: 'name', label: '姓名', grid: 1, required: true, rules: { noSpecial: true, maxLength: 15, minLength: 6 } }),
                                    React.createElement(FormControl, { type: 'number', name: 'age', label: '年龄', grid: 1, required: true }),
                                    React.createElement(FormControl, { type: 'datetime', name: 'activeTime', label: '时间:', grid: 1, required: true }),
                                    React.createElement(FormControl, { type: 'select', name: 'area', label: '区域:', required: true, data: [{ id: "0", text: "中国" }, { id: "1", text: "美国" }], grid: 1 }),
                                    React.createElement(FormControl, { type: 'radio', name: 'type', label: '选择:', required: true, data: groupData }),
                                    React.createElement(FormControl, { type: 'file', name: 'file', label: '选择:', grid: 1, required: true })
                                )
                            )
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code2' },
                            '\n<Panel title="标题" footers={footers}>\n\n    <Form action="xxxxx" layout="stack" method="ajax" useDefaultSubmitBtn={false}>\n        <FormControl type="text" name="name" label="姓名"  grid={1} required rules={{noSpecial: true, maxLength: 15, minLength: 6}}/>\n        <FormControl type="number" name="age" label="年龄"  grid={1} required/>\n        <FormControl type="datetime" name="activeTime" label="时间:" grid={1} required></FormControl>\n        <FormControl type="select" name="area" label="区域:"  required data={[{id: "0", text: "中国"},{id: "1", text: "美国"}]}  grid={1}></FormControl>\n        <FormControl type="radio" name="type" label="选择:" required data={groupData}></FormControl>\n        <FormControl type="file" name="file" label="选择:" grid={1} required></FormControl>\n    </Form>\n\n</Panel>\n'
                        )
                    )
                );
            }
        }]);

        return PanelPage;
    }(BaseDemo);

    module.exports = PanelPage;
});
