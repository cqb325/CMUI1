define(['module', 'react', 'react-dom', 'Tooltip', 'Button', "../Tile", "mixins/BindTooltip"], function (module, React, ReactDOM, Tooltip, Button, Tile, BindTooltip) {
    'use strict';

    var Page = React.createClass({
        displayName: 'Page',


        mixins: [BindTooltip],

        componentDidMount: function componentDidMount() {
            for (var i in this.refs) {
                var ref = this.refs[i];
                var block = ReactDOM.findDOMNode(ref);
                SyntaxHighlighter.highlight({}, block);
            }

            this.refs.tooltip.bind(this.refs.link);
            this.refs.tooltip2.bind(this.refs.link);
            this.refs.tooltip3.bind(this.refs.link);

            this.refs.tooltip6.bind(this.refs.target2);
        },
        show: function show() {
            this.refs.tooltip6.show();
        },
        hide: function hide() {
            this.refs.tooltip6.hide();
        },
        render: function render() {

            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    Tile,
                    { header: "使用方式" },
                    React.createElement(
                        'pre',
                        { className: 'brush: js', ref: 'code' },
                        '\n\n'
                    )
                ),
                React.createElement(
                    Tile,
                    { header: "基本使用方式" },
                    React.createElement(Tooltip, { theme: 'black', align: 'top', ref: 'tooltip', title: 'Title', content: 'asdasdasdasdasdasdasdasdasdasda' }),
                    React.createElement(Tooltip, { theme: 'default', align: 'bottom', ref: 'tooltip2', title: 'Title', offset: { x: 80, y: 0 }, content: 'asdasdasdasdasdasdasdasdasdasda' }),
                    React.createElement(Tooltip, { theme: 'black', align: 'right', ref: 'tooltip3', title: 'Title3', content: 'asdasdasdasdasdasdasdasdasdasda' }),
                    React.createElement(Tooltip, { theme: 'black', trigger: 'toggle', align: 'right', ref: 'tooltip4', 'data-toggle': 'tooltip', 'data-target': 'target', content: 'asdasdasdasdasdasdasdasdasdasda' }),
                    React.createElement(Tooltip, { theme: 'danger', align: 'top', ref: 'tooltip5', 'data-toggle': 'tooltip', 'data-target': 'target', title: 'Title', content: 'asdasdasdasdasdasdasdasdasdasda' }),
                    React.createElement(
                        Tooltip,
                        { theme: 'danger', align: 'bottom', ref: 'tooltip7', 'data-toggle': 'tooltip', 'data-target': 'target', title: '子元素内容' },
                        React.createElement(
                            'span',
                            null,
                            '子元素内容'
                        )
                    ),
                    React.createElement(
                        'a',
                        { href: '#', ref: 'link' },
                        '链接'
                    ),
                    React.createElement(
                        'div',
                        { ref: 'target', style: { width: "100px", height: "100px", "marginTop": "100px", "background": "#ff00ff", "color": "#fff" } },
                        '触发对象'
                    ),
                    React.createElement(Tooltip, { theme: 'danger', trigger: 'none', align: 'right', ref: 'tooltip6', content: 'asdasdasdasdasdasdasdasdasdasda' }),
                    React.createElement(
                        'div',
                        { ref: 'target2', style: { width: "100px", height: "100px", "marginTop": "100px", "marginLeft": "400px", "background": "#ff0000", "color": "#fff" } },
                        '提示对象'
                    ),
                    React.createElement(
                        Button,
                        { theme: 'success', onClick: this.show },
                        '显示'
                    ),
                    React.createElement(
                        Button,
                        { onClick: this.hide, className: 'ml-10', theme: 'primary' },
                        '隐藏'
                    ),
                    React.createElement(
                        'pre',
                        { className: 'brush: js', ref: 'code1' },
                        '\n\n'
                    )
                )
            );
        }
    });

    module.exports = Page;
});
