const React = require('react');
const BaseDemo = require('./BaseDemo');
const Toast = require('Toast');
const Tile = require("./Tile");
const Button = require("Button");


class ToastPage extends BaseDemo{

    render() {

        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
                            `
<Toast></Toast>
`
                        }
                    </pre>
                </Tile>
                <Tile header={"基本使用方式"}>
                    <Toast></Toast>

                    <Button onClick={()=>{
                            window.Toast.show();
                            window.setTimeout(()=>{
                                window.Toast.hide();
                            }, 1000);
                        }}>显 示</Button>

                    <pre className="brush: js" ref="code1">
                        {
`
<Toast></Toast>

<Button onClick={()=>{
    window.Toast.show();
    window.setTimeout(()=>{
        window.Toast.hide();
    }, 1000);
}}>显 示</Button>
`
                        }
                    </pre>


                </Tile>
            </div>
        )
    }
}

module.exports = ToastPage;