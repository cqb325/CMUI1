const React = require('react');
const BaseDemo = require('../BaseDemo');
const classnames = require('classnames');
const Tree = require('Tree');
const Tile = require("../Tile");
const Button = require('Button');

class TreePage extends BaseDemo{

    render() {

        let treeData = [{
            id: 0,
            text: "中国",
            open: true,
            children: [
                {
                    id: '1',
                    text: "北京",
                    children: [{id: '11', text: "海淀"},{id: '12', text: "朝阳"}]
                },{
                    id: '2',
                    text: "上海"
                }
            ]
        }];

        let selectNode = function(){
            this.refs.tree.selectItem("1");
        };

        let checkNode = function(){
            let tree = this.refs.tree;
            let node = tree.getSelectedItem();
            if(!node){
                alert("选中一个节点");
            }else{
                tree.checkItem(node);
            }

        };

        let getNodeText = function(){
            let tree = this.refs.tree;
            let node = tree.getSelectedItem();
            if(!node){
                alert("选中一个节点");
            }else{
                alert(tree.getItemText(node));
            }

        };

        let setNodeText = function(){
            let tree = this.refs.tree;
            let node = tree.getSelectedItem();
            if(!node){
                alert("选中一个节点");
            }else{
                tree.setItemText(node, tree.getItemText(node)+"new");
            }
        };

        let setNodeColor = function(){
            let tree = this.refs.tree;
            let node = tree.getSelectedItem();
            if(!node){
                alert("选中一个节点");
            }else{
                tree.setItemColor(node, "red");
            }
        };

        let setNodeImage = function(){
            let tree = this.refs.tree;
            let node = tree.getSelectedItem();
            if(!node){
                alert("选中一个节点");
            }else{
                tree.setItemImg(node, "./assets/imgs/group.png");
            }
        };

        let openItem = function(){
            let tree = this.refs.tree;
            tree.openItem("1");
        };

        let openAllItems = function(){
            let tree = this.refs.tree;
            tree.openAllItem();
        };

        let closeItem = function(){
            let tree = this.refs.tree;
            tree.closeItem("1");
        };

        let closeAllItem = function(){
            let tree = this.refs.tree;
            tree.closeAllItem();
        };

        let addItem = function(){
            let tree = this.refs.tree;
            let node = tree.getSelectedItem();
            if(!node){
                alert("选中一个节点");
            }else{
                tree.addItem(node, {
                    id: new Date().getTime(),
                    text: node.text + "'s child"
                });
            }
        };

        let removeItem = function(){
            let tree = this.refs.tree;
            let node = tree.getSelectedItem();
            if(!node){
                alert("选中一个节点");
            }else{
                tree.removeItem(node);
            }
        };

        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
`
<Tree
    data={Array}                    //数据源
    enableCheckbox={Boolean}        //是否使用checkbox
    enableSmartCheckbox={Boolean}   //是否使用级联checkbox
/>
`
                        }
                    </pre>
                </Tile>
                <Tile header={"函数接口"}>
                    <Tree data={treeData} enableCheckbox={true} enableSmartCheckbox={true} ref="tree"/>
                    <div className="mt-30">
                        <Button theme="success" onClick={selectNode.bind(this)}>选中节点</Button>&nbsp;
                        <Button theme="success" onClick={checkNode.bind(this)}>勾选选中节点</Button>&nbsp;
                        <Button theme="success" onClick={getNodeText.bind(this)}>获取节点文字</Button>&nbsp;
                        <Button theme="success" onClick={setNodeText.bind(this)}>修改节点名称</Button>&nbsp;
                        <Button theme="success" onClick={setNodeColor.bind(this)}>修改节点颜色</Button>&nbsp;
                        <Button theme="success" onClick={setNodeImage.bind(this)}>修改节点图标</Button>&nbsp;
                        <Button theme="success" onClick={openItem.bind(this)}>展开节点</Button>&nbsp;
                        <Button theme="success" onClick={openAllItems.bind(this)}>展开所有节点</Button>&nbsp;
                        <Button theme="success" onClick={closeItem.bind(this)}>收起节点</Button>&nbsp;
                        <Button theme="success" onClick={closeAllItem.bind(this)}>收起所有节点</Button>&nbsp;
                        <Button theme="success" onClick={addItem.bind(this)}>添加节点</Button>&nbsp;
                        <Button theme="success" onClick={removeItem.bind(this)}>删除节点</Button>&nbsp;
                    </div>
                    <pre className="brush: js" ref="code1">
                        {
`
let treeData = [{
    id: 0,
    text: "中国",
    open: true,
    children: [
        {
            id: '1',
            text: "北京",
            children: [{id: '11', text: "海淀"},{id: '12', text: "朝阳"}]
        },{
            id: '2',
            text: "上海"
        }
    ]
}];

let selectNode = function(){
    this.refs.tree.selectItem("1");
};

let checkNode = function(){
    let tree = this.refs.tree;
    let node = tree.getSelectedItem();
    if(!node){
        alert("选中一个节点");
    }else{
        tree.checkItem(node);
    }

};

let getNodeText = function(){
    let tree = this.refs.tree;
    let node = tree.getSelectedItem();
    if(!node){
        alert("选中一个节点");
    }else{
        alert(tree.getItemText(node));
    }

};

let setNodeText = function(){
    let tree = this.refs.tree;
    let node = tree.getSelectedItem();
    if(!node){
        alert("选中一个节点");
    }else{
        tree.setItemText(node, tree.getItemText(node)+"new");
    }
};

let setNodeColor = function(){
    let tree = this.refs.tree;
    let node = tree.getSelectedItem();
    if(!node){
        alert("选中一个节点");
    }else{
        tree.setItemColor(node, "red");
    }
};

let setNodeImage = function(){
    let tree = this.refs.tree;
    let node = tree.getSelectedItem();
    if(!node){
        alert("选中一个节点");
    }else{
        tree.setItemImg(node, "./assets/imgs/group.png");
    }
};

let openItem = function(){
    let tree = this.refs.tree;
    tree.openItem("1");
};

let openAllItems = function(){
    let tree = this.refs.tree;
    tree.openAllItem();
};

let closeItem = function(){
    let tree = this.refs.tree;
    tree.closeItem("1");
};

let closeAllItem = function(){
    let tree = this.refs.tree;
    tree.closeAllItem();
};

let addItem = function(){
    let tree = this.refs.tree;
    let node = tree.getSelectedItem();
    if(!node){
        alert("选中一个节点");
    }else{
        tree.addItem(node, {
            id: new Date().getTime(),
            text: node.text + "'s child"
        });
    }
};

let removeItem = function(){
    let tree = this.refs.tree;
    let node = tree.getSelectedItem();
    if(!node){
        alert("选中一个节点");
    }else{
        tree.removeItem(node);
    }
};

<Tree data={treeData} enableCheckbox={true} enableSmartCheckbox={true} ref="tree"/>
<div className="mt-30">
    <Button theme="success" onClick={selectNode.bind(this)}>选中节点</Button>&nbsp;
    <Button theme="success" onClick={checkNode.bind(this)}>勾选选中节点</Button>&nbsp;
    <Button theme="success" onClick={getNodeText.bind(this)}>获取节点文字</Button>&nbsp;
    <Button theme="success" onClick={setNodeText.bind(this)}>修改节点名称</Button>&nbsp;
    <Button theme="success" onClick={setNodeColor.bind(this)}>修改节点颜色</Button>&nbsp;
    <Button theme="success" onClick={setNodeImage.bind(this)}>修改节点图标</Button>&nbsp;
    <Button theme="success" onClick={openItem.bind(this)}>展开节点</Button>&nbsp;
    <Button theme="success" onClick={openAllItems.bind(this)}>展开所有节点</Button>&nbsp;
    <Button theme="success" onClick={closeItem.bind(this)}>收起节点</Button>&nbsp;
    <Button theme="success" onClick={closeAllItem.bind(this)}>收起所有节点</Button>&nbsp;
    <Button theme="success" onClick={addItem.bind(this)}>添加节点</Button>&nbsp;
    <Button theme="success" onClick={removeItem.bind(this)}>删除节点</Button>&nbsp;
</div>
`
                        }
                    </pre>

                </Tile>

            </div>
        )
    }
}

module.exports = TreePage;