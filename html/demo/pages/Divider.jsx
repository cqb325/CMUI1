const React = require('react');
const BaseDemo = require('./BaseDemo');
const classnames = require('classnames');
const Divider = require('Divider');
const Animation = require('utils/animation');
const Tile = require("./Tile");

class Page extends BaseDemo{
    render() {
        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
`<Divider
    theme={String}          //default、dotted、dashed
    className={String}      //自定义class
    style={Object}          //样式
></Divider>
`
                        }
                    </pre>
                </Tile>
                <Tile header={"样式"}>
                    <Divider />

                    <Animation from={{width: "50px", height: "50px", opacity: "1"}} to={{width: "200px", height: "200px", opacity: "0.2"}} time="300">
                        <div style={{background: "#ff0000", width: "50px", height: "50px"}}></div>
                    </Animation>
                    <pre className="brush: js" ref="code1">
                        {
                            `<Divider />`
                        }
                    </pre>
                    <Divider theme="dotted"/>
                    <pre className="brush: js" ref="code2">
                        {
                            `<Divider theme="dotted"/>`
                        }
                    </pre>
                    <Divider theme="dashed"/>
                    <pre className="brush: js" ref="code3">
                        {
                            `<Divider theme="dashed"/>`
                        }
                    </pre>
                </Tile>
            </div>
        )
    }
}

module.exports = Page;