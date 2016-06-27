const React = require('react');
const ReactDOM = require('react-dom');
const Component = React.Component;
const classnames = require('classnames');
const DateTime = require('DateTime');
const Tile = require("./Tile");

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
></DateTime>'
                            }
                    </pre>
                </Tile>
                <Tile header={"日期时间"}>
                    <DateTime startDate="2016-04-05" endDate="2016-04-15"></DateTime>

                    <pre className="brush: js" ref="code1">
                        {
`<DateTime startDate="2016-04-05" endDate="2016-04-15"></DateTime>`
                        }
                    </pre>
                </Tile>

                <Tile header={"日期"}>
                    <DateTime dateOnly="true" value="2016-01-01" tools={true}></DateTime>
                    <pre className="brush: js" ref="code2">
                        {
`<DateTime view="date" value="2016-01-01"></DateTime>`
                        }
                    </pre>
                </Tile>

                <Tile header={"时间"}>
                    <DateTime view="time"></DateTime>

                    <pre className="brush: js" ref="code3">
                        {
`<DateTime view="time"></DateTime>`
                        }
                    </pre>
                </Tile>

                <Tile header={"只选择月份"}>
                    <DateTime monthOnly="true"></DateTime>

                    <pre className="brush: js" ref="code4">
                        {
`<DateTime monthOnly="true"></DateTime>`
                        }
                    </pre>
                </Tile>

                <Tile header={"只选择年份"}>
                    <DateTime yearOnly="true"></DateTime>

                    <pre className="brush: js" ref="code5">
                        {
                            `<DateTime yearOnly="true"></DateTime>`
                        }
                    </pre>
                </Tile>
            </div>
        )
    }
}

module.exports = DateTimePage;