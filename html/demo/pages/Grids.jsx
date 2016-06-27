const React = require('react');
const ReactDOM = require('react-dom');
const Component = React.Component;
const classnames = require('classnames');
const grids = require('utils/grids');
const Tile = require("./Tile");

class Col extends Component{
    render(){
        let className = classnames("test-grid", "mb-10", grids.getGrid(this.props.grid));
        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}
class gridsPage extends Component{
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
`<Button
    theme={String}          //default、primary、success、info、warning、danger
    disabled={boolean}      //禁用状态
></Button>`
                        }
                    </pre>
                </Tile>
                <Tile header={"样式"}>
                    <Col grid={{width: 1}}></Col>

                    <Col grid={{width: .5}}>.5</Col>
                    <Col grid={{width: .5}}>.5</Col>

                    <Col grid={{width: .5}}>.5</Col>
                    <Col grid={{width: .2}}>.2</Col>
                    <Col grid={{width: .3}}>.3</Col>

                    <Col grid={{width: .7}}>.7</Col>
                    <pre className="brush: js" ref="code1">
                        {
`class Col extends Component{
    render(){
        let className = classnames("test-grid", "mb-10", grids.getGrid(this.props.grid));
        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}

<Col grid={{width: 1}}></Col>
<Col grid={{width: .5}}>.5</Col>
<Col grid={{width: .5}}>.5</Col>
<Col grid={{width: .5}}>.5</Col>
<Col grid={{width: .2}}>.2</Col>
<Col grid={{width: .3}}>.3</Col>
<Col grid={{width: .7}}>.7</Col>`
                            }
                    </pre>
                </Tile>
            </div>
        )
    }
}

module.exports = gridsPage;