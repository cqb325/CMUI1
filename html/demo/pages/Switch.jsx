const React = require('react');
const ReactDOM = require('react-dom');
const Component = React.Component;
const Switch = require('Switch');
const Tile = require("./Tile");

class PaginationPage extends Component{
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

                </Tile>
                <Tile header={"基本使用"}>
                    <Switch></Switch> asd 中文<br/><br/>
                    <Switch checked={true}></Switch> <br/><br/>
                    <Switch disabled={true}></Switch> <br/><br/>
                    <Switch checkedText="开" unCheckedText="关"></Switch> <br/><br/>
                    <Switch checkedText="on" unCheckedText="off"></Switch> <br/><br/>
                    <Switch size="small"></Switch> <br/><br/>
                </Tile>
            </div>
        )
    }
}

module.exports = PaginationPage;