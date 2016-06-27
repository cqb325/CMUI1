const React = require('react');
const BaseDemo = require('../BaseDemo');
const classnames = require('classnames');
const Input = require('Input');
const CheckBoxGroup = require('CheckBoxGroup');
const RadioGroup = require('RadioGroup');
const DateTime = require('DateTime');
const Select = require('Select');
const Tile = require("../Tile");
const Label = require('Label');
const FormControl = require('FormControl');
const Form = require('Form');

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
        return (
            <div className="container">
                <Tile header={"1"}>
                    <Label grid={0.1} htmlFor="defaultInput">文本框:</Label><Input id="defaultInput"/><br/>
                    <Label grid={0.1}>Number:</Label><Input type="number" grid={1/4}/><br/>
                    <Label grid={0.1}>Integer:</Label><Input type="integer"  grid={1/4}/><br/>
                </Tile>

                <Tile header={"1"}>
                    <FormControl type="number" layout="stack" label="Number:" grid={1/4}></FormControl>
                    <FormControl type="integer" layout="stack" label="Integer:" rules={{max: 100}} grid={1/4}></FormControl>
                    <FormControl type="tel" layout="stack" label="Email:" rules={{email: true}} grid={1/4}></FormControl>
                    <FormControl type="text" layout="stack" label="UserName:" rules={{mixMaxLength: 12, noSpecial: true}} grid={1/4}></FormControl>

                    <FormControl type="password" layout="stack" label="Password:" ref="password" labelGrid={1/10}></FormControl>
                    <FormControl type="password" layout="stack" label="RePassword:" rules={{equalTo: ()=>{return this.refs.password}}} labelGrid={1/10}></FormControl>
                </Tile>

                <Tile header={"1"}>
                    <FormControl type="number" label="Number:" rules={{required: true   }}></FormControl>
                    <FormControl type="integer" label="Integer:" rules={{max: 100}} ></FormControl>
                    <FormControl type="tel" label="Email:" rules={{email: true}} ></FormControl>
                    <FormControl type="text" label="UserName:" rules={{mixMaxLength: 12, noSpecial: true}} ></FormControl>

                    <FormControl type="password" label="Password:" ref="password"></FormControl>
                    <FormControl type="password" label="RePassword:" rules={{equalTo: ()=>{return this.refs.password}}}></FormControl>
                </Tile>

                <Tile header={"1"}>
                    <FormControl type="checkbox" layout="stack" label="请选择:"
                                 rules={{minLength: 2}}
                                 messages={{minLength: " 至少选取两项"}}
                                 data={[{id: "0", text: "iPhone"},{id: "1", text: "Android"},{id: "2", text: "WinPhone"}]}></FormControl>
                    <FormControl type="radio" layout="stack" label="请选择:" data={[{id: "0", text: "iPhone"},{id: "1", text: "Android"},{id: "2", text: "WinPhone"}]}></FormControl>
                </Tile>

                <Tile header={"1"}>
                    <FormControl type="select" data={[{id: "0", text: "中国"},{id: "1", text: "美国"}]}></FormControl>
                </Tile>

                <Tile header={"1"}>
                    <FormControl type="datetime" label="时间:" dateOnly="true"></FormControl>
                </Tile>

                <Tile header={"1"}>
                    <Form action="ssssss" layout="stack" method="get">
                        <FormControl type="datetime" name="activeTime" label="时间:" grid={1} required></FormControl>
                        <FormControl type="select" name="area" label="区域:"  required data={[{id: "0", text: "中国"},{id: "1", text: "美国"}]}  grid={1}></FormControl>
                        <FormControl type="radio" name="type" label="选择:" required data={[{id: "0", text: "iPhone"},{id: "1", text: "Android"},{id: "2", text: "WinPhone"}]}></FormControl>
                    </Form>
                </Tile>
            </div>
        );
    }
}

module.exports = InputPage;