const React = require('react');
const BaseDemo = require('./BaseDemo');
const classnames = require('classnames');
const Progress = require('Progress');
const Tile = require("./Tile");

class ProgressPage extends BaseDemo{

    componentDidMount(){
        super.componentDidMount();

        let progress = this.refs.progress;
        let progress1 = this.refs.progress1;

        let timer = null;
        let start = 0;
        let animate = function(){
            timer = window.setTimeout(function(){
                start = start + 1;
                progress.update(start);
                progress1.update(start);
                if(start < 100) {
                    animate();
                }
            }, 100);
        };

        animate();
    }

    render() {

        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
`
<Progress
    value={Float}                   //当前的值
    min={Float}                     //最小值
    max={Float}                     //最大值
    showPercent={Boolean}           //显示百分比
    theme={String}                  //主题 default/primary/success/info/warning/danger
    striped={Boolean}               //显示条纹
    active={Boolean}                //显示动画
></Progress>
`
                        }
                    </pre>
                </Tile>
                <Tile header={"基本使用方式"}>
                    <Progress value="0" ref="progress" grid={3/4}></Progress>text<br/><br/>
                    <Progress value="0" ref="progress1" showPercent={true}></Progress>

                    <pre className="brush: js" ref="code1">
                        {
`
<Progress value="0" ref="progress" grid={3/4}></Progress>text<br/><br/>
<Progress value="0" ref="progress1" showPercent={true}></Progress><br/>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"样式"}>
                    <Progress value="30" showPercent={true}></Progress><br/>
                    <Progress value="40" showPercent={true} theme="primary"></Progress><br/>
                    <Progress value="50" showPercent={true} theme="success"></Progress><br/>
                    <Progress value="60" showPercent={true} theme="info"></Progress><br/>
                    <Progress value="70" showPercent={true} theme="warning"></Progress><br/>
                    <Progress value="80" showPercent={true} theme="danger"></Progress><br/>

                    <pre className="brush: js" ref="code2">
                        {
`
<Progress value="30" showPercent={true}></Progress><br/>
<Progress value="40" showPercent={true} theme="primary"></Progress><br/>
<Progress value="50" showPercent={true} theme="success"></Progress><br/>
<Progress value="60" showPercent={true} theme="info"></Progress><br/>
<Progress value="70" showPercent={true} theme="warning"></Progress><br/>
<Progress value="80" showPercent={true} theme="danger"></Progress><br/>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"条纹"}>
                    <Progress value="40" showPercent={true} theme="primary" striped={true}></Progress><br/>
                    <Progress value="50" showPercent={true} theme="success" striped={true}></Progress><br/>
                    <Progress value="60" showPercent={true} theme="info" striped={true}></Progress><br/>
                    <Progress value="70" showPercent={true} theme="warning" striped={true}></Progress><br/>
                    <Progress value="80" showPercent={true} theme="danger" striped={true}></Progress><br/>

                    <pre className="brush: js" ref="code3">
                        {
`
<Progress value="40" showPercent={true} theme="primary" striped={true}></Progress><br/>
<Progress value="50" showPercent={true} theme="success" striped={true}></Progress><br/>
<Progress value="60" showPercent={true} theme="info" striped={true}></Progress><br/>
<Progress value="70" showPercent={true} theme="warning" striped={true}></Progress><br/>
<Progress value="80" showPercent={true} theme="danger" striped={true}></Progress><br/>
`
                        }
                    </pre>
                </Tile>

                <Tile header={"动画"}>
                    <Progress value="40" showPercent={true} theme="primary" striped={true} active={true}></Progress><br/>
                    <Progress value="50" showPercent={true} theme="success" striped={true} active={true}></Progress><br/>
                    <Progress value="60" showPercent={true} theme="info" striped={true} active={true}></Progress><br/>

                    <pre className="brush: js" ref="code4">
                        {
`
<Progress value="40" showPercent={true} theme="primary" striped={true} active={true}></Progress><br/>
<Progress value="50" showPercent={true} theme="success" striped={true} active={true}></Progress><br/>
<Progress value="60" showPercent={true} theme="info" striped={true} active={true}></Progress><br/>
`
                        }
                    </pre>
                </Tile>
            </div>
        )
    }
}

module.exports = ProgressPage;