define(['module', 'react', 'react-dom', 'Steps', 'Button', "./Tile"], function (module, React, ReactDOM, Steps, Button, Tile) {
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

    var Step = Steps.Step;

    var PaginationPage = function (_Component) {
        _inherits(PaginationPage, _Component);

        function PaginationPage() {
            _classCallCheck(this, PaginationPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(PaginationPage).apply(this, arguments));
        }

        _createClass(PaginationPage, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                for (var i in this.refs) {
                    var ref = this.refs[i];
                    var block = ReactDOM.findDOMNode(ref);
                    SyntaxHighlighter.highlight({}, block);
                }
            }
        }, {
            key: 'next',
            value: function next() {
                this.refs.steps1.next();
                this.refs.steps2.next();
                this.refs.steps3.next();
                this.refs.steps4.next();
            }
        }, {
            key: 'prev',
            value: function prev() {
                this.refs.steps1.prev();
                this.refs.steps2.prev();
                this.refs.steps3.prev();
                this.refs.steps4.prev();
            }
        }, {
            key: 'render',
            value: function render() {
                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(Tile, { header: "使用方式" }),
                    React.createElement(
                        Tile,
                        { header: "基本使用" },
                        React.createElement(
                            Steps,
                            { ref: 'steps1', current: 1 },
                            React.createElement(Step, { title: 'Finished', description: 'This is a description.' }),
                            React.createElement(Step, { title: 'In Progress', description: 'This is a description.' }),
                            React.createElement(Step, { title: 'Waiting', description: 'This is a description.' })
                        ),
                        React.createElement(
                            Steps,
                            { ref: 'steps2', current: 1 },
                            React.createElement(Step, { title: 'Finished', description: 'This is a description.', icon: 'hand-pointer-o' }),
                            React.createElement(Step, { title: 'In Progress', description: 'This is a description.', icon: 'hand-peace-o' }),
                            React.createElement(Step, { title: 'Waiting', description: 'This is a description.', icon: 'hand-spock-o' })
                        ),
                        React.createElement(
                            Steps,
                            { ref: 'steps3', current: 1, size: 'small' },
                            React.createElement(Step, { title: 'Finished' }),
                            React.createElement(Step, { title: 'In Progress' }),
                            React.createElement(Step, { title: 'Waiting' })
                        ),
                        React.createElement(
                            Steps,
                            { ref: 'steps4', current: 0, layout: 'vertical' },
                            React.createElement(Step, { title: 'Finished', description: 'This is a description.' }),
                            React.createElement(Step, { title: 'In Progress', description: 'This is a description.' }),
                            React.createElement(Step, { title: 'Waiting', description: 'This is a description.' })
                        ),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                Button,
                                { onClick: this.next.bind(this), theme: 'primary' },
                                'Next'
                            ),
                            React.createElement(
                                Button,
                                { onClick: this.prev.bind(this), theme: 'primary' },
                                'Prev'
                            )
                        )
                    )
                );
            }
        }]);

        return PaginationPage;
    }(Component);

    module.exports = PaginationPage;
});
