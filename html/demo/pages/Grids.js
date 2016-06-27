define(['module', 'react', 'react-dom', 'classnames', 'utils/grids', "./Tile"], function (module, React, ReactDOM, classnames, grids, Tile) {
    'use strict';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Component = React.Component;

    var Col = function (_Component) {
        _inherits(Col, _Component);

        function Col() {
            _classCallCheck(this, Col);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Col).apply(this, arguments));
        }

        _createClass(Col, [{
            key: 'render',
            value: function render() {
                var className = classnames("test-grid", "mb-10", grids.getGrid(this.props.grid));
                return React.createElement(
                    'div',
                    { className: className },
                    this.props.children
                );
            }
        }]);

        return Col;
    }(Component);

    var gridsPage = function (_Component2) {
        _inherits(gridsPage, _Component2);

        function gridsPage() {
            _classCallCheck(this, gridsPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(gridsPage).apply(this, arguments));
        }

        _createClass(gridsPage, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                for (var i in this.refs) {
                    var ref = this.refs[i];
                    var block = ReactDOM.findDOMNode(ref);
                    SyntaxHighlighter.highlight({}, block);
                }
            }
        }, {
            key: 'render',
            value: function render() {
                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        Tile,
                        { header: "使用方式" },
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code' },
                            '<Button\n    theme={String}          //default、primary、success、info、warning、danger\n    disabled={boolean}      //禁用状态\n></Button>'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "样式" },
                        React.createElement(Col, { grid: { width: 1 } }),
                        React.createElement(
                            Col,
                            { grid: { width: .5 } },
                            '.5'
                        ),
                        React.createElement(
                            Col,
                            { grid: { width: .5 } },
                            '.5'
                        ),
                        React.createElement(
                            Col,
                            { grid: { width: .5 } },
                            '.5'
                        ),
                        React.createElement(
                            Col,
                            { grid: { width: .2 } },
                            '.2'
                        ),
                        React.createElement(
                            Col,
                            { grid: { width: .3 } },
                            '.3'
                        ),
                        React.createElement(
                            Col,
                            { grid: { width: .7 } },
                            '.7'
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            'class Col extends Component{\n    render(){\n        let className = classnames("test-grid", "mb-10", grids.getGrid(this.props.grid));\n        return (\n            <div className={className}>\n                {this.props.children}\n            </div>\n        );\n    }\n}\n\n<Col grid={{width: 1}}></Col>\n<Col grid={{width: .5}}>.5</Col>\n<Col grid={{width: .5}}>.5</Col>\n<Col grid={{width: .5}}>.5</Col>\n<Col grid={{width: .2}}>.2</Col>\n<Col grid={{width: .3}}>.3</Col>\n<Col grid={{width: .7}}>.7</Col>'
                        )
                    )
                );
            }
        }]);

        return gridsPage;
    }(Component);

    module.exports = gridsPage;
});
