const React = require('react');
const ReactDOM = require('react-dom');
const Component = React.Component;
const classnames = require('classnames');
const Table = require('Table');
const Tile = require("./Tile");

class TablePage extends Component{
    componentDidMount (){
        for(let i in this.refs){
            let ref = this.refs[i];
            let block = ReactDOM.findDOMNode(ref);
            SyntaxHighlighter.highlight({}, block);
        }
    }

    render() {
        let sexFormat = function(value, column, row){
            if(value == 1){
                return "男";
            }
            if(value == 2){
                return "女";
            }
        };

        let scoreFormat = function(value, column, row){
            if (value <= 100 && value >= 90){
                return "A";
            }
            if(value < 90 && value >= 80){
                return "B";
            }
            if(value < 80 && value >= 70){
                return "C";
            }
            if(value < 70 && value >= 60){
                return "D";
            }
            if(value < 60){
                return "E";
            }
        };

        let header = [
            {name: "name", text: "姓名"},
            {name: "sex", text: "性别", format: sexFormat},
            {name: "score", text: "分数", format: scoreFormat},
            {name: "time", text: "时间", format: "DateFormat"}
        ];
        let data = [];

        let date = new Date();
        for(let i = 0; i < 10; i++){
            data.push({
                name: "name"+i,
                sex: Math.random() > 0.5 ? 1 : 2,
                score: parseInt(Math.random() * 100),
                time: date.setDate(date.getDate()+i)
            });
        }
        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
`<Table
    data={Array}            //表格数据
    header={Array}          //表头数据
    bordered={Boolean}      //显示边框 默认false
    striped={Boolean}       //隔行显示颜色 默认false
></Table>

header = [
    {
        name: {String},      //表头字段名
        text: {String},      //表头显示名称
        tip: {Boolean},      //该列是否显示提示
        format: {Function}   //该列数据进行格式化
    }
]

Default Formatters:

"DateFormat"        --> YYYY-MM-DD
"DateTimeFormat"    --> YYYY-MM-DD HH:mm:ss
`
                        }
                    </pre>
                </Tile>
                <Tile header={"基本使用"}>
                    <Table data={data} header={header} bordered={true} striped={true} hover={true}></Table>

                    <pre className="brush: js" ref="code1">
                        {
`
let sexFormat = function(value, column, row){
    if(value == 1){
        return "男";
    }
    if(value == 2){
        return "女";
    }
};

let scoreFormat = function(value, column, row){
    if (value <= 100 && value >= 90){
        return "A";
    }
    if(value < 90 && value >= 80){
        return "B";
    }
    if(value < 80 && value >= 70){
        return "C";
    }
    if(value < 70 && value >= 60){
        return "D";
    }
    if(value < 60){
        return "E";
    }
};

let header = [
    {name: "name", text: "姓名"},
    {name: "sex", text: "性别", format: sexFormat},
    {name: "score", text: "分数", format: scoreFormat},
    {name: "time", text: "时间", format: "DateFormat"}
];
let data = [];

let date = new Date();
for(let i = 0; i < 10; i++){
    data.push({
        name: "name"+i,
        sex: Math.random() > 0.5 ? 1 : 2,
        score: parseInt(Math.random() * 100),
        time: date.setDate(date.getDate()+i)
    });
}

<Table data={data} header={header} bordered={true}></Table>`
                        }
                    </pre>
                </Tile>
            </div>
        )
    }
}

module.exports = TablePage;