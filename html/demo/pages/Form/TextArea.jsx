const React = require('react');
const BaseDemo = require('../BaseDemo');
const TextArea = require('TextArea');
const Tile = require("../Tile");
const Label = require('Label');

class AreaPage extends BaseDemo{
    render() {

        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
`
<TextArea
    name={String}               //字段的名称
    className={String}          //自定义class
    style={Object}              //自定义样式
    readOnly={Boolean}          //只读模式
    autoHeight={Boolean}        //自适应高度 默认false
    height={String}             //高度
></FormControl>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"基本使用"}>
                    <Label grid={0.1} htmlFor="defaultInput" style={{"verticalAlign": "top"}}>文本框:</Label>
                    <TextArea id="defaultInput" grid={1} height="100px"></TextArea>
                    <pre className="brush: js" ref="code1">
                        {
`
<Label grid={0.1} htmlFor="defaultInput" style={{"verticalAlign": "top"}}>文本框:</Label>
<TextArea id="defaultInput" grid={1} height="100px"></TextArea>
`
                        }
                    </pre>
                </Tile>


                <Tile header={"自适应"}>
                    <Label grid={0.1} htmlFor="defaultInput" style={{"verticalAlign": "top"}}>文本框:</Label>
                    <TextArea id="defaultInput" autoHeight="true" grid={1} height="100px"></TextArea>
                    <pre className="brush: js" ref="code2">
                        {
`
<Label grid={0.1} htmlFor="defaultInput" style={{"verticalAlign": "top"}}>文本框:</Label>
<TextArea id="defaultInput" autoHeight="true" grid={1} height="100px"></TextArea>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"只读"}>
                    <Label grid={0.1} htmlFor="defaultInput" style={{"verticalAlign": "top"}}>文本框:</Label>
                    <TextArea id="defaultInput" readOnly="true" grid={1} height="100px">只读</TextArea>
                    <pre className="brush: js" ref="code3">
                        {
`
<Label grid={0.1} htmlFor="defaultInput" style={{"verticalAlign": "top"}}>文本框:</Label>
<TextArea id="defaultInput" readOnly="true" grid={1} height="100px">只读</TextArea>
`
                        }
                    </pre>
                </Tile>
            </div>
        );
    }
}

module.exports = AreaPage;