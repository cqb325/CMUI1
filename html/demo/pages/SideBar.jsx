const React = require('react');
const ReactDOM = require('react-dom');
const Component = React.Component;
const SideBar = require('SideBar');
const Tile = require("./Tile");

class SideBarPage extends Component{
    componentDidMount (){
        for(let i in this.refs){
            let ref = this.refs[i];
            let block = ReactDOM.findDOMNode(ref);
            SyntaxHighlighter.highlight({}, block);
        }
    }

    render() {
        let data = [
            {text: "Button",icon: "fa fa-square",link: ""},
            {text: "DateTime",icon: "fa fa-calendar",link: ""},
            {text: "Grids",icon: "fa fa-th",link: ""},
            {text: "FontIcon",icon: "fa fa-flag", children: [
                {text: "FontIcon",link: ""},
                {text: "AllIcons",link: ""}
            ]},
            {text: "Table",icon: "fa fa-table",link: ""},
            {text: "Pagination",icon: "fa fa-ellipsis-h",link: ""},
            {text: "Accordion",icon: "fa fa-list",link: ""}
        ];
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
                <Tile header={"基本使用"}>
                    <div className="mb-30" style={{position: "relative", height: 500}}>
                        <SideBar data={data} style={{width: '200px'} } logo="./assets/imgs/logo.png" header="SideBar"></SideBar>
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

module.exports = SideBarPage;