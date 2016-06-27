define(['module', 'react', 'react-dom', 'classnames', 'FontIcon', "../Tile"], function (module, React, ReactDOM, classnames, FontIcon, Tile) {
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

    var FontIconPage = function (_Component) {
        _inherits(FontIconPage, _Component);

        function FontIconPage() {
            _classCallCheck(this, FontIconPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(FontIconPage).apply(this, arguments));
        }

        _createClass(FontIconPage, [{
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
                            '<FontIcon\n    icon={String}          //font awesome中的icon值\n></Button>'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "基本" },
                        React.createElement(
                            FontIcon,
                            { icon: 'flag' },
                            'flag icon'
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code1' },
                            '<FontIcon icon="flag">flag icon</FontIcon>'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "图标大小" },
                        React.createElement(
                            FontIcon,
                            { icon: 'camera-retro' },
                            'normal size'
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            FontIcon,
                            { icon: 'camera-retro', size: 'lg' },
                            'lg size'
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            FontIcon,
                            { icon: 'camera-retro', size: '2x' },
                            '2x size'
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            FontIcon,
                            { icon: 'camera-retro', size: '3x' },
                            '3x size'
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            FontIcon,
                            { icon: 'camera-retro', size: '4x' },
                            '4x size'
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            FontIcon,
                            { icon: 'camera-retro', size: '5x' },
                            '5x size'
                        ),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code2' },
                            '<FontIcon icon="camera-retro">normal size</FontIcon>\n<FontIcon icon="camera-retro" size="lg">lg size</FontIcon>\n<FontIcon icon="camera-retro" size="2x">2x size</FontIcon>\n<FontIcon icon="camera-retro" size="3x">3x size</FontIcon>\n<FontIcon icon="camera-retro" size="4x">4x size</FontIcon>\n<FontIcon icon="camera-retro" size="5x">5x size</FontIcon>'
                        )
                    ),
                    React.createElement(
                        Tile,
                        { header: "图标大小" },
                        React.createElement(FontIcon, { icon: 'spinner', spin: true, size: '3x', className: 'fa-fw' }),
                        React.createElement(FontIcon, { icon: 'cog', spin: true, size: '3x', className: 'fa-fw' }),
                        React.createElement(FontIcon, { icon: 'spinner', spin: true, pulse: true, size: '3x', className: 'fa-fw' }),
                        React.createElement(
                            'pre',
                            { className: 'brush: js', ref: 'code3' },
                            '<FontIcon icon="spinner" spin={true} size="3x" className="fa-fw"></FontIcon>\n<FontIcon icon="cog" spin={true} size="3x" className="fa-fw"></FontIcon>\n<FontIcon icon="spinner" spin={true} pulse={true} size="3x" className="fa-fw"></FontIcon>'
                        )
                    )
                );
            }
        }]);

        return FontIconPage;
    }(Component);

    module.exports = FontIconPage;
});
