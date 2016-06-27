define(['module', 'react', './BaseDemo', 'Select', "./Tile"], function (module, React, BaseDemo, Select, Tile) {
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
                var _this2 = this;

                var data1 = [{
                    id: "0", text: "iPhone"
                }, {
                    id: "1", text: "Android"
                }];
                var data2 = ["iPhone", "Android"];

                var data3 = {
                    "0": "iPhone",
                    "1": "Android"
                };

                var data4 = [{
                    code: "cn", text: "中国"
                }, {
                    code: "gb", text: "英国"
                }];

                var selectChange = function selectChange(value, item) {
                    console.log(item.text);
                };

                var provinces = ['北京市', '上海市', '天津市', '重庆市', '河北省', '山西省', '辽宁省'];
                var cities = {};
                cities['北京市'] = ['北京市区', '北京市辖区'];
                cities['上海市'] = ['上海市区', '上海市辖区'];
                cities['天津市'] = ['天津市区', '天津市辖区'];
                cities['重庆市'] = ['重庆市区', '重庆市辖区'];
                cities['河北省'] = ['石家庄', '张家口市', '承德市', '秦皇岛市', '唐山市', '廊坊市', '保定市', '沧州市', '衡水市', '邢台市', '邯郸市'];
                cities['山西省'] = ['太原市', '大同市', '朔州市', '阳泉市', '长治市', '晋城市', '忻州地区', '吕梁地区', '晋中市', '临汾地区', '运城地区'];
                cities['辽宁省'] = ['沈阳市', '朝阳市', '阜新市', '铁岭市', '抚顺市', '本溪市', '辽阳市', '鞍山市', '丹东市', '大连市', '营口市', '盘锦市', '锦州市', '葫芦岛市'];

                window.setTimeout(function () {
                    var province = _this2.refs.province;
                    var city = _this2.refs.city;
                    province.on("change", function (value, item) {
                        var cityData = cities[item.id];
                        city.setData(cityData);
                    });
                }, 10);

                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        Tile,
                        { header: "使用方式" },
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code' },
                            '\n<Select\n    data={Array/Object}             //数据源\n    placeholder={String}            //holder文字\n    value={String}                  //默认值\n    className={String}              //自定义class\n></Select>\n\ndata=["选项1","选项2","选项3"]\ndata={value1: "选项1", value2: "选项2"}\ndata=[{id: "value1", text: "选项1"},{id: "value2", text: "选项2"}]\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "基本使用方式" },
                        '选择：',
                        React.createElement(Select, { data: data1, placeholder: '请选择1', onChange: selectChange, value: '1' }),
                        React.createElement('span', { className: 'mr-10' }),
                        React.createElement(Select, { data: data2, placeholder: '请选择2', choiceText: '--自定义请选择--' }),
                        React.createElement('span', { className: 'mr-10' }),
                        React.createElement(Select, { data: data3,
                            placeholder: '请选择3',
                            choiceText: '--自定义请选择--'
                        }),
                        React.createElement('span', { className: 'mr-10' }),
                        React.createElement(Select, { data: data4,
                            valueField: 'code',
                            placeholder: '请选择3',
                            choiceText: '--自定义请选择--',
                            optionsTpl: '<img src=\'./assets/imgs/{code}.png\'> {text}'
                        }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '\nlet data1 = [{\n    id: "0", text: "iPhone"\n},{\n    id: "1", text: "Android"\n}];\nlet data2 = ["iPhone","Android"];\n\nlet data3 = {\n    "0":"iPhone",\n    "1":"Android"\n};\n\nlet data4 = [{\n    code: "cn", text: "中国"\n},{\n    code: "gb", text: "英国"\n}];\n\nlet selectChange = function(item){\n    console.log(item.text);\n};\n<Select data={data1} placeholder="请选择1" onChange={selectChange}></Select>\n<span className="mr-10"></span>\n<Select data={data2} placeholder="请选择2" choiceText="--自定义请选择--"></Select>\n<span className="mr-10"></span>\n<Select data={data3}\n        placeholder="请选择3"\n        choiceText="--自定义请选择--"\n    ></Select>\n<span className="mr-10"></span>\n<Select data={data4}\n        valueField="code"\n        placeholder="请选择3"\n        choiceText="--自定义请选择--"\n        optionsTpl="<img src=\'./assets/imgs/{code}.png\'> {text}"\n    ></Select>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "远程数据源" },
                        React.createElement(Select, { url: './pages/Form/data.json', grid: { width: 0.25 }, placeholder: '请选择1', valueField: 'type', textField: 'name' }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code2' },
                            '\n<Select url="./pages/Form/data.json" placeholder="请选择1" valueField="type" textField="name"></Select>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "禁用" },
                        React.createElement(Select, { url: './pages/Form/data.json', placeholder: '请选择', valueField: 'type', textField: 'name', disabled: true }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code3' },
                            '\n<Select url="./pages/Form/data.json" placeholder="请选择" valueField="type" textField="name" disabled={true}></Select>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "级联" },
                        React.createElement(Select, { data: provinces, placeholder: '省份', ref: 'province', hasEmptyOption: 'true' }),
                        React.createElement('span', { className: 'mr-10' }),
                        React.createElement(Select, { ref: 'city', placeholder: '城市' }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code4' },
                            '\n\n<Select data={} placeholder="省份" hasEmptyOption="true"></Select>\n<span className="mr-10"></span>\n<Select data={} placeholder="城市"></Select>\n'
                        )
                    )
                );
            }
        }]);

        return SelectPage;
    }(BaseDemo);

    module.exports = SelectPage;
});
