define(['module', "react", 'react-dom', 'utils/Dom', "classnames", "core/BaseComponent", "FontIcon"], function (module, React, ReactDOM, Dom, classnames, BaseComponent, FontIcon) {
    'use strict';

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

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

    var Steps = function (_BaseComponent) {
        _inherits(Steps, _BaseComponent);

        function Steps(props) {
            _classCallCheck(this, Steps);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Steps).call(this, props));

            _this.addState({
                current: props.current || 0
            });

            _this.steps = [];
            return _this;
        }

        _createClass(Steps, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.current !== this.state.current) {
                    this.setState({
                        current: nextProps.current
                    });
                }
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                var w = this.steps.length == 1 ? "100%" : 1 / (this.steps.length - 1) * 100 + "%";
                var lastWidth = this.steps.length > 1 ? this.steps[this.steps.length - 1].getWidth() : 0;

                this.steps.forEach(function (step, index) {
                    if (index < _this2.steps.length - 1) {
                        step.updateStyle({
                            width: w,
                            marginRight: -lastWidth / 2 + "px"
                        });
                    }
                });
            }
        }, {
            key: 'bindStep',
            value: function bindStep(step) {
                this.steps.push(step);
            }
        }, {
            key: 'next',
            value: function next() {
                if (this.state.current == this.steps.length - 1) {
                    if (this.props.onFinished) {
                        this.props.onFinished();
                    }
                    return;
                }
                if (this.state.current < this.steps.length - 1) {
                    this.setState({
                        current: this.state.current + 1
                    });

                    if (this.props.onChange) {
                        this.props.onChange(this.state.current + 1);
                    }
                }
            }
        }, {
            key: 'prev',
            value: function prev() {
                if (this.state.current == 0) {
                    return;
                }
                if (this.state.current > 0) {
                    this.setState({
                        current: this.state.current - 1
                    });

                    if (this.props.onChange) {
                        this.props.onChange(this.state.current - 1);
                    }
                }
            }
        }, {
            key: 'setActive',
            value: function setActive(current) {
                if (current > 0 && current < this.steps.length - 1) {
                    if (current != this.state.current) {
                        this.setState({
                            current: current
                        });

                        if (this.props.onChange) {
                            this.props.onChange(current);
                        }
                    }
                }
            }
        }, {
            key: 'renderSteps',
            value: function renderSteps() {
                var _this3 = this;

                var index = 1;
                return React.Children.map(this.props.children, function (child) {
                    var componentName = "";
                    if (child.type) {
                        if (child.type.name) {
                            componentName = child.type.name;
                        } else {
                            var matches = child.type.toString().match(/function\s*([^(]*)\(/);
                            if (matches) {
                                componentName = matches[1];
                            }
                        }
                    }
                    if (componentName === 'Step') {
                        var props = _extends({
                            index: index,
                            current: _this3.state.current,
                            "data-bindStep": _this3.bindStep.bind(_this3)
                        }, child.props);
                        index++;

                        return React.cloneElement(child, props);
                    } else {
                        return child;
                    }
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;

                className = classnames("cm-steps", className, {
                    "cm-steps-small": this.props.size == "small",
                    "cm-steps-vertical": this.props.layout == "vertical"
                });

                var steps = this.renderSteps();
                return React.createElement(
                    'div',
                    { className: className, style: style },
                    steps
                );
            }
        }]);

        return Steps;
    }(BaseComponent);

    var Step = function (_BaseComponent2) {
        _inherits(Step, _BaseComponent2);

        function Step(props) {
            _classCallCheck(this, Step);

            var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Step).call(this, props));

            _this4.addState({
                title: props.title,
                description: props.description || "",
                content: props.content,
                style: {},
                index: props.index,
                current: props.current
            });
            return _this4;
        }

        _createClass(Step, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                if (this.props["data-bindStep"]) {
                    this.props["data-bindStep"](this);
                }
            }
        }, {
            key: 'updateStyle',
            value: function updateStyle(style) {
                var _this5 = this;

                window.setTimeout(function () {
                    _this5.setState({ style: style });
                }, 0);
            }
        }, {
            key: 'getWidth',
            value: function getWidth() {
                var ele = ReactDOM.findDOMNode(this);
                return Math.ceil(Dom.dom(ele).width()) + 4;
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.current !== this.state.current) {
                    this.setState({
                        current: nextProps.current
                    });
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _props2 = this.props;
                var className = _props2.className;
                var style = _props2.style;

                var status = false;
                if (this.state.current + 1 > this.state.index) {
                    status = "finished";
                }
                if (this.state.current + 1 == this.state.index) {
                    status = "process";
                }

                className = classnames("cm-steps-item", {
                    "cm-steps-status-finish": status === "finished",
                    "cm-steps-status-process": status === "process"
                });
                style = _extends(this.state.style, style || {});

                var inner = "";
                if (!this.props.icon) {
                    if (status == "finished") {
                        inner = React.createElement(FontIcon, { icon: "check" });
                    } else {
                        inner = React.createElement(
                            'span',
                            null,
                            this.props.index
                        );
                    }
                } else {
                    inner = React.createElement(FontIcon, { icon: this.props.icon });
                }

                return React.createElement(
                    'div',
                    { className: className, style: style },
                    React.createElement(
                        'div',
                        { className: 'cm-step-tail' },
                        React.createElement('i', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'cm-steps-step' },
                        React.createElement(
                            'div',
                            { className: 'cm-step-head' },
                            React.createElement(
                                'div',
                                { className: 'cm-step-head-inner' },
                                inner
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'cm-step-main' },
                            React.createElement(
                                'div',
                                { className: 'cm-step-title' },
                                this.state.title
                            ),
                            React.createElement(
                                'div',
                                { className: 'cm-step-description' },
                                this.state.description
                            )
                        )
                    )
                );
            }
        }]);

        return Step;
    }(BaseComponent);

    Steps.Step = Step;

    module.exports = Steps;
});
