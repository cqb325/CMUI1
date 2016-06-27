define(['module', 'react', '../BaseDemo', 'classnames', 'Input', 'CheckBoxGroup', 'RadioGroup', 'DateTime', 'Select', 'Upload', "../Tile", 'Label', 'FormControl', 'Form'], function (module, React, BaseDemo, classnames, Input, CheckBoxGroup, RadioGroup, DateTime, Select, Upload, Tile, Label, FormControl, Form) {
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

                var groupData = [{ id: "0", text: "iPhone" }, { id: "1", text: "Android" }, { id: "2", text: "WinPhone" }];

                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        Tile,
                        { header: "基本使用" },
                        React.createElement(
                            Form,
                            { action: 'xxxxx', layout: 'stack', method: 'get' },
                            React.createElement(FormControl, { type: 'text', name: 'name', label: '姓名', grid: 1, required: true, rules: { noSpecial: true, maxLength: 15, minLength: 6 } }),
                            React.createElement(FormControl, { type: 'number', name: 'age', label: '年龄', grid: 1, required: true }),
                            React.createElement(FormControl, { type: 'datetime', name: 'activeTime', label: '时间:', grid: 1, required: true }),
                            React.createElement(FormControl, { type: 'select', name: 'area', label: '区域:', required: true, data: [{ id: "0", text: "中国" }, { id: "1", text: "美国" }], grid: 1 }),
                            React.createElement(FormControl, { type: 'radio', name: 'type', label: '选择:', required: true, data: groupData })
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "Ajax提交" },
                        React.createElement(
                            Form,
                            { action: 'xxxxx', layout: 'stack', method: 'ajax' },
                            React.createElement(FormControl, { type: 'text', name: 'name', label: '姓名', grid: 1, required: true, rules: { noSpecial: true, maxLength: 15, minLength: 6 } }),
                            React.createElement(FormControl, { type: 'number', name: 'age', label: '年龄', grid: 1, required: true }),
                            React.createElement(FormControl, { type: 'datetime', name: 'activeTime', label: '时间:', grid: 1, required: true }),
                            React.createElement(FormControl, { type: 'select', name: 'area', label: '区域:', required: true, data: [{ id: "0", text: "中国" }, { id: "1", text: "美国" }], grid: 1 }),
                            React.createElement(FormControl, { type: 'radio', name: 'type', label: '选择:', required: true, data: groupData }),
                            React.createElement(FormControl, { type: 'file', name: 'file', label: '选择:', grid: 1, required: true })
                        )
                    )
                );
            }
        }]);

        return InputPage;
    }(BaseDemo);

    module.exports = InputPage;
});
