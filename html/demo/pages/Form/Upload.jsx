const React = require('react');
const BaseDemo = require('../BaseDemo');
const classnames = require('classnames');
const Upload = require('Upload');
const Tile = require("../Tile");

class InputPage extends BaseDemo{
    render() {

        return (
            <div className="container">
                <Tile header={"1"}>
                    <Upload multiple={false} accept="" autoUpload={true} service="xxx" placeHolder="请选择文件" grid={1}></Upload> sss
                </Tile>

                <Tile header={"1"}>
                    <Upload multiple={false} accept={{title: "选择图片", mimeTypes: 'image/*'}} service="" placeHolder="请选择图片"></Upload>
                    <span className="mr-30"></span>
                    <Upload multiple={false} accept={{title: "选择图片", mimeTypes: '.png,.jpg'}} service="" placeHolder="请选择图片"></Upload>
                </Tile>
            </div>
        );
    }
}

module.exports = InputPage;