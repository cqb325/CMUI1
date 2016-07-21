const React = require('react');
const BaseDemo = require('../BaseDemo');
const Dialog = require('Dialog');
const Tile = require("../Tile");
const Button = require("Button");
const FontIcon = require("FontIcon");
const IconButton = require("IconButton");


class DialogPage extends BaseDemo{

    showTip(){
        this.refs.dialog.open();
    }

    closeDialog(){
        this.refs.dialog.close();
    }
    render() {

        let footers = {
            components: [
                <Button theme="success" raised={true} icon="save" >保 存</Button>,
                <Button theme="info" raised={true} onClick={this.closeDialog.bind(this) } icon="flask" className="ml-10">取 消</Button>
            ]
        };

        return (
            <div className="container">
                <Dialog title="表单" ref="dialog">
                    弹框内容
                </Dialog>
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

module.exports = DialogPage;