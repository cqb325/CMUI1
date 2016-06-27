const React = require('react');
const ReactDOM = require('react-dom');
const Events = require('utils/Events');
const Dom = require('utils/Dom');
const isDescendant = Dom.isDescendant;

module.exports = function clickAway(Component) {
    Component.prototype.getClickAwayEvent = function () {
        let fn = this.state.checkClickAwayMethod;

        if (!fn) {
            fn = (e) => {
                e = e || window.event;
                let el = ReactDOM.findDOMNode(this);

                // Check if the target is inside the current component
                if (e.target !== el && !isDescendant(el, e.target || e.srcElement)) {
                    this.componentClickAway();
                }
            };
            this.setState({ checkClickAwayMethod: fn });
        }

        return fn;
    };

    Component.prototype.bindClickAway = function () {
        let fn = this.getClickAwayEvent();
        Events.on(document, 'click', fn);
        Events.on(document, 'touchstart', fn);
    };

    Component.prototype.unbindClickAway = function () {
        let fn = this.getClickAwayEvent();
        Events.off(document, 'click', fn);
        Events.off(document, 'touchstart', fn);
    };

    return Component;
};