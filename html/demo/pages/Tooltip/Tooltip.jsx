const React = require('react');
const ReactDOM = require('react-dom');
const Tooltip = require('Tooltip');
const Button = require('Button');
const Tile = require("../Tile");
const BindTooltip = require("mixins/BindTooltip");

let Page = React.createClass({

    mixins: [BindTooltip],

    componentDidMount(){
        for (let i in this.refs) {
            let ref = this.refs[i];
            let block = ReactDOM.findDOMNode(ref);
            SyntaxHighlighter.highlight({}, block);
        }

        this.refs.tooltip.bind(this.refs.link);
        this.refs.tooltip2.bind(this.refs.link);
        this.refs.tooltip3.bind(this.refs.link);

        this.refs.tooltip6.bind(this.refs.target2);

    },

    show(){
        this.refs.tooltip6.show();
    },

    hide(){
        this.refs.tooltip6.hide();
    },

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
                    <Tooltip theme="black" align="top" ref="tooltip" title="Title" content="asdasdasdasdasdasdasdasdasdasda"></Tooltip>
                    <Tooltip theme="default" align="bottom" ref="tooltip2" title="Title" offset={{x: 80, y:0}} content="asdasdasdasdasdasdasdasdasdasda"></Tooltip>
                    <Tooltip theme="black" align="right" ref="tooltip3" title="Title3" content="asdasdasdasdasdasdasdasdasdasda"></Tooltip>

                    <Tooltip theme="black" trigger="toggle" align="right" ref="tooltip4" data-toggle="tooltip" data-target="target" content="asdasdasdasdasdasdasdasdasdasda"></Tooltip>
                    <Tooltip theme="danger" align="top" ref="tooltip5" data-toggle="tooltip" data-target="target" title="Title" content="asdasdasdasdasdasdasdasdasdasda"></Tooltip>
                    <Tooltip theme="danger" align="bottom" ref="tooltip7" data-toggle="tooltip" data-target="target" title="子元素内容">
                        <span>子元素内容</span>
                    </Tooltip>
                    <a href="#" ref="link">链接</a>

                    <div ref="target" style={{width: "100px", height: "100px", "marginTop": "100px", "background": "#ff00ff", "color": "#fff"}}>触发对象</div>

                    <Tooltip theme="danger" trigger="none" align="right" ref="tooltip6" content="asdasdasdasdasdasdasdasdasdasda"></Tooltip>
                    <div ref="target2" style={{width: "100px", height: "100px", "marginTop": "100px", "marginLeft": "400px", "background": "#ff0000", "color": "#fff"}}>提示对象</div>

                    <Button theme="success" onClick={this.show}>显示</Button><Button onClick={this.hide} className="ml-10" theme="primary">隐藏</Button>

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
});

module.exports = Page;