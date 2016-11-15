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
                <Tile header={"基本"}>
                    <div><FontIcon font="custom-icon" icon="check">check</FontIcon></div>
                    <div><FontIcon font="custom-icon" icon="muying">muying</FontIcon></div>
                    <pre className="brush: js" ref="code1">
                        {
                            `<FontIcon font="icon" icon="custom-icon-check">check</FontIcon>
                    <FontIcon font="icon" icon="custom-icon-muying">muying</FontIcon>`
                        }
                    </pre>
                </Tile>

            </div>
        )
    }
}

module.exports = FontIconPage;