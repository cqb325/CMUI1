const React = require('react');
const BaseDemo = require('../BaseDemo');
const classnames = require('classnames');
const ComboTree = require('ComboTree');
const Tile = require("../Tile");

class TreePage extends BaseDemo{

    componentDidMount(){
        super.componentDidMount();
        var comboTree = this.refs.comboTree;
        var tree = comboTree.getReference();

        tree.on("open", function(item){
            if(item.open) {
                tree.deleteChildItems(item);
                window.setTimeout(function(){
                    tree.loadDynamicJSON(item, [{id: new Date().getTime(), text: "1111"}]);
                }, 1000);
            }
        });
    }

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
        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <ComboTree data={treeData} ref="comboTree" grid={0.3}/>
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

            </div>
        )
    }
}

module.exports = TreePage;