define(['module', 'react', '../BaseDemo', 'classnames', 'Tree', "../Tile"], function (module, React, BaseDemo, classnames, Tree, Tile) {
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

    var TreePage = function (_BaseDemo) {
        _inherits(TreePage, _BaseDemo);

        function TreePage() {
            _classCallCheck(this, TreePage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(TreePage).apply(this, arguments));
        }

        _createClass(TreePage, [{
            key: 'render',
            value: function render() {

                var treeData = [{
                    id: 0,
                    text: "中国",
                    open: true,
                    children: [{
                        id: '1',
                        text: "北京",
                        children: [{ id: '11', text: "海淀" }, { id: '12', text: "朝阳" }]
                    }, {
                        id: '2',
                        text: "上海"
                    }]
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
                            '\n<Tree\n    data={Array}                    //数据源\n    enableCheckbox={Boolean}        //是否使用checkbox\n    enableSmartCheckbox={Boolean}   //是否使用级联checkbox\n/>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "enableCheckbox" },
                        React.createElement(Tree, { data: treeData, enableCheckbox: true }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '\nlet treeData = [{\n    id: 0,\n    text: "中国",\n    open: true,\n    children: [\n        {\n            id: \'1\',\n            text: "北京",\n            children: [{id: \'11\', text: "海淀"},{id: \'12\', text: "朝阳"}]\n        },{\n            id: \'2\',\n            text: "上海"\n        }\n    ]\n}];\n\n<Tree data={treeData} enableCheckbox={true}/>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "enableCheckbox" },
                        React.createElement(Tree, { data: treeData, enableCheckbox: true, enableSmartCheckbox: true }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code2' },
                            '\nlet treeData = [{\n    id: 0,\n    text: "中国",\n    open: true,\n    children: [\n        {\n            id: \'1\',\n            text: "北京",\n            children: [{id: \'11\', text: "海淀"},{id: \'12\', text: "朝阳"}]\n        },{\n            id: \'2\',\n            text: "上海"\n        }\n    ]\n}];\n\n<Tree data={treeData} enableCheckbox={true} enableSmartCheckbox={true}/>\n'
                        )
                    )
                );
            }
        }]);

        return TreePage;
    }(BaseDemo);

    module.exports = TreePage;
});
