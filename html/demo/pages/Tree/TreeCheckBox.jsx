const React = require('react');
const BaseDemo = require('../BaseDemo');
const classnames = require('classnames');
const Tree = require('Tree');
const Tile = require("../Tile");

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
                <Tile header={"enableCheckbox"}>
                    <Tree data={treeData} enableCheckbox={true}/>
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

<Tree data={treeData} enableCheckbox={true}/>
`
                        }
                    </pre>

                </Tile>


                <Tile header={"enableCheckbox"}>
                    <Tree data={treeData} enableCheckbox={true} enableSmartCheckbox={true}/>
                    <pre className="brush: js" ref="code2">
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

<Tree data={treeData} enableCheckbox={true} enableSmartCheckbox={true}/>
`
                        }
                    </pre>

                </Tile>

            </div>
        )
    }
}

module.exports = TreePage;