define(['module', 'react', 'react-dom', 'Accordion', "./Tile"], function (module, React, ReactDOM, Accordion, Tile) {
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

    var AccordionPage = function (_Component) {
        _inherits(AccordionPage, _Component);

        function AccordionPage() {
            _classCallCheck(this, AccordionPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(AccordionPage).apply(this, arguments));
        }

        _createClass(AccordionPage, [{
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
                var data = [{ text: "Proactive Alerting", icon: "square", content: "Nothing is more important than getting timely and actionable data. Same as Crashlytics, we've built a layer of intelligent post-processing to alert you about key events within your app as they happen." }, { text: "Powerful Developer Account", icon: "calendar", content: "<p>With Fabric, you’ll have a single, dedicated developer account with complete access to best-in-class mobile SDKs. Simply add a few lines of code and start coding your app right away. We'll even provision your keys for you.</p>" }, { text: "整合的移动SDK", icon: "th", content: '<p>近几年来，移动SDK已呈现出爆炸式增长——每个SDK都致力于解决某个具体的问题。虽然这为开发者提供了更多的解决方案和选择，来应对单个挑战，但是新的问题又出现了:安装和管理门类广泛的SDK，可能是一项既繁琐又复杂的工程。</p>' }, { text: "ReactCSSTransitionGroup", icon: "flag", content: "ReactCSSTransitionGroup是基于ReactTransitionGroup的，在React组件进入或者离开DOM的时候，它是一种简单地执行CSS过渡和动画的方式。这个的灵感来自于优秀的ng-animate库。" }, { text: "事件处理与合成事件", icon: "table", content: "React 里只需把事件处理器（event handler）以骆峰命名（camelCased）形式当作组件的 props 传入即可，就像使用普通 HTML 那样。React 内部创建一套合成事件系统来使所有事件在 IE8 和以上浏览器表现一致。也就是说，React 知道如何冒泡和捕获事件，而且你的事件处理器接收到的 events 参数与 W3C 规范 一致，无论你使用哪种浏览器。如果需要在手机或平板等触摸设备上使用 React，需要调用 React.initializeTouchEvents(true); 启用触摸事件处理。" }, { text: "自动绑定和事件代理", icon: "ellipsis-h", content: "Autobinding: 在 JavaScript 里创建回调的时候，为了保证 this 的正确性，一般都需要显式地绑定方法到它的实例上。有了 React，所有方法被自动绑定到了它的组件实例上。React 还缓存这些绑定方法，所以 CPU 和内存都是非常高效。而且还能减少打字！" }];

                var selectMenu = function selectMenu(item) {
                    console.log(item);
                };
                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        Tile,
                        { header: "使用方式" },
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code' },
                            '\n<Accordion\n    data={Object}           //数据源\n    style={Object}          //样式\n    onSelect={Function}     //选中回调\n></Accordion>\n'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "基本使用" },
                        React.createElement(
                            'div',
                            { className: 'mb-30', style: { overflow: "hidden" } },
                            React.createElement(Accordion, { data: data, style: { width: '500px' }, onSelect: selectMenu })
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '\nlet data = [\n    {text: "Proactive Alerting",icon: "square", content: "Nothing is more important than getting timely and actionable data. Same as Crashlytics, we\'ve built a layer of intelligent post-processing to alert you about key events within your app as they happen."},\n    {text: "Powerful Developer Account",icon: "calendar",content: "<p>With Fabric, you’ll have a single, dedicated developer account with complete access to best-in-class mobile SDKs. Simply add a few lines of code and start coding your app right away. We\'ll even provision your keys for you.</p>"},\n    {text: "整合的移动SDK",icon: "th",content: \'<p>近几年来，移动SDK已呈现出爆炸式增长——每个SDK都致力于解决某个具体的问题。虽然这为开发者提供了更多的解决方案和选择，来应对单个挑战，但是新的问题又出现了:安装和管理门类广泛的SDK，可能是一项既繁琐又复杂的工程。</p>\'},\n    {text: "ReactCSSTransitionGroup",icon: "flag", content: "ReactCSSTransitionGroup是基于ReactTransitionGroup的，在React组件进入或者离开DOM的时候，它是一种简单地执行CSS过渡和动画的方式。这个的灵感来自于优秀的ng-animate库。"},\n    {text: "事件处理与合成事件",icon: "table",content: "React 里只需把事件处理器（event handler）以骆峰命名（camelCased）形式当作组件的 props 传入即可，就像使用普通 HTML 那样。React 内部创建一套合成事件系统来使所有事件在 IE8 和以上浏览器表现一致。也就是说，React 知道如何冒泡和捕获事件，而且你的事件处理器接收到的 events 参数与 W3C 规范 一致，无论你使用哪种浏览器。如果需要在手机或平板等触摸设备上使用 React，需要调用 React.initializeTouchEvents(true); 启用触摸事件处理。"},\n    {text: "自动绑定和事件代理",icon: "ellipsis-h",content: "Autobinding: 在 JavaScript 里创建回调的时候，为了保证 this 的正确性，一般都需要显式地绑定方法到它的实例上。有了 React，所有方法被自动绑定到了它的组件实例上。React 还缓存这些绑定方法，所以 CPU 和内存都是非常高效。而且还能减少打字！"}\n];\n\nlet selectMenu = function(item){\n    console.log(item);\n};\n\n<Accordion data={data} style={{width: \'500px\'} } onSelect={selectMenu}></Accordion>\n'
                        )
                    )
                );
            }
        }]);

        return AccordionPage;
    }(Component);

    module.exports = AccordionPage;
});
