const React = require('react');
const BaseDemo = require('../BaseDemo');
const MessageBox = require('MessageBox');
const Tile = require("../Tile");
const Button = require("Button");
const FontIcon = require("FontIcon");
const IconButton = require("IconButton");


class MessageBoxPage extends BaseDemo{

    showTip(){
        this.refs.tip.show("显示内容", "提示");
    }

    render() {

        return (
            <div className="container">
                <MessageBox title="提示" ref="tip"/>
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
                            `

`
                        }
                    </pre>
                </Tile>
                <Tile header={"基本使用方式"}>
                    <Button onClick={this.showTip.bind(this)}>显示提示框</Button>
                    <pre className="brush: js" ref="code1">
                        {
                            `

`
                        }
                    </pre>


                </Tile>
            </div>
        )
    }
}

module.exports = MessageBoxPage;