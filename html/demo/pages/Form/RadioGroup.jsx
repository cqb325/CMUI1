const React = require('react');
const BaseDemo = require('../BaseDemo');
const classnames = require('classnames');
const Input = require('Input');
const RadioGroup = require('RadioGroup');
const Tile = require("../Tile");

class InputPage extends BaseDemo{
    render() {

        let checkBoxChange = function(value){
            console.log(value);
        };

        let groupData = [
            {id: "0", text: "iPhone"},
            {id: "1", text: "Android"},
            {id: "2", text: "WinPhone"}
        ];
        let groupData2 = [
            {type: "0", name: "iPhone"},
            {type: "1", name: "Android"},
            {type: "2", name: "WinPhone"}
        ];
        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
`
<RadioGroup
    data={Array}                    //数据源
    url={String}                    //远程数据源
    valueFiled={String}             //获取值的字段 默认"text"
    textFiled={String}              //显示文字的字段 默认"id"
    name={String}                   //组的名称
    readOnly={Boolean}              //只读属性 默认：false
    disabled={Boolean}              //禁用属性 默认：false
    layout={String}                 //布局 inline 或 stack
    onChange={Function}             //选中改变回调
/>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"基本样例"}>
                    <RadioGroup data={groupData} value="0" onChange={checkBoxChange}></RadioGroup>

                    <pre className="brush: xml" ref="code1">
                        {
`
let groupData = [
    {id: "0", text: "iPhone"},
    {id: "1", text: "Android"},
    {id: "2", text: "WinPhone"}
];
let checkBoxChange = function(value){
    console.log(value);
};
<RadioGroup data={groupData} value="0" onChange={checkBoxChange}></RadioGroup>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"堆积布局"}>
                    <RadioGroup data={groupData2} value="0" onChange={checkBoxChange} layout="stack" valueField="type" textField="name"></RadioGroup>
                    <pre className="brush: js" ref="code3">
                        {
`
let checkBoxChange = function(value){
    console.log(value);
};

let groupData2 = [
    {type: "0", name: "iPhone"},
    {type: "1", name: "Android"},
    {type: "2", name: "WinPhone"}
];
<RadioGroup data={groupData2} value="0" onChange={checkBoxChange} layout="stack"  valueField="type" textField="name"></RadioGroup>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"禁用"}>
                    <RadioGroup data={groupData2} value="0" valueField="type" textField="name" disabled={true}></RadioGroup>
                    <pre className="brush: js" ref="code4">
                        {
                            `
let checkBoxChange = function(value){
    console.log(value);
};

let groupData2 = [
    {type: "0", name: "iPhone"},
    {type: "1", name: "Android"},
    {type: "2", name: "WinPhone"}
];
<RadioGroup data={groupData2} value="0" valueField="type" textField="name" disabled={true}></RadioGroup>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"禁用"}>
                    <RadioGroup url="./pages/Form/data.json" value="0" valueField="type" textField="name"></RadioGroup>
                    <pre className="brush: js" ref="code5">
                        {
`
<RadioGroup url="./pages/Form/data.json" value="0" valueField="type" textField="name"></RadioGroup>
`
                        }
                    </pre>
                </Tile>
            </div>
        );
    }
}

module.exports = InputPage;