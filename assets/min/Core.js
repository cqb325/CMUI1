/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
define(["module"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol?"symbol":typeof a},d=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),e=function(){function a(){b(this,a)}return d(a,null,[{key:"isType",value:function(a,b){return Object.prototype.toString.apply(a)==="[object "+b+"]"}},{key:"isArray",value:function(b){return a.isType(b,"Array")}},{key:"isString",value:function(b){return a.isType(b,"String")}},{key:"isNumber",value:function(b){return a.isType(b,"Number")}},{key:"isObject",value:function(b){return a.isType(b,"Object")}},{key:"isNull",value:function(b){return a.isType(b,"Null")}},{key:"isUndefined",value:function(b){return void 0===b||a.isType(b,"Undefined")}},{key:"isFunction",value:function(b){return a.isType(b,"Function")}},{key:"isDefined",value:function(b){return!a.isUndefined(b)}},{key:"clone",value:function(b){var d=void 0;if("object"==("undefined"==typeof b?"undefined":c(b)))if(null===b)d=null;else if(a.isArray(b)){d=[];for(var e=0,f=b.length;e<f;e++)d.push(a.clone(b[e]))}else{d={};for(var g in b)d[g]=a.clone(b[g])}else d=b;return d}}]),a}();a.exports=e});