const React = require('react');
const BaseDemo = require('../BaseDemo');
const Panel = require('Panel');
const Tile = require("../Tile");
const Button = require("Button");
const FontIcon = require("FontIcon");
const IconButton = require("IconButton");
const Form = require("Form");
const Input = require('Input');
const CheckBoxGroup = require('CheckBoxGroup');
const RadioGroup = require('RadioGroup');
const DateTime = require('DateTime');
const Select = require('Select');
const Upload = require('Upload');
const Label = require('Label');
const FormControl = require('FormControl');


class PanelPage extends BaseDemo{

    render() {

        let tools = {
            align: "right",
            components: [
                <Button flat={true} icon="flask">操 作</Button>,
                <Button flat={true} icon="save" className="ml-10" >保 存</Button>
            ]
        };

        let footers = {
            components: [
                <Button theme="success" raised={true} icon="save" >保 存</Button>,
                <Button theme="info" raised={true} icon="flask" className="ml-10">取 消</Button>
            ]
        };

        let groupData = [
            {id: "0", text: "iPhone"},
            {id: "1", text: "Android"},
            {id: "2", text: "WinPhone"}
        ];

        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
                            `
<Panel
    title={String}                      //标题
    tools={tools}                       //标题栏按钮
    footers={footers}>                  //面板底部按钮
    {String}                            //内容
</Panel>
`
                        }
                    </pre>
                </Tile>
                <Tile header={"基本使用方式"}>
                    <div style={{background: "#F3F7FA", padding: '40px'}}>
                        <Panel title="标题" tools={tools} footers={footers}>内容</Panel>
                    </div>

                    <pre className="brush: js" ref="code1">
                        {
                            `
<div style={{background: "#F3F7FA", padding: '40px'}}>
    <Panel title="标题" tools={tools} footers={footers}>内容</Panel>
</div>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"基本使用方式"}>
                    <div style={{background: "#F3F7FA", padding: '40px'}}>
                        <Panel title="标题" footers={footers}>

                            <Form action="xxxxx" layout="stack" method="ajax" useDefaultSubmitBtn={false}>
                                <FormControl type="text" name="name" label="姓名"  grid={1} required rules={{noSpecial: true, maxLength: 15, minLength: 6}}/>
                                <FormControl type="number" name="age" label="年龄"  grid={1} required/>
                                <FormControl type="datetime" name="activeTime" label="时间:" grid={1} required></FormControl>
                                <FormControl type="select" name="area" label="区域:"  required data={[{id: "0", text: "中国"},{id: "1", text: "美国"}]}  grid={1}></FormControl>
                                <FormControl type="radio" name="type" label="选择:" required data={groupData}></FormControl>
                                <FormControl type="file" name="file" label="选择:" grid={1} required></FormControl>
                            </Form>

                        </Panel>
                    </div>

                    <pre className="brush: js" ref="code2">
                        {
                            `
<Panel title="标题" footers={footers}>

    <Form action="xxxxx" layout="stack" method="ajax" useDefaultSubmitBtn={false}>
        <FormControl type="text" name="name" label="姓名"  grid={1} required rules={{noSpecial: true, maxLength: 15, minLength: 6}}/>
        <FormControl type="number" name="age" label="年龄"  grid={1} required/>
        <FormControl type="datetime" name="activeTime" label="时间:" grid={1} required></FormControl>
        <FormControl type="select" name="area" label="区域:"  required data={[{id: "0", text: "中国"},{id: "1", text: "美国"}]}  grid={1}></FormControl>
        <FormControl type="radio" name="type" label="选择:" required data={groupData}></FormControl>
        <FormControl type="file" name="file" label="选择:" grid={1} required></FormControl>
    </Form>

</Panel>
`
                        }
                    </pre>
                </Tile>
            </div>
        )
    }
}

module.exports = PanelPage;