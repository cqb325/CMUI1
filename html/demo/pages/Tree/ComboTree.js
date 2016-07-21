define(['module', 'react', '../BaseDemo', 'classnames', 'ComboTree', "../Tile"], function (module, React, BaseDemo, classnames, ComboTree, Tile) {
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

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

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
            key: 'componentDidMount',
            value: function componentDidMount() {
                _get(Object.getPrototypeOf(TreePage.prototype), 'componentDidMount', this).call(this);
                var comboTree = this.refs.comboTree;
                var tree = comboTree.getReference();

                tree.on("open", function (item) {
                    if (item.open) {
                        tree.deleteChildItems(item);
                        window.setTimeout(function () {
                            tree.loadDynamicJSON(item, [{ id: new Date().getTime(), text: "1111" }]);
                        }, 1000);
                    }
                });
            }
        }, {
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
                        React.createElement(ComboTree, { data: treeData, ref: 'comboTree', grid: 0.3 }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code' },
                            '\n<Tree\n    data={Array}                    //数据源\n    enableCheckbox={Boolean}        //是否使用checkbox\n    enableSmartCheckbox={Boolean}   //是否使用级联checkbox\n/>\n'
                        )
                    )
                );
            }
        }]);

        return TreePage;
    }(BaseDemo);

    module.exports = TreePage;
});
