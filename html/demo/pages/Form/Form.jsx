const React = require('react');
const BaseDemo = require('../BaseDemo');
const classnames = require('classnames');
const Input = require('Input');
const CheckBoxGroup = require('CheckBoxGroup');
const RadioGroup = require('RadioGroup');
const DateTime = require('DateTime');
const Select = require('Select');
const Upload = require('Upload');
const Tile = require("../Tile");
const Label = require('Label');
const FormControl = require('FormControl');
const Form = require('Form');

class InputPage extends BaseDemo{
    render() {

        let groupData = [
            {id: "0", text: "iPhone"},
            {id: "1", text: "Android"},
            {id: "2", text: "WinPhone"}
        ];

        return (
            <div className="container">
                <Tile header={"基本使用"}>
                    <Form action="xxxxx" layout="stack" method="get">
                        <FormControl type="text" name="name" label="姓名"  grid={1} required rules={{noSpecial: true, maxLength: 15, minLength: 6}}/>
                        <FormControl type="number" name="age" label="年龄"  grid={1} required/>
                        <FormControl type="datetime" name="activeTime" label="时间:" grid={1} required></FormControl>
                        <FormControl type="select" name="area" label="区域:"  required data={[{id: "0", text: "中国"},{id: "1", text: "美国"}]}  grid={1}></FormControl>
                        <FormControl type="radio" name="type" label="选择:" required data={groupData}></FormControl>
                    </Form>
                </Tile>

                <Tile header={"Ajax提交"}>
                    <Form action="xxxxx" layout="stack" method="ajax">
                        <FormControl type="text" name="name" label="姓名"  grid={1} required rules={{noSpecial: true, maxLength: 15, minLength: 6}}/>
                        <FormControl type="number" name="age" label="年龄"  grid={1} required/>
                        <FormControl type="datetime" name="activeTime" label="时间:" grid={1} required></FormControl>
                        <FormControl type="select" name="area" label="区域:"  required data={[{id: "0", text: "中国"},{id: "1", text: "美国"}]}  grid={1}></FormControl>
                        <FormControl type="radio" name="type" label="选择:" required data={groupData}></FormControl>
                        <FormControl type="file" name="file" label="选择:" grid={1} required></FormControl>
                    </Form>
                </Tile>
            </div>
        );
    }
}

module.exports = InputPage;