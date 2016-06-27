const React = require('react');
const ReactDOM = require('react-dom');
const Component = React.Component;

/**
 *
 */
class BaseDemo extends Component {
    componentDidMount() {
        for (let i in this.refs) {
            let ref = this.refs[i];
            let block = ReactDOM.findDOMNode(ref);
            SyntaxHighlighter.highlight({}, block);
        }
    }

    content(){
        return "";
    }

    render(){
        return this.content();
    }
}

module.exports = BaseDemo;