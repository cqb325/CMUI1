const React = require("react");
const ReactDOM = require("react-dom");

var Animation = React.createClass({
    getInitialState: function () {
        let time = this.props.time != undefined ? this.props.time : 500;
        time = time / 10;

        this.time = time;
        this.startTime = 1;

        let from = this.props.from || {};
        let to = this.props.to || {};
        let step = {};

        for(let prop in from){
            if(to[prop]){
                let offset = parseFloat(to[prop]) - parseFloat(from[prop]);
                step[prop] = offset / time;
            }
        }

        this.step = step;

        return {
            style: from
        };
    },

    componentWillUpdate: function () {
        this.resolveAnimationFrame();
    },

    componentDidMount(){
        this.resolveAnimationFrame();
    },

    render: function () {
        let children = React.Children.map(this.props.children, (child)=>{
            let props = Object.assign({ref: "widget"}, child.props);
            return React.cloneElement(child, props);
        });

        return children[0];
    },

    resolveAnimationFrame: function () {
        let from = this.state.style;
        let to = this.props.to || {};

        if(this.startTime < this.time) {
            for(let prop in from){
                if(to[prop]){
                    let val = parseFloat(from[prop]) + this.step[prop];
                    from[prop] = from[prop].replace(/^(-?\d+)(\.\d+)?/, val);

                    let ele = ReactDOM.findDOMNode(this.refs.widget);
                    ele.style[prop] = from[prop];
                }
            }

            setTimeout(()=> {
                this.setState({style: from});
            }, 10);

            this.startTime++;
        }
    }
});

module.exports = Animation;