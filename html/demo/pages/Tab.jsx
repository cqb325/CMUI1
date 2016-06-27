const React = require('react');
const BaseDemo = require('./BaseDemo');
const Tab = require('Tab');
const Tile = require("./Tile");


let Tab1 = React.createClass({
    render(){
        return(<span>Tab1</span>);
    }
});

let Tab2 = React.createClass({
    render(){
        return(<span>Tab2</span>);
    }
});

class TabPage extends BaseDemo{

    render() {
        let data = [{
            id: "1",
            text: "tab1",
            component: Tab1
        },{
            id: "2",
            text: "tab2",
            component: Tab2
        }];
        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
`
<Tab
    data={Array}                    //数据源
    activeIndex={Integer}           //默认选中的Tab
    onBeforeSelect={Function}       //选中前回调
    onSelect={function}             //选中回调
></Tab>

data = [{id: "xx", text: "tab1", component: Component}]
`
                        }
                    </pre>
                </Tile>
                <Tile header={"基本使用方式"}>
                    <Tab data={data} activeIndex="1"></Tab>


                    <pre className="brush: js" ref="code1">
                        {
`
let Tab1 = React.createClass({
    render(){
        return(<span>Tab1</span>);
    }
});

let Tab2 = React.createClass({
    render(){
        return(<span>Tab2</span>);
    }
});

let data = [{
    id: "1",
    text: "tab1",
    component: Tab1
},{
    id: "2",
    text: "tab2",
    component: Tab2
}];
<Tab data={data} activeIndex="1"></Tab>
`
                        }
                    </pre>


                </Tile>
            </div>
        )
    }
}

module.exports = TabPage;