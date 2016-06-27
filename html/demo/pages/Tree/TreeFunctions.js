define(['module', 'react', '../BaseDemo', 'classnames', 'Tree', "../Tile", 'Button'], function (module, React, BaseDemo, classnames, Tree, Tile, Button) {
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

                var selectNode = function selectNode() {
                    this.refs.tree.selectItem("1");
                };

                var checkNode = function checkNode() {
                    var tree = this.refs.tree;
                    var node = tree.getSelectedItem();
                    if (!node) {
                        alert("选中一个节点");
                    } else {
                        tree.checkItem(node);
                    }
                };

                var getNodeText = function getNodeText() {
                    var tree = this.refs.tree;
                    var node = tree.getSelectedItem();
                    if (!node) {
                        alert("选中一个节点");
                    } else {
                        alert(tree.getItemText(node));
                    }
                };

                var setNodeText = function setNodeText() {
                    var tree = this.refs.tree;
                    var node = tree.getSelectedItem();
                    if (!node) {
                        alert("选中一个节点");
                    } else {
                        tree.setItemText(node, tree.getItemText(node) + "new");
                    }
                };

                var setNodeColor = function setNodeColor() {
                    var tree = this.refs.tree;
                    var node = tree.getSelectedItem();
                    if (!node) {
                        alert("选中一个节点");
                    } else {
                        tree.setItemColor(node, "red");
                    }
                };

                var setNodeImage = function setNodeImage() {
                    var tree = this.refs.tree;
                    var node = tree.getSelectedItem();
                    if (!node) {
                        alert("选中一个节点");
                    } else {
                        tree.setItemImg(node, "./assets/imgs/group.png");
                    }
                };

                var openItem = function openItem() {
                    var tree = this.refs.tree;
                    tree.openItem("1");
                };

                var openAllItems = function openAllItems() {
                    var tree = this.refs.tree;
                    tree.openAllItem();
                };

                var closeItem = function closeItem() {
                    var tree = this.refs.tree;
                    tree.closeItem("1");
                };

                var closeAllItem = function closeAllItem() {
                    var tree = this.refs.tree;
                    tree.closeAllItem();
                };

                var addItem = function addItem() {
                    var tree = this.refs.tree;
                    var node = tree.getSelectedItem();
                    if (!node) {
                        alert("选中一个节点");
                    } else {
                        tree.addItem(node, {
                            id: new Date().getTime(),
                            text: node.text + "'s child"
                        });
                    }
                };

                var removeItem = function removeItem() {
                    var tree = this.refs.tree;
                    var node = tree.getSelectedItem();
                    if (!node) {
                        alert("选中一个节点");
                    } else {
                        tree.removeItem(node);
                    }
                };

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
                        { header: "函数接口" },
                        React.createElement(Tree, { data: treeData, enableCheckbox: true, enableSmartCheckbox: true, ref: 'tree' }),
                        React.createElement(
                            'div',
                            { className: 'mt-30' },
                            React.createElement(
                                Button,
                                { theme: 'success', onClick: selectNode.bind(this) },
                                '选中节点'
                            ),
                            ' ',
                            React.createElement(
                                Button,
                                { theme: 'success', onClick: checkNode.bind(this) },
                                '勾选选中节点'
                            ),
                            ' ',
                            React.createElement(
                                Button,
                                { theme: 'success', onClick: getNodeText.bind(this) },
                                '获取节点文字'
                            ),
                            ' ',
                            React.createElement(
                                Button,
                                { theme: 'success', onClick: setNodeText.bind(this) },
                                '修改节点名称'
                            ),
                            ' ',
                            React.createElement(
                                Button,
                                { theme: 'success', onClick: setNodeColor.bind(this) },
                                '修改节点颜色'
                            ),
                            ' ',
                            React.createElement(
                                Button,
                                { theme: 'success', onClick: setNodeImage.bind(this) },
                                '修改节点图标'
                            ),
                            ' ',
                            React.createElement(
                                Button,
                                { theme: 'success', onClick: openItem.bind(this) },
                                '展开节点'
                            ),
                            ' ',
                            React.createElement(
                                Button,
                                { theme: 'success', onClick: openAllItems.bind(this) },
                                '展开所有节点'
                            ),
                            ' ',
                            React.createElement(
                                Button,
                                { theme: 'success', onClick: closeItem.bind(this) },
                                '收起节点'
                            ),
                            ' ',
                            React.createElement(
                                Button,
                                { theme: 'success', onClick: closeAllItem.bind(this) },
                                '收起所有节点'
                            ),
                            ' ',
                            React.createElement(
                                Button,
                                { theme: 'success', onClick: addItem.bind(this) },
                                '添加节点'
                            ),
                            ' ',
                            React.createElement(
                                Button,
                                { theme: 'success', onClick: removeItem.bind(this) },
                                '删除节点'
                            ),
                            ' '
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '\nlet treeData = [{\n    id: 0,\n    text: "中国",\n    open: true,\n    children: [\n        {\n            id: \'1\',\n            text: "北京",\n            children: [{id: \'11\', text: "海淀"},{id: \'12\', text: "朝阳"}]\n        },{\n            id: \'2\',\n            text: "上海"\n        }\n    ]\n}];\n\nlet selectNode = function(){\n    this.refs.tree.selectItem("1");\n};\n\nlet checkNode = function(){\n    let tree = this.refs.tree;\n    let node = tree.getSelectedItem();\n    if(!node){\n        alert("选中一个节点");\n    }else{\n        tree.checkItem(node);\n    }\n\n};\n\nlet getNodeText = function(){\n    let tree = this.refs.tree;\n    let node = tree.getSelectedItem();\n    if(!node){\n        alert("选中一个节点");\n    }else{\n        alert(tree.getItemText(node));\n    }\n\n};\n\nlet setNodeText = function(){\n    let tree = this.refs.tree;\n    let node = tree.getSelectedItem();\n    if(!node){\n        alert("选中一个节点");\n    }else{\n        tree.setItemText(node, tree.getItemText(node)+"new");\n    }\n};\n\nlet setNodeColor = function(){\n    let tree = this.refs.tree;\n    let node = tree.getSelectedItem();\n    if(!node){\n        alert("选中一个节点");\n    }else{\n        tree.setItemColor(node, "red");\n    }\n};\n\nlet setNodeImage = function(){\n    let tree = this.refs.tree;\n    let node = tree.getSelectedItem();\n    if(!node){\n        alert("选中一个节点");\n    }else{\n        tree.setItemImg(node, "./assets/imgs/group.png");\n    }\n};\n\nlet openItem = function(){\n    let tree = this.refs.tree;\n    tree.openItem("1");\n};\n\nlet openAllItems = function(){\n    let tree = this.refs.tree;\n    tree.openAllItem();\n};\n\nlet closeItem = function(){\n    let tree = this.refs.tree;\n    tree.closeItem("1");\n};\n\nlet closeAllItem = function(){\n    let tree = this.refs.tree;\n    tree.closeAllItem();\n};\n\nlet addItem = function(){\n    let tree = this.refs.tree;\n    let node = tree.getSelectedItem();\n    if(!node){\n        alert("选中一个节点");\n    }else{\n        tree.addItem(node, {\n            id: new Date().getTime(),\n            text: node.text + "\'s child"\n        });\n    }\n};\n\nlet removeItem = function(){\n    let tree = this.refs.tree;\n    let node = tree.getSelectedItem();\n    if(!node){\n        alert("选中一个节点");\n    }else{\n        tree.removeItem(node);\n    }\n};\n\n<Tree data={treeData} enableCheckbox={true} enableSmartCheckbox={true} ref="tree"/>\n<div className="mt-30">\n    <Button theme="success" onClick={selectNode.bind(this)}>选中节点</Button>&nbsp;\n    <Button theme="success" onClick={checkNode.bind(this)}>勾选选中节点</Button>&nbsp;\n    <Button theme="success" onClick={getNodeText.bind(this)}>获取节点文字</Button>&nbsp;\n    <Button theme="success" onClick={setNodeText.bind(this)}>修改节点名称</Button>&nbsp;\n    <Button theme="success" onClick={setNodeColor.bind(this)}>修改节点颜色</Button>&nbsp;\n    <Button theme="success" onClick={setNodeImage.bind(this)}>修改节点图标</Button>&nbsp;\n    <Button theme="success" onClick={openItem.bind(this)}>展开节点</Button>&nbsp;\n    <Button theme="success" onClick={openAllItems.bind(this)}>展开所有节点</Button>&nbsp;\n    <Button theme="success" onClick={closeItem.bind(this)}>收起节点</Button>&nbsp;\n    <Button theme="success" onClick={closeAllItem.bind(this)}>收起所有节点</Button>&nbsp;\n    <Button theme="success" onClick={addItem.bind(this)}>添加节点</Button>&nbsp;\n    <Button theme="success" onClick={removeItem.bind(this)}>删除节点</Button>&nbsp;\n</div>\n'
                        )
                    )
                );
            }
        }]);

        return TreePage;
    }(BaseDemo);

    module.exports = TreePage;
});
