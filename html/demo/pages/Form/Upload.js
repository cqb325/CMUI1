define(['module', 'react', '../BaseDemo', 'classnames', 'Upload', "../Tile"], function (module, React, BaseDemo, classnames, Upload, Tile) {
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

    var InputPage = function (_BaseDemo) {
        _inherits(InputPage, _BaseDemo);

        function InputPage() {
            _classCallCheck(this, InputPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(InputPage).apply(this, arguments));
        }

        _createClass(InputPage, [{
            key: 'render',
            value: function render() {

                return React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        Tile,
                        { header: "1" },
                        React.createElement(Upload, { multiple: false, accept: '', autoUpload: true, service: 'xxx', placeHolder: '请选择文件', grid: 1 }),
                        ' sss'
                    ),
                    React.createElement(
                        Tile,
                        { header: "1" },
                        React.createElement(Upload, { multiple: false, accept: { title: "选择图片", mimeTypes: 'image/*' }, service: '', placeHolder: '请选择图片' }),
                        React.createElement('span', { className: 'mr-30' }),
                        React.createElement(Upload, { multiple: false, accept: { title: "选择图片", mimeTypes: '.png,.jpg' }, service: '', placeHolder: '请选择图片' })
                    )
                );
            }
        }]);

        return InputPage;
    }(BaseDemo);

    module.exports = InputPage;
});
