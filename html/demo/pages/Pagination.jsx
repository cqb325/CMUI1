const React = require('react');
const ReactDOM = require('react-dom');
const Component = React.Component;
const Pagination = require('Pagination');
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
        let pageChange = function(page, size){
            console.log(page);
        };
        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
`
<Pagination
    current={Number}            //当前的页号
    pageSize={Number}           //每页的记录数
    total={Number}              //所有记录数
    onChange={Function}         //页号改变回调
></Pagination>
`
                        }
                    </pre>
                </Tile>
                <Tile header={"基本使用"}>
                    <Pagination current={10} pageSize={10} total={1000} onChange={pageChange}></Pagination>

                    <pre className="brush: js" ref="code1">
                        {
`
let pageChange = function(page, size){
    console.log(page);
};
<Pagination current={10} pageSize={10} total={1000} onChange={pageChange}></Pagination>`
                        }
                    </pre>
                </Tile>
            </div>
        )
    }
}

module.exports = PaginationPage;