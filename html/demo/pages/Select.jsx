const React = require('react');
const BaseDemo = require('./BaseDemo');
const Select = require('Select');
const Tile = require("./Tile");

class SelectPage extends BaseDemo{

    render() {
        let data1 = [{
            id: "0", text: "iPhone"
        },{
            id: "1", text: "Android"
        }];
        let data2 = ["iPhone","Android"];

        let data3 = {
            "0":"iPhone",
            "1":"Android"
        };

        let data4 = [{
            code: "cn", text: "中国"
        },{
            code: "gb", text: "英国"
        }];

        let selectChange = function(value, item){
            console.log(item.text);
        };



        let provinces = ['北京市','上海市','天津市','重庆市','河北省','山西省','辽宁省'];
        let cities = {};
        cities['北京市']= ['北京市区', '北京市辖区'];
        cities['上海市']= ['上海市区', '上海市辖区'];
        cities['天津市']= ['天津市区', '天津市辖区'];
        cities['重庆市']= ['重庆市区', '重庆市辖区'];
        cities['河北省']= ['石家庄', '张家口市', '承德市', '秦皇岛市', '唐山市', '廊坊市', '保定市', '沧州市', '衡水市', '邢台市', '邯郸市'];
        cities['山西省']= ['太原市', '大同市', '朔州市', '阳泉市', '长治市', '晋城市', '忻州地区', '吕梁地区', '晋中市', '临汾地区', '运城地区'];
        cities['辽宁省']= ['沈阳市', '朝阳市', '阜新市', '铁岭市', '抚顺市', '本溪市', '辽阳市', '鞍山市', '丹东市', '大连市', '营口市', '盘锦市', '锦州市', '葫芦岛市'];

        window.setTimeout(()=>{
            let province = this.refs.province;
            let city = this.refs.city;
            province.on("change", function(value, item){
                let cityData = cities[item.id];
                city.setData(cityData);
            });
        }, 10);

        return (
            <div className="container">
                <Tile header={"使用方式"}>
                    <pre className="brush: js" ref="code">
                        {
`
<Select
    data={Array/Object}             //数据源
    placeholder={String}            //holder文字
    value={String}                  //默认值
    className={String}              //自定义class
></Select>

data=["选项1","选项2","选项3"]
data={value1: "选项1", value2: "选项2"}
data=[{id: "value1", text: "选项1"},{id: "value2", text: "选项2"}]
`
                        }
                    </pre>
                </Tile>
                <Tile header={"基本使用方式"}>
                    选择：<Select data={data1} placeholder="请选择1" onChange={selectChange} value="1"></Select>
                    <span className="mr-10"></span>
                    <Select data={data2} placeholder="请选择2" choiceText="--自定义请选择--"></Select>
                    <span className="mr-10"></span>
                    <Select data={data3}
                            placeholder="请选择3"
                            choiceText="--自定义请选择--"
                        ></Select>
                    <span className="mr-10"></span>
                    <Select data={data4}
                            valueField="code"
                            placeholder="请选择3"
                            choiceText="--自定义请选择--"
                            optionsTpl="<img src='./assets/imgs/{code}.png'> {text}"
                        ></Select>

                    <pre className="brush: js" ref="code1">
                        {
`
let data1 = [{
    id: "0", text: "iPhone"
},{
    id: "1", text: "Android"
}];
let data2 = ["iPhone","Android"];

let data3 = {
    "0":"iPhone",
    "1":"Android"
};

let data4 = [{
    code: "cn", text: "中国"
},{
    code: "gb", text: "英国"
}];

let selectChange = function(item){
    console.log(item.text);
};
<Select data={data1} placeholder="请选择1" onChange={selectChange}></Select>
<span className="mr-10"></span>
<Select data={data2} placeholder="请选择2" choiceText="--自定义请选择--"></Select>
<span className="mr-10"></span>
<Select data={data3}
        placeholder="请选择3"
        choiceText="--自定义请选择--"
    ></Select>
<span className="mr-10"></span>
<Select data={data4}
        valueField="code"
        placeholder="请选择3"
        choiceText="--自定义请选择--"
        optionsTpl="<img src='./assets/imgs/{code}.png'> {text}"
    ></Select>
`
                        }
                    </pre>


                </Tile>


                <Tile header={"远程数据源"}>
                    <Select url="./pages/Form/data.json" grid={{width: 0.25}} placeholder="请选择1" valueField="type" textField="name"></Select>

                    <pre className="brush: js" ref="code2">
                        {
`
<Select url="./pages/Form/data.json" placeholder="请选择1" valueField="type" textField="name"></Select>
`
                        }
                    </pre>


                </Tile>

                <Tile header={"禁用"}>
                    <Select url="./pages/Form/data.json" placeholder="请选择" valueField="type" textField="name" disabled={true}></Select>

                    <pre className="brush: js" ref="code3">
                        {
`
<Select url="./pages/Form/data.json" placeholder="请选择" valueField="type" textField="name" disabled={true}></Select>
`
                        }
                    </pre>


                </Tile>

                <Tile header={"级联"}>
                    <Select data={provinces} placeholder="省份" ref="province" hasEmptyOption="true"></Select>
                    <span className="mr-10"></span>
                    <Select ref="city" placeholder="城市"></Select>

                    <pre className="brush: js" ref="code4">
                        {
                            `

<Select data={} placeholder="省份" hasEmptyOption="true"></Select>
<span className="mr-10"></span>
<Select data={} placeholder="城市"></Select>
`
                        }
                    </pre>


                </Tile>
            </div>
        )
    }
}

module.exports = SelectPage;