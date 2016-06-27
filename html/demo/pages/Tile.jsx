
const React = require('react');
const Component = React.Component;

class Tile extends Component{
    render(){
        return (
            <div className="tile">
                <div className="tile-header">{this.props.header}</div>
                <div className="tile-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

module.exports = Tile;