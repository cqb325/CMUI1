const React = require('react');
const ReactDOM = require('react-dom');
const Component = React.Component;
const classnames = require('classnames');
const Tile = require("./Tile");
const DateRange = require("DateRange");

class DateTimePage extends Component{
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
'<DateTime \n\
    view="datetime/date/time"   //视图类型datetime、date和time三种  \n\
    startDate="2016-04-05"      //开始时间 \n\
    endDate="2016-04-15"        //结束时间 \n\
    format="YYYY-MM-DD"         //格式化 参考`http://momentjs.cn/docs/#/displaying/format/` \n\
    value="2016-04-15"          //组件默认值 \n\
    readOnly={boolean}          //只读模式 \n\
    disabled={boolean}          //禁用模式 \n\
    style={Object}              //自定义样式 \n\
    className={String}          //自定义class \n\
    maxRange={number}          //最大选取的区域 \n\
></DateTime>'
                            }
                    </pre>
                </Tile>
                <Tile header={"日期时间"}>
                    <DateRange value="2016-06-01~2016-06-01" maxRange={10}></DateRange>

                    <pre className="brush: js" ref="code1">
                        {
`
<DateRange value="2016-06-01~2016-06-01" maxRange={60}></DateRange>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"快捷选择"}>
                    <DateRange value="2016-06-01~2016-06-01" shortcuts={["一周内","一个月内","三个月内","半年内","一个月后","半年后"]}></DateRange>

                    <pre className="brush: js" ref="code2">
                        {
                            `
<DateRange value="2016-06-01~2016-06-01" shortcuts={["一周内","一个月内","三个月内","半年内","一个月后","半年后"]}></DateRange>
`
                        }
                    </pre>
                </Tile>
            </div>
        )
    }
}

module.exports = DateTimePage;