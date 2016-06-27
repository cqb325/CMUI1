const React = require('react');
const BaseDemo = require('../BaseDemo');
const classnames = require('classnames');
const Input = require('Input');
const CheckBox = require('CheckBox');
const CheckBoxGroup = require('CheckBoxGroup');
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
<CheckBox
    value={String}                  //默认值
    label={String}                  //显示的文字
    onChange={Function}             //选中改变回调
/>
<CheckBoxGroup
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
                    <CheckBox value="0" label="iphone" onChange={checkBoxChange}/><br/>
                    <CheckBox value="0" label="iphone" readOnly={true}/>

                    <pre className="brush: js" ref="code1">
                        {
`
let checkBoxChange = function(value){
    console.log(value);
};
<CheckBox value="0" label="iphone" onChange={checkBoxChange}/>
<CheckBox value="0" label="iphone" readOnly={true}/>
`
                        }
                    </pre>
                </Tile>


                <Tile header={"复选框组"}>
                    <CheckBoxGroup data={groupData} value="0,1" onChange={checkBoxChange}></CheckBoxGroup>

                    <pre className="brush: js" ref="code2">
                        {
                            `
let checkBoxChange = function(value){
    console.log(value);
};

let groupData = [
    {id: "0", text: "iPhone"},
    {id: "1", text: "Android"},
    {id: "2", text: "WinPhone"}
];
<CheckBoxGroup data={groupData} value="0,1" onChange={checkBoxChange}></CheckBoxGroup>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"堆积布局"}>
                    <CheckBoxGroup data={groupData2} value="0,1" onChange={checkBoxChange} layout="stack" valueField="type" textField="name"></CheckBoxGroup>
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
<CheckBoxGroup data={groupData2} value="0,1" onChange={checkBoxChange} layout="stack" valueField="type" textField="name"></CheckBoxGroup>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"禁用"}>
                    <CheckBoxGroup data={groupData2} value="0,1" valueField="type" textField="name" disabled={true}></CheckBoxGroup>
                    <pre className="brush: js" ref="code4">
                        {
`
let groupData2 = [
    {type: "0", name: "iPhone"},
    {type: "1", name: "Android"},
    {type: "2", name: "WinPhone"}
];
<CheckBoxGroup data={groupData2} value="0" valueField="type" textField="name" disabled={true}></CheckBoxGroup>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"远程数据"}>
                    <CheckBoxGroup url="pages/Form/data.json" value="0,1" valueField="type" textField="name"></CheckBoxGroup>
                    <pre className="brush: js" ref="code5">
                        {
                            `
<CheckBoxGroup url="pages/Form/data.json" value="0,1" valueField="type" textField="name"></CheckBoxGroup>
`
                        }
                    </pre>
                </Tile>
            </div>
        );
    }
}

module.exports = InputPage;