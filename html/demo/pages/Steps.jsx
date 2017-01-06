const React = require('react');
const ReactDOM = require('react-dom');
const Component = React.Component;
const Steps = require('Steps');
const Button = require('Button');
const Step = Steps.Step;
const Tile = require("./Tile");

class PaginationPage extends Component{
    componentDidMount (){
        for(let i in this.refs){
            let ref = this.refs[i];
            let block = ReactDOM.findDOMNode(ref);
            SyntaxHighlighter.highlight({}, block);
        }
    }

    next(){
        this.refs.steps1.next();
        this.refs.steps2.next();
        this.refs.steps3.next();
        this.refs.steps4.next();
    }

    prev(){
        this.refs.steps1.prev();
        this.refs.steps2.prev();
        this.refs.steps3.prev();
        this.refs.steps4.prev();
    }

    render() {
        return (
            <div className="container">
                <Tile header={"使用方式"}>

                </Tile>
                <Tile header={"基本使用"}>
                    <Steps ref="steps1" current={1}>
                        <Step title="Finished" description="This is a description."></Step>
                        <Step title="In Progress" description="This is a description." />
                        <Step title="Waiting" description="This is a description." />
                    </Steps>

                    <Steps ref="steps2" current={1}>
                        <Step title="Finished" description="This is a description." icon="hand-pointer-o"></Step>
                        <Step title="In Progress" description="This is a description." icon="hand-peace-o"/>
                        <Step title="Waiting" description="This is a description." icon="hand-spock-o"/>
                    </Steps>

                    <Steps ref="steps3" current={1} size="small">
                        <Step title="Finished"></Step>
                        <Step title="In Progress"/>
                        <Step title="Waiting"/>
                    </Steps>

                    <Steps ref="steps4" current={0} layout="vertical">
                        <Step title="Finished" description="This is a description."></Step>
                        <Step title="In Progress" description="This is a description." />
                        <Step title="Waiting" description="This is a description." />
                    </Steps>

                    <div>
                        <Button onClick={this.next.bind(this)} theme="primary">Next</Button>
                        <Button onClick={this.prev.bind(this)} theme="primary">Prev</Button>
                    </div>
                </Tile>
            </div>
        )
    }
}

module.exports = PaginationPage;