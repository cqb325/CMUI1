/**
 * @author cqb 2016-04-17.
 * @module Button
 */


function tryParseInt(p) {
    if (!p) {
        return 0;
    }
    const pi = parseInt(p);
    return pi || 0;
}

/**
 * Dom 类
 * @class Dom
 */
class Dom {
    constructor() {

    }

    /**
     * 选取
     * @method query
     * @param selector {String} css选择器
     * @param el {Element} 可选 页面元素
     * @returns {Element}
     */
    static query(selector, el){
        if(arguments.length === 1 && typeof arguments[0] == 'string'){
            if(document.querySelector){
                return document.querySelector(arguments[0]);
            }
        }else if(arguments.length === 2){
            if(el.querySelector){
                return el.querySelector(selector);
            }
        }
    }

    /**
     * 选取所有
     * @method queryAll
     * @param el {Element} 可选 页面元素
     * @param selector {String} css选择器
     * @returns {NodeList}
     */
    static queryAll(selector, el) {
        if(arguments.length === 1 && typeof arguments[0] == 'string'){
            if(document.querySelectorAll){
                return document.querySelectorAll(arguments[0]);
            }
        }else if(arguments.length === 2){
            if(el.querySelectorAll){
                return el.querySelectorAll(selector);
            }
        }
    }

    /**
     * 根据id获取元素
     * @method get
     * @param id
     * @returns {Element}
     */
    static get(id) {
        return document.getElementById(id);
    }

    /**
     * 获取第一个元素
     * @method first
     * @param selector
     * @param el
     * @returns {*}
     */
    static first(el, selector) {
        if(arguments.length === 1){
            return el.children[0];
        }
        if(arguments.length === 2){
            return Dom.query(selector+':first-child', el);
        }
    }

    /**
     * 获取第index个元素
     * @method eq
     * @param el
     * @param index
     * @returns {Element}
     */
    static eq(el, index) {
        return Dom.query(':nth-child('+ index +')', el);
    }

    /**
     * 根据选择器取非值
     * @method not
     * @param el
     * @param selector
     * @returns {*}
     */
    static not(el, selector) {
        return Dom.queryAll(':not('+ selector +')', el);
    }

    /**
     * 前一个元素
     * @method prev
     * @param el
     * @returns {*|Node}
     */
    static prev(el){
        var node = el.previousSibling;
        if(node.nodeType){
            if(node.nodeType === 1){
                return node;
            }
            if(node.nodeType === 3) {
                node = node.previousSibling;
                return node;
            }
        }
    }

    /**
     * 下一个元素
     * @method next
     * @param el
     * @returns {*|Node}
     */
    static next(el) {
        var node = el.nextSibling;
        if(node.nodeType){
            if(node.nodeType === 1){
                return node;
            }
            if(node.nodeType === 3) {
                node = node.nextSibling;
                return node;
            }
        }
    }

    /**
     * 最后一个元素
     * @method last
     * @param selector
     * @param el
     * @returns {*}
     */
    static last(el, selector) {
        if(arguments.length === 1){
            var children = el.children;
            return children[children.length - 1];
        }
        if(arguments.length === 2){
            return Dom.query(selector+':last-child', el);
        }
    }

    /**
     * 父节点
     * @method closest
     * @param el
     * @param selector
     */
    static closest(el, selector){
        var doms, targetDom;
        var isSame = function(doms, el){
            var i = 0, len = doms.length;
            for(i; i<len; i++){
                if(doms[i].isEqualNode){
                    if(doms[i].isEqualNode(el)) {
                        return doms[i];
                    }
                }else{
                    if(doms[i] == el) {
                        return doms[i];
                    }
                }
            }
            return false;
        };
        var traversal = function(el, selector){
            doms = Dom.queryAll(selector, el.parentNode);
            targetDom = isSame(doms, el);
            while(!targetDom){
                el = el.parentNode;
                if(el != null && el.nodeType == el.DOCUMENT_NODE){
                    return false;
                }
                traversal(el, selector);
            }

            return targetDom;
        };

        return traversal(el, selector);
    }

    /**
     * 删除节点
     * @method remove
     * @param el
     */
    static remove(el) {
        if(el && el.parentNode){
            el.parentNode.removeChild(el);
        }
    }

