const React = require('react');
const ReactDOM = require('react-dom');
const Component = React.Component;
const classnames = require('classnames');
const FontIcon = require('FontIcon');
const Tile = require("../Tile");


class FontIconPage extends Component{
    componentDidMount (){
        for(let i in this.refs){
            let ref = this.refs[i];
            let block = ReactDOM.findDOMNode(ref);
            SyntaxHighlighter.highlight({}, block);
        }
    }

    render() {
        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
`<FontIcon
    icon={String}          //font awesome中的icon值
></Button>`
                        }
                    </pre>
                </Tile>
                <Tile header={"基本"}>
                    <FontIcon icon="flag">flag icon</FontIcon>
                    <pre className="brush: js" ref="code1">
                        {
                            `<FontIcon icon="flag">flag icon</FontIcon>`
                        }
                    </pre>
                </Tile>

                <Tile header={"图标大小"}>
                    <FontIcon icon="camera-retro">normal size</FontIcon><br/>
                    <FontIcon icon="camera-retro" size="lg">lg size</FontIcon><br/>
                    <FontIcon icon="camera-retro" size="2x">2x size</FontIcon><br/>
                    <FontIcon icon="camera-retro" size="3x">3x size</FontIcon><br/>
                    <FontIcon icon="camera-retro" size="4x">4x size</FontIcon><br/>
                    <FontIcon icon="camera-retro" size="5x">5x size</FontIcon>
                    <pre className="brush: js" ref="code2">
                        {
`<FontIcon icon="camera-retro">normal size</FontIcon>
<FontIcon icon="camera-retro" size="lg">lg size</FontIcon>
<FontIcon icon="camera-retro" size="2x">2x size</FontIcon>
<FontIcon icon="camera-retro" size="3x">3x size</FontIcon>
<FontIcon icon="camera-retro" size="4x">4x size</FontIcon>
<FontIcon icon="camera-retro" size="5x">5x size</FontIcon>`
                        }
                    </pre>
                </Tile>


                <Tile header={"图标大小"}>
                    <FontIcon icon="spinner" spin={true} size="3x" className="fa-fw"></FontIcon>
                    <FontIcon icon="cog" spin={true} size="3x" className="fa-fw"></FontIcon>
                    <FontIcon icon="spinner" spin={true} pulse={true} size="3x" className="fa-fw"></FontIcon>
                    <pre className="brush: js" ref="code3">
                        {
`<FontIcon icon="spinner" spin={true} size="3x" className="fa-fw"></FontIcon>
<FontIcon icon="cog" spin={true} size="3x" className="fa-fw"></FontIcon>
<FontIcon icon="spinner" spin={true} pulse={true} size="3x" className="fa-fw"></FontIcon>`
                        }
                    </pre>
                </Tile>

            </div>
        )
    }
}

module.exports = FontIconPage;