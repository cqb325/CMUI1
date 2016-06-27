define(['module', 'react', './BaseDemo', 'classnames', 'Progress', "./Tile"], function (module, React, BaseDemo, classnames, Progress, Tile) {
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

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

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

    var ProgressPage = function (_BaseDemo) {
        _inherits(ProgressPage, _BaseDemo);

        function ProgressPage() {
            _classCallCheck(this, ProgressPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(ProgressPage).apply(this, arguments));
        }

        _createClass(ProgressPage, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                _get(Object.getPrototypeOf(ProgressPage.prototype), 'componentDidMount', this).call(this);

                var progress = this.refs.progress;
                var progress1 = this.refs.progress1;

                var timer = null;
                var start = 0;
                var animate = function animate() {
                    timer = window.setTimeout(function () {
                        start = start + 1;
                        progress.update(start);
                        progress1.update(start);
                        if (start < 100) {
                            animate();
                        }
                    }, 100);
                };

                animate();
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
                            '\n<Progress\n    value={Float}                   //当前的值\n    min={Float}                     //最小值\n    max={Float}                     //最大值\n    showPercent={Boolean}           //显示百分比\n    theme={String}                  //主题 default/primary/success/info/warning/danger\n    striped={Boolean}               //显示条纹\n    active={Boolean}                //显示动画\n></Progress>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "基本使用方式" },
                        React.createElement(Progress, { value: '0', ref: 'progress', grid: 3 / 4 }),
                        'text',
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement(Progress, { value: '0', ref: 'progress1', showPercent: true }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '\n<Progress value="0" ref="progress" grid={3/4}></Progress>text<br/><br/>\n<Progress value="0" ref="progress1" showPercent={true}></Progress><br/>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "样式" },
                        React.createElement(Progress, { value: '30', showPercent: true }),
                        React.createElement('br', null),
                        React.createElement(Progress, { value: '40', showPercent: true, theme: 'primary' }),
                        React.createElement('br', null),
                        React.createElement(Progress, { value: '50', showPercent: true, theme: 'success' }),
                        React.createElement('br', null),
                        React.createElement(Progress, { value: '60', showPercent: true, theme: 'info' }),
                        React.createElement('br', null),
                        React.createElement(Progress, { value: '70', showPercent: true, theme: 'warning' }),
                        React.createElement('br', null),
                        React.createElement(Progress, { value: '80', showPercent: true, theme: 'danger' }),
                        React.createElement('br', null),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code2' },
                            '\n<Progress value="30" showPercent={true}></Progress><br/>\n<Progress value="40" showPercent={true} theme="primary"></Progress><br/>\n<Progress value="50" showPercent={true} theme="success"></Progress><br/>\n<Progress value="60" showPercent={true} theme="info"></Progress><br/>\n<Progress value="70" showPercent={true} theme="warning"></Progress><br/>\n<Progress value="80" showPercent={true} theme="danger"></Progress><br/>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "条纹" },
                        React.createElement(Progress, { value: '40', showPercent: true, theme: 'primary', striped: true }),
                        React.createElement('br', null),
                        React.createElement(Progress, { value: '50', showPercent: true, theme: 'success', striped: true }),
                        React.createElement('br', null),
                        React.createElement(Progress, { value: '60', showPercent: true, theme: 'info', striped: true }),
                        React.createElement('br', null),
                        React.createElement(Progress, { value: '70', showPercent: true, theme: 'warning', striped: true }),
                        React.createElement('br', null),
                        React.createElement(Progress, { value: '80', showPercent: true, theme: 'danger', striped: true }),
                        React.createElement('br', null),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code3' },
                            '\n<Progress value="40" showPercent={true} theme="primary" striped={true}></Progress><br/>\n<Progress value="50" showPercent={true} theme="success" striped={true}></Progress><br/>\n<Progress value="60" showPercent={true} theme="info" striped={true}></Progress><br/>\n<Progress value="70" showPercent={true} theme="warning" striped={true}></Progress><br/>\n<Progress value="80" showPercent={true} theme="danger" striped={true}></Progress><br/>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "动画" },
                        React.createElement(Progress, { value: '40', showPercent: true, theme: 'primary', striped: true, active: true }),
                        React.createElement('br', null),
                        React.createElement(Progress, { value: '50', showPercent: true, theme: 'success', striped: true, active: true }),
                        React.createElement('br', null),
                        React.createElement(Progress, { value: '60', showPercent: true, theme: 'info', striped: true, active: true }),
                        React.createElement('br', null),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code4' },
                            '\n<Progress value="40" showPercent={true} theme="primary" striped={true} active={true}></Progress><br/>\n<Progress value="50" showPercent={true} theme="success" striped={true} active={true}></Progress><br/>\n<Progress value="60" showPercent={true} theme="info" striped={true} active={true}></Progress><br/>\n'
                        )
                    )
                );
            }
        }]);

        return ProgressPage;
    }(BaseDemo);

    module.exports = ProgressPage;
});
