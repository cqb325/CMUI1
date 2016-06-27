define(['module'], function (module) {
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

    /**
     * @author cqb 2016-04-17.
     * @module Button
     */

    function tryParseInt(p) {
        if (!p) {
            return 0;
        }
        var pi = parseInt(p);
        return pi || 0;
    }

    /**
     * Dom 类
     * @class Dom
     */

    var Dom = function () {
        function Dom() {
            _classCallCheck(this, Dom);
        }

        /**
         * 选取
         * @method query
         * @param selector {String} css选择器
         * @param el {Element} 可选 页面元素
         * @returns {Element}
         */


        _createClass(Dom, null, [{
            key: 'query',
            value: function query(selector, el) {
                if (arguments.length === 1 && typeof arguments[0] == 'string') {
                    if (document.querySelector) {
                        return document.querySelector(arguments[0]);
                    }
                } else if (arguments.length === 2) {
                    if (el.querySelector) {
                        return el.querySelector(selector);
                    }
                }
            }
        }, {
            key: 'queryAll',
            value: function queryAll(selector, el) {
                if (arguments.length === 1 && typeof arguments[0] == 'string') {
                    if (document.querySelectorAll) {
                        return document.querySelectorAll(arguments[0]);
                    }
                } else if (arguments.length === 2) {
                    if (el.querySelectorAll) {
                        return el.querySelectorAll(selector);
                    }
                }
            }
        }, {
            key: 'get',
            value: function get(id) {
                return document.getElementById(id);
            }
        }, {
            key: 'first',
            value: function first(el, selector) {
                if (arguments.length === 1) {
                    return el.children[0];
                }
                if (arguments.length === 2) {
                    return Dom.query(selector + ':first-child', el);
                }
            }
        }, {
            key: 'eq',
            value: function eq(el, index) {
                return Dom.query(':nth-child(' + index + ')', el);
            }
        }, {
            key: 'not',
            value: function not(el, selector) {
                return Dom.queryAll(':not(' + selector + ')', el);
            }
        }, {
            key: 'prev',
            value: function prev(el) {
                var node = el.previousSibling;
                if (node.nodeType) {
                    if (node.nodeType === 1) {
                        return node;
                    }
                    if (node.nodeType === 3) {
                        node = node.previousSibling;
                        return node;
                    }
                }
            }
        }, {
            key: 'next',
            value: function next(el) {
                var node = el.nextSibling;
                if (node.nodeType) {
                    if (node.nodeType === 1) {
                        return node;
                    }
                    if (node.nodeType === 3) {
                        node = node.nextSibling;
                        return node;
                    }
                }
            }
        }, {
            key: 'last',
            value: function last(el, selector) {
                if (arguments.length === 1) {
                    var children = el.children;
                    return children[children.length - 1];
                }
                if (arguments.length === 2) {
                    return Dom.query(selector + ':last-child', el);
                }
            }
        }, {
            key: 'closest',
            value: function closest(el, selector) {
                var doms, targetDom;
                var isSame = function isSame(doms, el) {
                    var i = 0,
                        len = doms.length;
                    for (i; i < len; i++) {
                        if (doms[i].isEqualNode) {
                            if (doms[i].isEqualNode(el)) {
                                return doms[i];
                            }
                        } else {
                            if (doms[i] == el) {
                                return doms[i];
                            }
                        }
                    }
                    return false;
                };
                var traversal = function traversal(el, selector) {
                    doms = Dom.queryAll(selector, el.parentNode);
                    targetDom = isSame(doms, el);
                    while (!targetDom) {
                        el = el.parentNode;
                        if (el != null && el.nodeType == el.DOCUMENT_NODE) {
                            return false;
                        }
                        traversal(el, selector);
                    }

                    return targetDom;
                };

                return traversal(el, selector);
            }
        }, {
            key: 'remove',
            value: function remove(el) {
                if (el && el.parentNode) {
                    el.parentNode.removeChild(el);
                }
            }
        }, {
            key: 'attr',
            value: function attr(el, name, value) {
                if (arguments.length == 2) {
                    return el.getAttribute(name);
                } else if (arguments.length == 3) {
                    el.setAttribute(name, value);
                    return el;
                }
            }
        }, {
            key: 'removeAttr',
            value: function removeAttr(el, name) {
                if (arguments.length === 2) {
                    el.removeAttribute(name);
                }
            }
        }, {
            key: 'hasClass',
            value: function hasClass(el, clazz) {
                if (el.className.indexOf(clazz) > -1) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            key: 'addClass',
            value: function addClass(el, clazz) {
                if ('classList' in el) {
                    el.classList.add(clazz);
                } else {
                    var preCls = el.className;
                    el.className = preCls + ' ' + clazz;
                }
                return el;
            }
        }, {
            key: 'removeClass',
            value: function removeClass(el, clazz) {
                if ('classList' in el) {
                    el.classList.remove(clazz);
                } else {
                    var preCls = el.className;
                    el.className = preCls.replace(clazz, '');
                }
                return el;
            }
        }, {
            key: 'isDescendant',
            value: function isDescendant(parent, child) {
                var node = child.parentNode;

                while (node !== null) {
                    if (node === parent) {
                        return true;
                    }
                    node = node.parentNode;
                }

                return false;
            }
        }, {
            key: 'offset',
            value: function offset(el) {
                var rect = el.getBoundingClientRect();
                return {
                    top: rect.top + document.body.scrollTop,
                    left: rect.left + document.body.scrollLeft
                };
            }
        }, {
            key: 'bounding',
            value: function bounding(el) {
                return rect = el.getBoundingClientRect();
            }
        }, {
            key: 'forceRedraw',
            value: function forceRedraw(el) {
                var originalDisplay = el.style.display;

                el.style.display = 'none';
                var oh = el.offsetHeight;
                el.style.display = originalDisplay;
                return oh;
            }
        }, {
            key: 'withoutTransition',
            value: function withoutTransition(el, callback) {
                //turn off transition
                el.style.transition = 'none';

                callback();

                //force a redraw
                Dom.forceRedraw(el);

                //put the transition back
                el.style.transition = '';
            }
        }, {
            key: 'getOuterHeight',
            value: function getOuterHeight(el) {
                var height = el.clientHeight + tryParseInt(el.style.borderTopWidth) + tryParseInt(el.style.borderBottomWidth) + tryParseInt(el.style.marginTop) + tryParseInt(el.style.marginBottom);
                return height;
            }
        }, {
            key: 'overView',
            value: function overView(el) {
                var pad = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

                var height = window.innerHeight || document.documentElement.clientHeight;
                var bottom = el.getBoundingClientRect().bottom + pad;
                return bottom > height;
            }
        }, {
            key: 'css',
            value: function css(el, style, fake) {
                if (typeof el === 'string') {
                    el = Dom.query(el);
                }
                if (window.getComputedStyle) {
                    return window.getComputedStyle(el, fake)[style];
                }
                if (el.currentStyle) {
                    return el.currentStyle[style];
                }
                return null;
            }
        }]);

        return Dom;
    }();

    module.exports = Dom;
});
