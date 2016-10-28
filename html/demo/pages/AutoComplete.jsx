const React = require('react');
const BaseDemo = require('./BaseDemo');
const AutoComplete = require('AutoComplete');
const Tile = require("./Tile");

class SelectPage extends BaseDemo{

    render() {
        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
                            `
`
                        }
                    </pre>
                </Tile>
                <Tile header={"基本使用方式"}>
                    选择：<AutoComplete data={[]} filterurl="./pages/data2.json"/>

                </Tile>

            </div>
        )
    }
}

module.exports = SelectPage;