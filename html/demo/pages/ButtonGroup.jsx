const React = require('react');
const BaseDemo = require('./BaseDemo');
const classnames = require('classnames');
const Button = require('Button');
const ButtonGroup = require('ButtonGroup');
const IconButton = require('IconButton');
const Tile = require("./Tile");

class ButtonPage extends BaseDemo{

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
                <Tile header={"样式"}>
                    <div>
                        <ButtonGroup>
                            <Button theme="primary">PRIMARY</Button>
                            <Button theme="primary">PRIMARY</Button>
                            <Button theme="primary">PRIMARY</Button>
                        </ButtonGroup>
                    </div>

                    <div className="mt-10">
                        <ButtonGroup>
                            <Button theme="primary" icon="cloud"></Button>
                            <Button theme="primary" icon="cloud"></Button>
                        </ButtonGroup>
                    </div>

                    <div className="mt-10">
                        <ButtonGroup>
                            <Button icon="cloud" size="small"></Button>
                            <Button icon="cloud" size="small"></Button>
                        </ButtonGroup>
                    </div>

                    <div className="mt-10">
                        <ButtonGroup>
                            <Button theme="success">PRIMARY</Button>
                            <Button theme="success">PRIMARY</Button>
                            <Button theme="success">PRIMARY</Button>
                        </ButtonGroup>
                    </div>

                    <div className="mt-10">
                        <ButtonGroup>
                            <Button theme="warning">warning</Button>
                            <Button theme="warning">warning</Button>
                            <Button theme="warning">warning</Button>
                        </ButtonGroup>
                    </div>

                    <div className="mt-10">
                        <ButtonGroup>
                            <Button theme="danger">danger</Button>
                            <Button theme="danger">danger</Button>
                            <Button theme="danger">danger</Button>
                        </ButtonGroup>
                    </div>
                    <div className="mt-10">
                        <ButtonGroup>
                            <Button theme="default">cancel</Button>
                            <Button theme="primary">ok</Button>
                        </ButtonGroup>
                    </div>
                </Tile>
            </div>
        )
    }
}

module.exports = ButtonPage;