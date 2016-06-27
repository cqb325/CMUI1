const React = require('react');
const BaseDemo = require('../BaseDemo');
const classnames = require('classnames');
const Tree = require('Tree');
const Tile = require("../Tile");

class TreePage extends BaseDemo{

    componentDidMount(){
        super.componentDidMount();
        let scope = this;
        let tree = scope.refs.tree;
        tree.on("open", function(item){
            if(item.open) {
                window.setTimeout(function(){
                    tree.loadDynamicJSON(item, [{id: new Date().getTime(), text: "1111"}]);
                }, 1000);
            }
        });
    }

    render() {
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
                <Tile header={"远程加载数据"}>
                    <Tree url="./pages/Tree/big_data.json" ref="tree"/>
                    <pre className="brush: js" ref="code1">
                        {
`
let scope = this;
setTimeout(function(){
    let tree = scope.refs.tree;
    tree.on("open", function(item){
        if(item.open) {
            window.setTimeout(function(){
                tree.loadDynamicJSON(item, [{id: new Date().getTime(), text: "1111"}]);
            }, 1000);
        }
    });
},10);
<Tree url="./pages/Tree/big_data.json" ref="tree"/>
`
                        }
                    </pre>

                </Tile>

            </div>
        )
    }
}

module.exports = TreePage;