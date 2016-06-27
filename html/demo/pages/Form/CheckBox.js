define(['module', 'react', '../BaseDemo', 'classnames', 'Input', 'CheckBox', 'CheckBoxGroup', "../Tile"], function (module, React, BaseDemo, classnames, Input, CheckBox, CheckBoxGroup, Tile) {
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

    var InputPage = function (_BaseDemo) {
        _inherits(InputPage, _BaseDemo);

        function InputPage() {
            _classCallCheck(this, InputPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(InputPage).apply(this, arguments));
        }

        _createClass(InputPage, [{
            key: 'render',
            value: function render() {

                var checkBoxChange = function checkBoxChange(value) {
                    console.log(value);
                };

                var groupData = [{ id: "0", text: "iPhone" }, { id: "1", text: "Android" }, { id: "2", text: "WinPhone" }];

                var groupData2 = [{ type: "0", name: "iPhone" }, { type: "1", name: "Android" }, { type: "2", name: "WinPhone" }];
                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        Tile,
                        { header: "使用方式" },
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code' },
                            '\n<CheckBox\n    value={String}                  //默认值\n    label={String}                  //显示的文字\n    onChange={Function}             //选中改变回调\n/>\n<CheckBoxGroup\n    data={Array}                    //数据源\n    url={String}                    //远程数据源\n    valueFiled={String}             //获取值的字段 默认"text"\n    textFiled={String}              //显示文字的字段 默认"id"\n    name={String}                   //组的名称\n    readOnly={Boolean}              //只读属性 默认：false\n    disabled={Boolean}              //禁用属性 默认：false\n    layout={String}                 //布局 inline 或 stack\n    onChange={Function}             //选中改变回调\n/>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "基本样例" },
                        React.createElement(CheckBox, { value: '0', label: 'iphone', onChange: checkBoxChange }),
                        React.createElement('br', null),
                        React.createElement(CheckBox, { value: '0', label: 'iphone', readOnly: true }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '\nlet checkBoxChange = function(value){\n    console.log(value);\n};\n<CheckBox value="0" label="iphone" onChange={checkBoxChange}/>\n<CheckBox value="0" label="iphone" readOnly={true}/>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "复选框组" },
                        React.createElement(CheckBoxGroup, { data: groupData, value: '0,1', onChange: checkBoxChange }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code2' },
                            '\nlet checkBoxChange = function(value){\n    console.log(value);\n};\n\nlet groupData = [\n    {id: "0", text: "iPhone"},\n    {id: "1", text: "Android"},\n    {id: "2", text: "WinPhone"}\n];\n<CheckBoxGroup data={groupData} value="0,1" onChange={checkBoxChange}></CheckBoxGroup>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "堆积布局" },
                        React.createElement(CheckBoxGroup, { data: groupData2, value: '0,1', onChange: checkBoxChange, layout: 'stack', valueField: 'type', textField: 'name' }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code3' },
                            '\nlet checkBoxChange = function(value){\n    console.log(value);\n};\n\nlet groupData2 = [\n    {type: "0", name: "iPhone"},\n    {type: "1", name: "Android"},\n    {type: "2", name: "WinPhone"}\n];\n<CheckBoxGroup data={groupData2} value="0,1" onChange={checkBoxChange} layout="stack" valueField="type" textField="name"></CheckBoxGroup>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "禁用" },
                        React.createElement(CheckBoxGroup, { data: groupData2, value: '0,1', valueField: 'type', textField: 'name', disabled: true }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code4' },
                            '\nlet groupData2 = [\n    {type: "0", name: "iPhone"},\n    {type: "1", name: "Android"},\n    {type: "2", name: "WinPhone"}\n];\n<CheckBoxGroup data={groupData2} value="0" valueField="type" textField="name" disabled={true}></CheckBoxGroup>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "远程数据" },
                        React.createElement(CheckBoxGroup, { url: 'pages/Form/data.json', value: '0,1', valueField: 'type', textField: 'name' }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code5' },
                            '\n<CheckBoxGroup url="pages/Form/data.json" value="0,1" valueField="type" textField="name"></CheckBoxGroup>\n'
                        )
                    )
                );
            }
        }]);

        return InputPage;
    }(BaseDemo);

    module.exports = InputPage;
});