    /**
     * 添加获取属性
     * @method attr
     * @param el
     * @param name
     * @param value
     * @returns {*}
     */
    static attr(el, name, value){
        if(arguments.length == 2){
            return el.getAttribute(name);
        }else if(arguments.length == 3){
            el.setAttribute(name, value);
            return el;
        }
    }

    /**
     * 删除属性
     * @method removeAttr
     * @param el
     * @param name
     */
    static removeAttr(el, name) {
        if(arguments.length === 2){
            el.removeAttribute(name);
        }
    }

    /**
     * 判断是否存在某个class
     * @method hasClass
     * @param el
     * @param clazz
     * @returns {boolean}
     */
    static hasClass(el, clazz) {
        if(el.className.indexOf(clazz) > -1){
            return true;
        }else{
            return false;
        }
    }

    /**
     * 添加class
     * @method addClass
     * @param el
     * @param clazz
     * @returns {*}
     */
    static addClass(el, clazz) {
        if('classList' in el){
            el.classList.add(clazz);
        }else{
            var preCls = el.className;
            el.className = preCls +' '+ clazz;
        }
        return el;
    }

    /**
     * 删除class
     * @method removeClass
     * @param el
     * @param clazz
     * @returns {*}
     */
    static removeClass(el, clazz) {
        if('classList' in el){
            el.classList.remove(clazz);
        }else{
            var preCls = el.className;
            el.className = preCls.replace(clazz, '');
        }
        return el;
    }

    /**
     * 判断两个元素是否是父子节点关系
     * @method isDescendant
     * @param parent {Element} 父节点
     * @param child {Element} 子节点
     * @returns {boolean} true： 是父子关系， false：不是父子关系
     */
    static isDescendant (parent, child) {
        let node = child.parentNode;

        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }

        return false;
    }

    /**
     * 获取文字区域的位置
     * @method offset
     * @param el {Element} 界面元素
     * @returns {{top: number, left: number}}
     */
    static offset(el) {
        const rect = el.getBoundingClientRect();
        return {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
        };
    }

    /**
     * 获取文字区域范围
     * @method bounding
     * @param el {Element} 界面元素
     * @returns {ClientRect} 文字区域范围
     */
    static bounding(el) {
        return rect = el.getBoundingClientRect();
    }

    /**
     * 计算高度
     * @param el
     * @returns {number}
     */
    static forceRedraw (el) {
        let originalDisplay = el.style.display;

        el.style.display = 'none';
        let oh = el.offsetHeight;
        el.style.display = originalDisplay;
        return oh;
    }

    /**
     * 取消过度效果
     * @method withoutTransition
     * @param el
     * @param callback
     */
    static withoutTransition (el, callback) {
        //turn off transition
        el.style.transition = 'none';

        callback();

        //force a redraw
        Dom.forceRedraw(el);

        //put the transition back
        el.style.transition = '';
    }

    /**
     * 获取元素的高度
     * @method getOuterHeight
     * @param el
     * @returns {*}
     */
    static getOuterHeight (el) {
        let height = el.clientHeight
            + tryParseInt(el.style.borderTopWidth)
            + tryParseInt(el.style.borderBottomWidth)
            + tryParseInt(el.style.marginTop)
            + tryParseInt(el.style.marginBottom);
        return height;
    }

    /**
     * 监测是否超出页面底部
     * method overView
     * @param el
     * @param pad
     * @returns {boolean}
     */
    static overView (el, pad = 0) {
        let height = window.innerHeight || document.documentElement.clientHeight;
        let bottom = el.getBoundingClientRect().bottom + pad;
        return bottom > height;
    }

    /**
     * 获取元素的最终样式
     * @param el {DOM} 元素对象
     * @param style {String} 样式属性
     * @param fake {String} 伪类
     * @returns {*}
     */
    static css (el, style, fake){
        if(typeof el === 'string'){
            el = Dom.query(el);
        }
        if(window.getComputedStyle){
            return window.getComputedStyle(el, fake)[style];
        }
        if(el.currentStyle){
            return el.currentStyle[style];
        }
        return null;
    }
}

module.exports = Dom;