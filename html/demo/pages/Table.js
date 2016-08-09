define(['module', 'react', 'react-dom', 'classnames', 'Table', "./Tile"], function (module, React, ReactDOM, classnames, Table, Tile) {
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

    var Component = React.Component;

    var TablePage = function (_Component) {
        _inherits(TablePage, _Component);

        function TablePage() {
            _classCallCheck(this, TablePage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(TablePage).apply(this, arguments));
        }

        _createClass(TablePage, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                for (var i in this.refs) {
                    var ref = this.refs[i];
                    var block = ReactDOM.findDOMNode(ref);
                    SyntaxHighlighter.highlight({}, block);
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var sexFormat = function sexFormat(value, column, row) {
                    if (value == 1) {
                        return "男";
                    }
                    if (value == 2) {
                        return "女";
                    }
                };

                var linkFormat = function linkFormat(value, column, row) {
                    //return ('<a href="###">'+value+'</a>');
                    return React.createElement(
                        'a',
                        { href: '###' },
                        value
                    );
                };

                var scoreFormat = function scoreFormat(value, column, row) {
                    if (value <= 100 && value >= 90) {
                        return "A";
                    }
                    if (value < 90 && value >= 80) {
                        return "B";
                    }
                    if (value < 80 && value >= 70) {
                        return "C";
                    }
                    if (value < 70 && value >= 60) {
                        return "D";
                    }
                    if (value < 60) {
                        return "E";
                    }
                };

                var header = [{ name: "name", text: "姓名", format: linkFormat, tip: true }, { name: "sex", text: "性别", format: sexFormat }, { name: "score", text: "分数", format: scoreFormat }, { name: "time", text: "时间", format: "DateFormat" }];
                var data = [];

                var date = new Date();
                for (var i = 0; i < 10; i++) {
                    data.push({
                        name: "name" + i,
                        sex: Math.random() > 0.5 ? 1 : 2,
                        score: parseInt(Math.random() * 100),
                        time: date.setDate(date.getDate() + i)
                    });
                }
                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        Tile,
                        { header: "使用方式" },
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code' },
                            '<Table\n    data={Array}            //表格数据\n    header={Array}          //表头数据\n    bordered={Boolean}      //显示边框 默认false\n    striped={Boolean}       //隔行显示颜色 默认false\n></Table>\n\nheader = [\n    {\n        name: {String},      //表头字段名\n        text: {String},      //表头显示名称\n        tip: {Boolean},      //该列是否显示提示\n        format: {Function}   //该列数据进行格式化\n    }\n]\n\nDefault Formatters:\n\n"DateFormat"        --> YYYY-MM-DD\n"DateTimeFormat"    --> YYYY-MM-DD HH:mm:ss\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "基本使用" },
                        React.createElement(Table, { data: data, header: header, bordered: true, striped: true, hover: true }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '\nlet sexFormat = function(value, column, row){\n    if(value == 1){\n        return "男";\n    }\n    if(value == 2){\n        return "女";\n    }\n};\n\nlet scoreFormat = function(value, column, row){\n    if (value <= 100 && value >= 90){\n        return "A";\n    }\n    if(value < 90 && value >= 80){\n        return "B";\n    }\n    if(value < 80 && value >= 70){\n        return "C";\n    }\n    if(value < 70 && value >= 60){\n        return "D";\n    }\n    if(value < 60){\n        return "E";\n    }\n};\n\nlet header = [\n    {name: "name", text: "姓名"},\n    {name: "sex", text: "性别", format: sexFormat},\n    {name: "score", text: "分数", format: scoreFormat},\n    {name: "time", text: "时间", format: "DateFormat"}\n];\nlet data = [];\n\nlet date = new Date();\nfor(let i = 0; i < 10; i++){\n    data.push({\n        name: "name"+i,\n        sex: Math.random() > 0.5 ? 1 : 2,\n        score: parseInt(Math.random() * 100),\n        time: date.setDate(date.getDate()+i)\n    });\n}\n\n<Table data={data} header={header} bordered={true}></Table>'
                        )
                    )
                );
            }
        }]);

        return TablePage;
    }(Component);

    module.exports = TablePage;
});
