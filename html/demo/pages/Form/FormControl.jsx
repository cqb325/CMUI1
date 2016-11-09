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
const FontIcon = require('FontIcon');
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
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
`
<FormControl
    type={String}               //类型 是注册在FormControl中的类型
    name={String}               //字段的名称
    layout={String}             //布局 stack / inline 默认inline
    label={String}              //字段提示文字
    placeholder={String}        //文本框的提示
    labelGrid={Object}          //文本的大小详见 Grid
    rules={Object}              //校验规则
    messages={Object}           //字段对应错误信息的提示语
    ...props                    //对应类型使用组件的使用参数， 如select可以使用data属性传入数据
    className={String}          //自定义class
    style={Object}              //自定义样式
    isFormItem={Boolean}        //是否为表单元素  默认true 如为false则不会在表单中上传
    required={Boolean}          //是否必须的校验
    onValid={Function}          //验证后的回调
    onChange={Function}         //值变化后的回调
></FormControl>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"stack"}>
                    <FormControl type="number" layout="stack" label="Number:" grid={1/4}></FormControl>
                    <FormControl type="integer" layout="stack" label="Integer:" rules={{max: 100}} grid={1/4}></FormControl>
                    <FormControl type="tel" layout="stack" label="Email:" rules={{email: true}} grid={1/4}></FormControl>
                    <FormControl type="text" layout="stack" label="UserName:" rules={{mixMaxLength: 12, noSpecial: true,remote: "http://192.168.170.16:8415/mock/cmui/remote.html"}} grid={1/4}></FormControl>

                    <FormControl type="password" layout="stack" label="Password:" ref="password" labelGrid={1/10}></FormControl>
                    <FormControl type="password" layout="stack" label="RePassword:" rules={{equalTo: ()=>{return this.refs.password}}} labelGrid={1/10}></FormControl>
                    <FormControl type="textarea" layout="stack" label="TextArea:" grid={1} required rules={{maxLength: 20}}></FormControl>
                </Tile>

                <Tile header={"inline"}>
                    <FormControl type="number" label="Number:" rules={{required: true   }}></FormControl>
                    <FormControl type="integer" label="Integer:" rules={{max: 100}} ></FormControl>
                    <FormControl type="tel" label="Email:" rules={{email: true}} ></FormControl>
                    <FormControl type="text" label="UserName:" rules={{mixMaxLength: 12, noSpecial: true}} ></FormControl>

                    <FormControl type="password" label="Password:" ref="password"></FormControl>
                    <FormControl type="password" label="RePassword:" rules={{equalTo: ()=>{return this.refs.password}}}></FormControl>
                    <FormControl type="textarea" label="TextArea:"></FormControl>
                </Tile>

                <Tile header={"radio/checkbox"}>
                    <FormControl type="checkbox" layout="stack" label="请选择:"
                                 rules={{minLength: 2}}
                                 messages={{minLength: " 至少选取两项"}}
                                 data={[{id: "0", text: "iPhone"},{id: "1", text: "Android"},{id: "2", text: "WinPhone"}]}></FormControl>
                    <FormControl type="radio" layout="stack" label="请选择:" data={[{id: "0", text: "iPhone"},{id: "1", text: "Android"},{id: "2", text: "WinPhone"}]}></FormControl>
                </Tile>

                <Tile header={"select"}>
                    <FormControl type="select" data={[{id: "0", text: "中国"},{id: "1", text: "美国"}]}></FormControl>
                </Tile>

                <Tile header={"时间"}>
                    <FormControl type="datetime" label="时间:" dateOnly="true"></FormControl>
                </Tile>

                <Tile header={"自定义"}>
                    <FormControl rules={{"email": true}} className="input-group">
                        <Label className="input-group-addon"><FontIcon icon='envelope'></FontIcon></Label>
                        <Input type="text" placeholder="输入邮件"/>
                    </FormControl>

                    <FormControl rules={{"email": true}} className="input-group">
                        <Input type="text" placeholder="输入邮件"/>
                        <Label className="input-group-addon"><FontIcon icon='envelope'></FontIcon></Label>
                    </FormControl>

                    <FormControl rules={{"price": true}} className="input-group">
                        <Label className="input-group-addon"><FontIcon icon='cny'></FontIcon></Label>
                        <Input type="number" placeholder="输入价格"/>
                        <Label className="input-group-addon">.00</Label>
                    </FormControl>
                </Tile>
            </div>
        );
    }
}

module.exports = InputPage;