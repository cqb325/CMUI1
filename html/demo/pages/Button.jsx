const React = require('react');
const BaseDemo = require('./BaseDemo');
const classnames = require('classnames');
const Button = require('Button');
const IconButton = require('IconButton');
const Tile = require("./Tile");

class ButtonPage extends BaseDemo{

    render() {
        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
`<Button
    theme={String}          //default、primary、success、info、warning、danger
    disabled={boolean}      //禁用状态
    raised={Boolean}        //raised状态
    icon={String}           //图标
    iconAlign={String}      //left right
    style={Object}          //样式
></Button>


<IconButton
    icon={String}           //图标
    disabled={boolean}      //禁用状态
    style={Object}          //样式
></IconButton>
`
                        }
                    </pre>
                </Tile>
                <Tile header={"样式"}>
                    <Button>按钮</Button>
                    <span className="mr-10"></span>
                    <Button theme="primary">PRIMARY</Button>
                    <span className="mr-10"></span>
                    <Button theme="success">SUCCESS</Button>
                    <span className="mr-10"></span>
                    <Button theme="info">INFO</Button>
                    <span className="mr-10"></span>
                    <Button theme="warning">WARNING</Button>
                    <span className="mr-10"></span>
                    <Button theme="danger">DANGER</Button>

                    <pre className="brush: js" ref="code1">
                        {
                            `<Button>按钮</Button>`
                        }
                    </pre>

                    <pre className="brush: js" ref="code2">
                        {
                            `<Button theme="success">SUCCESS</Button>`
                        }
                    </pre>

                    <pre className="brush: js" ref="code3">
                        {
                            `<Button theme="info">INFO</Button>`
                        }
                    </pre>

                    <pre className="brush: js" ref="code4">
                        {
                            `<Button theme="warning">WARNING</Button>`
                        }
                    </pre>

                    <pre className="brush: js" ref="code5">
                        {
                            `<Button theme="danger">DANGER</Button>`
                        }
                    </pre>
                </Tile>

                <Tile header={"RAISED"}>
                    <Button theme="warning" raised="true">RAISED</Button>
                    <span className="mr-10"></span>
                    <Button theme="success" raised="true">SUCCESS</Button>
                    <span className="mr-10"></span>
                    <Button theme="success" raised="true" disabled={true}>RAISED</Button>
                    <pre className="brush: js" ref="code9">
                        {
`
<Button theme="warning" raised="true">RAISED</Button>
<span className="mr-10"></span>
<Button theme="success" raised="true">SUCCESS</Button>
<span className="mr-10"></span>
<Button theme="success" raised="true" disabled={true}>RAISED</Button>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"禁用"}>
                    <Button disabled={true}>禁用按钮</Button>
                    <pre className="brush: js" ref="code6">
                        {
                            `<Button disabled={true}>禁用按钮</Button>`
                        }
                    </pre>
                </Tile>

                <Tile header={"带图标按钮"}>
                    <Button icon="calendar" theme='success'>FONT ICON</Button>
                    <span className="mr-10"></span>
                    <Button icon="calendar" iconAlign="right" theme='warning'>ICON RIGHT</Button>

                    <pre className="brush: js" ref="code7">
                        {
`
<Button icon="calendar" theme='success'>FONT ICON</Button>
<Button icon="calendar" iconAlign="right" theme='warning'>ICON RIGHT</Button>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"图标按钮"}>
                    <IconButton icon="github"/>
                    <IconButton icon="pinterest" style={{fontSize: '48px'}}/>
                    <IconButton icon="github" disabled={true}/>
                    <pre className="brush: js" ref="code8">
                        {
`
<IconButton icon="github"/>
<IconButton icon="pinterest" style={{fontSize: '48px'}}/>
<IconButton icon="github" disabled={true}/>
`
                        }
                    </pre>
                </Tile>
            </div>
        )
    }
}

module.exports = ButtonPage;