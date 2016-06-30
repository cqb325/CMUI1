const React = require('react');
const BaseDemo = require('./BaseDemo');
const Panel = require('Panel');
const Tile = require("./Tile");
const Button = require("Button");
const FontIcon = require("FontIcon");
const IconButton = require("IconButton");


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

        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
                            `
<Toast></Toast>
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

`
                        }
                    </pre>


                </Tile>
            </div>
        )
    }
}

module.exports = PanelPage;