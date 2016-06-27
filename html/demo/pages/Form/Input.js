define(['module', 'react', '../BaseDemo', 'classnames', 'Input', 'CheckBoxGroup', 'RadioGroup', 'DateTime', 'Select', "../Tile", 'Label', 'FormControl', 'Form'], function (module, React, BaseDemo, classnames, Input, CheckBoxGroup, RadioGroup, DateTime, Select, Tile, Label, FormControl, Form) {
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
                var _this2 = this;

                var checkBoxChange = function checkBoxChange(value) {
                    console.log(value);
                };

                var groupData = [{ id: "0", text: "iPhone" }, { id: "1", text: "Android" }, { id: "2", text: "WinPhone" }];
                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        Tile,
                        { header: "1" },
                        React.createElement(
                            Label,
                            { grid: 0.1, htmlFor: 'defaultInput' },
                            '文本框:'
                        ),
                        React.createElement(Input, { id: 'defaultInput' }),
                        React.createElement('br', null),
                        React.createElement(
                            Label,
                            { grid: 0.1 },
                            'Number:'
                        ),
                        React.createElement(Input, { type: 'number', grid: 1 / 4 }),
                        React.createElement('br', null),
                        React.createElement(
                            Label,
                            { grid: 0.1 },
                            'Integer:'
                        ),
                        React.createElement(Input, { type: 'integer', grid: 1 / 4 }),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        Tile,
                        { header: "1" },
                        React.createElement(FormControl, { type: 'number', layout: 'stack', label: 'Number:', grid: 1 / 4 }),
                        React.createElement(FormControl, { type: 'integer', layout: 'stack', label: 'Integer:', rules: { max: 100 }, grid: 1 / 4 }),
                        React.createElement(FormControl, { type: 'tel', layout: 'stack', label: 'Email:', rules: { email: true }, grid: 1 / 4 }),
                        React.createElement(FormControl, { type: 'text', layout: 'stack', label: 'UserName:', rules: { mixMaxLength: 12, noSpecial: true }, grid: 1 / 4 }),
                        React.createElement(FormControl, { type: 'password', layout: 'stack', label: 'Password:', ref: 'password', labelGrid: 1 / 10 }),
                        React.createElement(FormControl, { type: 'password', layout: 'stack', label: 'RePassword:', rules: { equalTo: function equalTo() {
                                    return _this2.refs.password;
                                } }, labelGrid: 1 / 10 })
                    ),
                    React.createElement(
                        Tile,
                        { header: "1" },
                        React.createElement(FormControl, { type: 'number', label: 'Number:', rules: { required: true } }),
                        React.createElement(FormControl, { type: 'integer', label: 'Integer:', rules: { max: 100 } }),
                        React.createElement(FormControl, { type: 'tel', label: 'Email:', rules: { email: true } }),
                        React.createElement(FormControl, { type: 'text', label: 'UserName:', rules: { mixMaxLength: 12, noSpecial: true } }),
                        React.createElement(FormControl, { type: 'password', label: 'Password:', ref: 'password' }),
                        React.createElement(FormControl, { type: 'password', label: 'RePassword:', rules: { equalTo: function equalTo() {
                                    return _this2.refs.password;
                                } } })
                    ),
                    React.createElement(
                        Tile,
                        { header: "1" },
                        React.createElement(FormControl, { type: 'checkbox', layout: 'stack', label: '请选择:',
                            rules: { minLength: 2 },
                            messages: { minLength: " 至少选取两项" },
                            data: [{ id: "0", text: "iPhone" }, { id: "1", text: "Android" }, { id: "2", text: "WinPhone" }] }),
                        React.createElement(FormControl, { type: 'radio', layout: 'stack', label: '请选择:', data: [{ id: "0", text: "iPhone" }, { id: "1", text: "Android" }, { id: "2", text: "WinPhone" }] })
                    ),
                    React.createElement(
                        Tile,
                        { header: "1" },
                        React.createElement(FormControl, { type: 'select', data: [{ id: "0", text: "中国" }, { id: "1", text: "美国" }] })
                    ),
                    React.createElement(
                        Tile,
                        { header: "1" },
                        React.createElement(FormControl, { type: 'datetime', label: '时间:', dateOnly: 'true' })
                    ),
                    React.createElement(
                        Tile,
                        { header: "1" },
                        React.createElement(
                            Form,
                            { action: 'ssssss', layout: 'stack', method: 'get' },
                            React.createElement(FormControl, { type: 'datetime', name: 'activeTime', label: '时间:', grid: 1, required: true }),
                            React.createElement(FormControl, { type: 'select', name: 'area', label: '区域:', required: true, data: [{ id: "0", text: "中国" }, { id: "1", text: "美国" }], grid: 1 }),
                            React.createElement(FormControl, { type: 'radio', name: 'type', label: '选择:', required: true, data: [{ id: "0", text: "iPhone" }, { id: "1", text: "Android" }, { id: "2", text: "WinPhone" }] })
                        )
                    )
                );
            }
        }]);

        return InputPage;
    }(BaseDemo);

    module.exports = InputPage;
});
