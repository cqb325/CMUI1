define(['module', 'react', '../BaseDemo', 'classnames', 'Input', 'CheckBoxGroup', 'RadioGroup', 'DateTime', 'Select', "../Tile", 'Label', 'FormControl', 'FontIcon', 'Form'], function (module, React, BaseDemo, classnames, Input, CheckBoxGroup, RadioGroup, DateTime, Select, Tile, Label, FormControl, FontIcon, Form) {
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
                        { header: "使用方式" },
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code' },
                            '\n<FormControl\n    type={String}               //类型 是注册在FormControl中的类型\n    name={String}               //字段的名称\n    layout={String}             //布局 stack / inline 默认inline\n    label={String}              //字段提示文字\n    placeholder={String}        //文本框的提示\n    labelGrid={Object}          //文本的大小详见 Grid\n    rules={Object}              //校验规则\n    messages={Object}           //字段对应错误信息的提示语\n    ...props                    //对应类型使用组件的使用参数， 如select可以使用data属性传入数据\n    className={String}          //自定义class\n    style={Object}              //自定义样式\n    isFormItem={Boolean}        //是否为表单元素  默认true 如为false则不会在表单中上传\n    required={Boolean}          //是否必须的校验\n    onValid={Function}          //验证后的回调\n    onChange={Function}         //值变化后的回调\n></FormControl>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "stack" },
                        React.createElement(FormControl, { type: 'number', layout: 'stack', label: 'Number:', grid: 1 / 4 }),
                        React.createElement(FormControl, { type: 'integer', layout: 'stack', label: 'Integer:', rules: { max: 100 }, grid: 1 / 4 }),
                        React.createElement(FormControl, { type: 'tel', layout: 'stack', label: 'Email:', rules: { email: true }, grid: 1 / 4 }),
                        React.createElement(FormControl, { type: 'text', layout: 'stack', label: 'UserName:', rules: { mixMaxLength: 12, noSpecial: true }, grid: 1 / 4 }),
                        React.createElement(FormControl, { type: 'password', layout: 'stack', label: 'Password:', ref: 'password', labelGrid: 1 / 10 }),
                        React.createElement(FormControl, { type: 'password', layout: 'stack', label: 'RePassword:', rules: { equalTo: function equalTo() {
                                    return _this2.refs.password;
                                } }, labelGrid: 1 / 10 }),
                        React.createElement(FormControl, { type: 'textarea', layout: 'stack', label: 'TextArea:', grid: 1, required: true, rules: { maxLength: 20 } })
                    ),
                    React.createElement(
                        Tile,
                        { header: "inline" },
                        React.createElement(FormControl, { type: 'number', label: 'Number:', rules: { required: true } }),
                        React.createElement(FormControl, { type: 'integer', label: 'Integer:', rules: { max: 100 } }),
                        React.createElement(FormControl, { type: 'tel', label: 'Email:', rules: { email: true } }),
                        React.createElement(FormControl, { type: 'text', label: 'UserName:', rules: { mixMaxLength: 12, noSpecial: true } }),
                        React.createElement(FormControl, { type: 'password', label: 'Password:', ref: 'password' }),
                        React.createElement(FormControl, { type: 'password', label: 'RePassword:', rules: { equalTo: function equalTo() {
                                    return _this2.refs.password;
                                } } }),
                        React.createElement(FormControl, { type: 'textarea', label: 'TextArea:' })
                    ),
                    React.createElement(
                        Tile,
                        { header: "radio/checkbox" },
                        React.createElement(FormControl, { type: 'checkbox', layout: 'stack', label: '请选择:',
                            rules: { minLength: 2 },
                            messages: { minLength: " 至少选取两项" },
                            data: [{ id: "0", text: "iPhone" }, { id: "1", text: "Android" }, { id: "2", text: "WinPhone" }] }),
                        React.createElement(FormControl, { type: 'radio', layout: 'stack', label: '请选择:', data: [{ id: "0", text: "iPhone" }, { id: "1", text: "Android" }, { id: "2", text: "WinPhone" }] })
                    ),
                    React.createElement(
                        Tile,
                        { header: "select" },
                        React.createElement(FormControl, { type: 'select', data: [{ id: "0", text: "中国" }, { id: "1", text: "美国" }] })
                    ),
                    React.createElement(
                        Tile,
                        { header: "时间" },
                        React.createElement(FormControl, { type: 'datetime', label: '时间:', dateOnly: 'true' })
                    ),
                    React.createElement(
                        Tile,
                        { header: "自定义" },
                        React.createElement(
                            FormControl,
                            { rules: { "email": true }, className: 'input-group' },
                            React.createElement(
                                Label,
                                { className: 'input-group-addon' },
                                React.createElement(FontIcon, { icon: 'envelope' })
                            ),
                            React.createElement(Input, { type: 'text', placeholder: '输入邮件' })
                        ),
                        React.createElement(
                            FormControl,
                            { rules: { "email": true }, className: 'input-group' },
                            React.createElement(Input, { type: 'text', placeholder: '输入邮件' }),
                            React.createElement(
                                Label,
                                { className: 'input-group-addon' },
                                React.createElement(FontIcon, { icon: 'envelope' })
                            )
                        ),
                        React.createElement(
                            FormControl,
                            { rules: { "price": true }, className: 'input-group' },
                            React.createElement(
                                Label,
                                { className: 'input-group-addon' },
                                React.createElement(FontIcon, { icon: 'cny' })
                            ),
                            React.createElement(Input, { type: 'number', placeholder: '输入价格' }),
                            React.createElement(
                                Label,
                                { className: 'input-group-addon' },
                                '.00'
                            )
                        )
                    )
                );
            }
        }]);

        return InputPage;
    }(BaseDemo);

    module.exports = InputPage;
});
