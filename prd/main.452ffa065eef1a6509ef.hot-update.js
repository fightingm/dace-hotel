exports.id = "main";
exports.modules = {

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;
// import { Link } from 'dace';

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _carousel = __webpack_require__(/*! yo-component/carousel */ "./src/yo-component/carousel/index.js");

var _carousel2 = _interopRequireDefault(_carousel);

var _alert = __webpack_require__(/*! yo-component/alert */ "./src/yo-component/alert/index.js");

var _alert2 = _interopRequireDefault(_alert);

var _default = __webpack_require__(/*! ../../layouts/default */ "./src/layouts/default/index.js");

var _default2 = _interopRequireDefault(_default);

var _action = __webpack_require__(/*! ./action */ "./src/pages/index/action.js");

var _reducer = __webpack_require__(/*! ./reducer */ "./src/pages/index/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

__webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = (_dec = (0, _reactRedux.connect)(function (state) {
  return state;
}), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));

    _this.goList = _this.goList.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _alert2.default)('hhhhhh');
    }
  }, {
    key: 'goList',

    // 跳转到列表页
    value: function goList() {
      this.props.history.push({
        pathname: '/list'
      });
    }
  }, {
    key: 'renderCarousel',
    value: function renderCarousel() {
      var banner = this.props.banner;

      if (!(banner && banner.length)) {
        return null;
      }
      return _react2.default.createElement(
        _carousel2.default,
        { autoplay: true },
        banner.map(function (item, index) {
          return _react2.default.createElement(
            'li',
            { key: index, className: 'item banner-item' },
            _react2.default.createElement('img', { className: 'img', src: item, alt: '' })
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _default2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'mh-index' },
          _react2.default.createElement(
            'div',
            { className: 'hd-banner' },
            this.renderCarousel()
          ),
          _react2.default.createElement(
            'div',
            { className: 'qt-wrap' },
            _react2.default.createElement(
              'div',
              { className: 'condition-search' },
              _react2.default.createElement(
                'div',
                { className: 'domestic' },
                _react2.default.createElement('div', { className: 'hotel-type' }),
                _react2.default.createElement('div', { className: 'address-line' }),
                _react2.default.createElement('div', { className: 'time-line' }),
                _react2.default.createElement('div', { className: 'keyword-line' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'submit-box', onClick: this.goList },
                '\u641C\u7D22\u9152\u5E97'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'other-link' },
              _react2.default.createElement('div', { className: 'per-sale link-item' }),
              _react2.default.createElement('div', { className: 'time-room link-item' }),
              _react2.default.createElement('div', { className: 'yx-hotel link-item' }),
              _react2.default.createElement('div', { className: 'jtqj-hotel link-item' })
            )
          )
        )
      );
    }
  }]);
  return Index;
}(_react.Component), _class2.propTypes = {
  banner: _propTypes2.default.array,
  history: _propTypes2.default.object
}, _class2.defaultProps = {
  banner: [],
  history: {}
}, _class2.getInitialProps = function (_ref) {
  var store = _ref.store;

  store.injectReducer(_reducer2.default);
  return store.dispatch((0, _action.fetchBanner)());
}, _temp)) || _class);
exports.default = Index;
module.exports = exports['default'];

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * lib中map使用“_”开头，本文件中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * 本文件中map使用\"_\"开头，extra中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * 合并base和extra中的同类base map\r\n * 用以解决业务方升级Yo时需比base和extra的一致性\r\n * 当extra为空时，base map将以base文件里的定义作为默认值\r\n * 当extra不为空时，base map使用extra文件里的定义\r\n */\n/**\n * Yo框架全局Variables\n * Yo基础变量map，如果不想定义某属性，将其value设置为null；\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\n * variables中map使用“_”开头，本文件中不使用\"_\"\n * variables ⇌ config\n */\n/**\r\n * Yo框架全局Variables\r\n * Yo基础变量map，如果不想定义某属性，将其value设置为null\r\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\r\n * 本文件中map使用\"_\"开头，config中不使用\"_\"\r\n * variables ⇌ config\r\n */\n/**\r\n * 合并variables和config中的同类map\r\n * 用以解决业务方升级Yo时需比config和variables的一致性\r\n * 当config为空时，使用variables中的map作为默认值\r\n * 当config不为空时，使用config中的定义\r\n */\n/**\r\n * Yo框架自定义全局函数\r\n * 扩充Sass默认函数库，用以增强语法\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的第一项\r\n * @function first\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的最后一项\r\n * @function last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的倒数第几项\r\n * @function nth-last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要返回的值在list中的倒数位置 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 移除SassList中的某个项目并返回新的List\r\n * @function remove\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {String} $value 指定需要被删除的值 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 截取SassList中的某个部分并返回新的List\r\n * @function slice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $start 指定需要截取的开始下标 <2.1.0>\r\n * @param {Integer} $end 指定需要截取的结束下标（不包括end），当该值缺省时默认为末尾下标 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 从SassList中添加/删除项目，然后返回新的List。\r\n * @function splice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要移除的开始下标 <2.1.0>\r\n * @param {Integer} $count 指定需要移除的数量，不可以为负值，0表示不移除 <2.1.0>\r\n * @param {String} $values 指定需要添加的新值（可以是多个），如果该值缺省，则表示只移除不添加新值 <2.1.0>\r\n */\n/**\r\n * Yo框架全局基础方法\r\n * 包括响应式方案，CSS3兼容性方案，厂商前缀方案，iconfont方案，flex布局等全局方法\r\n */\n/**\r\n * @module 常用方法\r\n * @description 给需要的属性加厂家前缀\r\n * @method prefix\r\n * @version 1.0.0\r\n * @param {String} $property 指定属性 <1.0.0>\r\n * @param {String} $value 指定属性值 <1.0.0>\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义字体图标\r\n * @method _iconfont\r\n * @version 1.0.0\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 四则运算(系统要求：iOS6.0+,Android4.4+)\r\n * @method calc\r\n * @version 1.7.0\r\n * @param {String} $property 指定需要进行计算的CSS属性 <1.7.0>\r\n * @param {String} $value 与原生CSS语法一致，区别在于需要使用引号包裹表达式 <1.7.0>\r\n * @example\r\n * .calc {\r\n *     @include calc(width, \"100% - 100px\");\r\n * }\r\n *\r\n * <div class=\"calc\">四则运算</div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义响应式方案\r\n * @method responsive\r\n * @version 1.0.0\r\n * @param {String} $media 指定媒体查询条件，取值为`config`文件map `media-types`中的值 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除浮动方案\r\n * @method clearfix\r\n * @version 1.0.0\r\n * @param {String} $type 指定清除浮动的方式，包括：pseudo-element | bfc，默认值：pseudo-element <1.8.5>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除行内级元素间间隙方案\r\n * @method clearspace\r\n * @version 3.0.3\r\n * @param {Length} $font-size 指定子元素字号，默认值：.14rem <3.0.3>\r\n * @example\r\n * .demo {\r\n *     @include clearspace;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <span class=\"item\">1</span>\r\n *      <span class=\"item\">2</span>\r\n *      <span class=\"item\">3</span>\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 描述元素内容在横、纵方向上的对齐方式，默认为水平垂直居中对齐\r\n * @method align\r\n * @version 2.0.0\r\n * @param {String} $flexbox 元素布局方式，可选值：flex | inline-flex，默认值：flex <2.0.0>\r\n * @param {Keyword} $justify-content 元素内容的水平对齐方式，取值与`justify-content`属性一致，默认值：center <2.0.0>\r\n * @param {Keyword} $align-items 元素内容的垂直对齐方式，取值与`align-items`属性一致，默认值：center <2.0.0>\r\n * @example\r\n * .demo {\r\n *     @include align;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <img alt=\"未知尺寸图片居中\" />\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义是否有滚动条\r\n * @method overflow\r\n * @version 1.0.0\r\n * @param {String} $overflow 取值与最新原生语法一致，默认值：auto <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 生成全屏方法\r\n * @method fullscreen\r\n * @version 1.7.0\r\n * @param {Integer} $z-index 指定层叠级别 <1.7.0>\r\n * @param {Keywords} $position 指定定位方式，取除`static | relative`之外的值，默认值：absolute <1.8.5>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义使用何种滤镜\r\n * @method filter\r\n * @version 1.7.0\r\n * @param {String} $filter 取值与`filter`属性一致 <1.7.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义UA默认外观\r\n * @method appearance\r\n * @version 1.0.0\r\n * @param {String} $appearance 取值与`appearance`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义如何选中内容\r\n * @method user-select\r\n * @version 1.0.0\r\n * @param {String} $user-select 取值与`user-select`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义盒模型\r\n * @method box-sizing\r\n * @version 1.0.0\r\n * @param {String} $box-sizing 指定盒模型类型，取值与`box-sizing`属性一致，默认值：border-box <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义渐变色值\r\n * @method gradient\r\n * @version 1.0.0\r\n * @param {String} $type 指定渐变的4种类型：linear, repeating-linear, radial, repeating-radial <1.0.0>\r\n * @param {String} $dir 指定渐变方向，可选值：[left | right] || [top | bottom] | angle <2.0.0>\r\n * @param {String} $gradient 指定渐变取值，与w3c最新原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景图像缩放（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-size\r\n * @version 1.4.0\r\n * @param {Keywords | Length} $background-size 指定背景图缩放值，取值与`background-size`属性一致 <1.4.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景裁减（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-clip\r\n * @version 1.6.0\r\n * @param {Keywords} $background-clip 指定背景图缩放值，取值与`background-clip`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景显示区域（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-origin\r\n * @version 1.6.0\r\n * @param {Keywords} $background-origin 指定背景图`background-position`属性计算相对的参考点，取值与`background-origin`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 为元素添加边框（包括1px边框）\r\n * @method border\r\n * @version 2.0.0\r\n * @param {String} $border-width 指定边框厚度（单位为px），默认值：1px，取值与`border-width`属性一致，不同方向代表边框位置 <2.0.0>\r\n * @param {String} $border-color 指定边框颜色 <2.0.0>\r\n * @param {String} $border-style 指定边框样式 <2.0.0>\r\n * @param {String} $radius 指定边框圆角半径，默认值：null <2.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义圆角，用于修复某些安卓机型上“圆角+边框+背景”，背景溢出的情况\r\n * @method border-radius\r\n * @version 1.6.0\r\n * @param {Length} $border-radius 指定元素的圆角半径，取值与`border-radius`属性一致 <1.6.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义简单变换\r\n * @method transform\r\n * @version 1.0.0\r\n * @param {String} $transform 取值范围与`transform`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义变换原点\r\n * @method transform-origin\r\n * @version 1.0.0\r\n * @param {Length | Percentage | Keywords} $transform-origin 取值范围与`transform-origin`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化\r\n * @method transform-style\r\n * @version 2.0.0\r\n * @param {String} $transform-style 取值范围与`transform-style`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定。\r\n * @method perspective\r\n * @version 2.0.0\r\n * @param {none | Length} $perspective 取值范围与`perspective`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定透视点的位置\r\n * @method perspective-origin\r\n * @version 2.0.0\r\n * @param {Length | Percentage | Keywords} $perspective-origin 取值范围与`perspective-origin`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定元素背面面向用户时是否可见\r\n * @method backface-visibility\r\n * @version 2.0.0\r\n * @param {Keywords} $backface-visibility 取值范围与`backface-visibility`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 定义动画\r\n * @method animation\r\n * @version 1.0.0\r\n * @param {String} $animation 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定需要引用的动画名称\r\n * @method animation-name\r\n * @version 3.0.0\r\n * @param {String} $animation-name 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行一次所持续的时长\r\n * @method animation-duration\r\n * @version 3.0.0\r\n * @param {String} $animation-duration 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行方式\r\n * @method animation-timing-function\r\n * @version 3.0.0\r\n * @param {String} $animation-timing-function 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画延迟多久之后再开始\r\n * @method animation-delay\r\n * @version 3.0.0\r\n * @param {String} $animation-delay 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画循环几次\r\n * @method animation-iteration-count\r\n * @version 3.0.0\r\n * @param {String} $animation-iteration-count 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动方向\r\n * @method animation-direction\r\n * @version 3.0.0\r\n * @param {String} $animation-direction 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动状态\r\n * @method animation-play-state\r\n * @version 3.0.0\r\n * @param {String} $animation-play-state 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画时间之外的状态\r\n * @method animation-fill-mode\r\n * @version 3.0.0\r\n * @param {String} $animation-fill-mode 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Transition\r\n * @description 定义补间\r\n * @method transition\r\n * @version 1.0.0\r\n * @param {String} $transition 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义显示类型为伸缩盒\r\n * @method flexbox\r\n * @version 1.0.0\r\n * @param {String} $flexbox 默认值：flex，可选值：flex | inline-flex <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素如何分配空间\r\n * @method flex\r\n * @version 1.0.0\r\n * @param {Number} $flex 取值与`flex`属性一致，默认值：1 <1.0.0>\r\n * @param {String} $direction 默认值: row，可选值：row | column <1.5.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的排版顺序\r\n * @method order\r\n * @version 1.0.0\r\n * @param {Integer} $order 取值与`order`属性一致，默认值：1 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素流动方向及遇见边界时是否换行(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-flow\r\n * @version 2.0.0\r\n * @param {String} $flex-flow 取值与`flex-flow`属性一致，默认值：row nowrap <2.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的流动方向\r\n * @method flex-direction\r\n * @version 1.0.0\r\n * @param {String} $flex-direction 取值与`flex-direction`属性一致，默认值：row <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素溢出后排版(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-wrap\r\n * @version 1.0.0\r\n * @param {String} $flex-wrap 取值与`flex-wrap`属性一致，默认值：nowrap <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器主轴对齐方式(其中`space-around`值需要iOS7.0+,Android4.4+)\r\n * @method justify-content\r\n * @version 1.0.0\r\n * @param {String} $justify-content 取值与`justify-content`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义多行弹性容器侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-content\r\n * @version 1.8.5\r\n * @param {String} $align-content 取值与`align-content`属性一致，默认值：center <1.8.5>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义单行弹性容器侧轴对齐方式\r\n * @method align-items\r\n * @version 1.0.0\r\n * @param {String} $align-items 取值与`align-items`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器中子元素自身的在侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-self\r\n * @version 1.0.0\r\n * @param {String} $align-self 取值与`align-self`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成矩形方法\r\n * @method rect\r\n * @version 1.0.0\r\n * @param {Length} $width 定义矩形的长度 <1.0.0>\r\n * @param {Length} $height 定义矩形的高度 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成正方形方法\r\n * @method square\r\n * @version 1.0.0\r\n * @param {Length} $size 定义正方形的边长 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成圆形方法\r\n * @method circle\r\n * @version 1.0.0\r\n * @param {Length} $size 定义圆的半径长度 <1.0.0>\r\n * @param {Length} $radius 定义圆的圆角半径长度 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 在自适应宽度情况下，确保内容元素的宽高比固定，比如：实现随屏幕大小而变化的正方形。\r\n * @method fixed-scale\r\n * @version 3.0.10\r\n * @param {Length} $width 默认值：100%。用以指定内容元素的初始宽度，由于尺寸需动态变化，不要使用固定单位 <3.0.10>\r\n * @param {Length} $scale 默认值：1/1，即正方形。用以指定内容元素的宽度高比 <3.0.10>\r\n */\n/**\r\n * @module 文本\r\n * @description 链接处理方法\r\n * @method link\r\n * @version 1.0.0\r\n * @param {Color} $color 定义链接颜色 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 文本碰到边界是否换行\r\n * @method wrap\r\n * @version 1.0.0\r\n * @param {Boolean} $is-wrap 定义文本是否换行，默认值：true <2.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 单行文本溢出时显示省略号\r\n * @method ellipsis\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n * @param {Integer} $line-clamp 定义需要显示的行数，默认值：1（即使用单行溢出的处理方案），需要注意的是本参数只支持webkit内核 <2.1.2>\r\n */\n/**\r\n * @module 文本\r\n * @description 文字隐藏方案\r\n * @method texthide\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n */\n/**\n * @module fragment\n * @method yo-modal\n * @version 3.0.0\n * @description 构造yo-modal的自定义使用方法\n * @demo http://ued.qunar.com/hy2/yo/demo/src/html/fragment/yo-modal.html\n * @param {String} $name 定义扩展名称 <3.0.0>\n * @param {Color} $bgcolor 遮罩背景色 <3.0.0>\n * @param {Color} $cont-bgcolor 内容区背景色 <3.0.0>\n */\n.yo-modal {\n  overflow: hidden;\n  position: absolute;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.2); }\n  .yo-modal-top {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n    align-items: flex-start; }\n  .yo-modal-right {\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    justify-content: flex-end; }\n  .yo-modal-bottom {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n    align-items: flex-end; }\n  .yo-modal-left {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    justify-content: flex-start; }\n  .yo-modal-stretch-x > .cont {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    flex: 1;\n    width: .1px; }\n  .yo-modal-stretch-y > .cont {\n    -webkit-align-self: stretch;\n    align-self: stretch; }\n  .yo-modal-stretch > .cont {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    flex: 1;\n    width: .1px;\n    -webkit-align-self: stretch;\n    align-self: stretch; }\n  .yo-modal > .cont {\n    position: relative;\n    overflow: hidden; }\n\n/**\r\n * @module element\r\n * @method yo-btn\r\n * @version 3.0.0\r\n * @description 构造按钮的自定义使用方法，勿使用`input`标签，因为边框为`::after`实现\r\n * @demo http://ued.qunar.com/hy2/yo/demo/src/html/element/yo-btn.html\r\n * @param {String} $name 定义扩展名称 <3.0.0>\r\n * @param {Length} $border-width 边框厚度 <3.0.0>\r\n * @param {Color} $border-color 边框色 <3.0.0>\r\n * @param {Color} $bgcolor 背景色 <3.0.0>\r\n * @param {Color} $color 文本色 <3.0.0>\r\n * @param {Color} $touch-border-color 触点（鼠标，手指或其它）按下时边框色 <3.0.0>\r\n * @param {Color} $touch-bgcolor 触点（鼠标，手指或其它）按下时背景色 <3.0.0>\r\n * @param {Color} $touch-color 触点（鼠标，手指或其它）按下时文本色 <3.0.0>\r\n * @param {Length} $padding 内补白 <3.0.0>\r\n * @param {Length} $radius 圆角半径长度 <3.0.0>\r\n * @param {Length} $font-size 字号大小 <3.0.0>\r\n * @param {Length} $width 宽度 <3.0.0>\r\n * @param {Length} $height 高度 <3.0.0>\r\n */\n.yo-btn {\n  display: inline-block;\n  height: 0.36rem;\n  line-height: 0.36rem;\n  padding: 0 1.2em;\n  vertical-align: top;\n  position: relative;\n  border-radius: 0.05rem;\n  border: 0 none;\n  background-color: #ff801a;\n  color: #fff;\n  text-align: center;\n  cursor: pointer; }\n  .yo-btn::after {\n    pointer-events: none;\n    position: absolute;\n    z-index: 999;\n    top: 0;\n    left: 0;\n    content: \" \";\n    border-color: #d36105;\n    border-style: solid;\n    border-width: 1px;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0; }\n    @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n      .yo-btn::after {\n        width: 100%;\n        height: 100%;\n        border-radius: 0.05rem; } }\n    @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n      .yo-btn::after {\n        width: 200%;\n        height: 200%;\n        -webkit-transform: scale(0.5);\n        transform: scale(0.5);\n        border-radius: 0.1rem; } }\n    @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n      .yo-btn::after {\n        width: 300%;\n        height: 300%;\n        -webkit-transform: scale(0.33333);\n        transform: scale(0.33333);\n        border-radius: 0.15rem; } }\n  .yo-btn-disabled {\n    opacity: 1;\n    cursor: not-allowed;\n    background-color: #ffaa67;\n    color: white; }\n    .yo-btn-disabled::after {\n      border-color: #fa7f1c; }\n  .yo-btn-stacked {\n    display: block;\n    width: 100%; }\n\n/**\r\n * @module fragment\r\n * @method yo-dialog\r\n * @version 3.0.0\r\n * @description 构造yo-dialog的自定义使用方法\r\n * @demo http://ued.qunar.com/hy2/yo/demo/src/html/fragment/yo-dialog.html\r\n * @param {String} $name 定义扩展名称 <3.0.0>\r\n * @param {Length} $width 宽度 <3.0.0>\r\n * @param {Length} $height 高度 <3.0.0>\r\n * @param {Length} $radius 圆角半径长度 <3.0.0>\r\n * @param {Color} $border-color 边框色 <3.0.0>\r\n * @param {Color} $title-color 标题文本色 <3.0.0>\r\n * @param {Length} $title-font-size 标题字号 <3.0.0>\r\n * @param {Length} $bd-padding 主体内补白 <3.0.0>\r\n * @param {Length} $bd-font-size 主体字号 <3.0.0>\r\n */\n.yo-dialog {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  overflow: hidden;\n  padding-top: .15rem;\n  min-width: 2.8rem;\n  max-width: 90%;\n  margin: auto;\n  border-radius: 0.1rem;\n  background-color: #fff;\n  text-align: center; }\n  .yo-dialog > .hd {\n    position: relative;\n    overflow: hidden; }\n    .yo-dialog > .hd .title {\n      overflow: hidden;\n      height: 100%;\n      margin: 0 .6rem;\n      color: #212121;\n      font-size: 0.16rem; }\n    .yo-dialog > .hd .regret,\n    .yo-dialog > .hd .affirm {\n      position: absolute;\n      top: 0; }\n    .yo-dialog > .hd .regret {\n      left: .1rem; }\n    .yo-dialog > .hd .affirm {\n      right: .1rem; }\n  .yo-dialog > .bd {\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    min-height: .4rem;\n    padding: 0.03rem 0.1rem 0.15rem;\n    font-size: 0.16rem; }\n  .yo-dialog > .ft {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    text-align: center; }\n    .yo-dialog > .ft .yo-btn-dialog {\n      height: 0.44rem;\n      line-height: 0.44rem;\n      border-radius: 0;\n      background-color: #fff;\n      color: #00afc7;\n      font-size: 0.16rem;\n      display: block;\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n      flex: 1;\n      width: .1px; }\n      .yo-dialog > .ft .yo-btn-dialog::after {\n        border-width: 1px 1px 0 0;\n        border-color: #ccc; }\n        @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n          .yo-dialog > .ft .yo-btn-dialog::after {\n            border-radius: 0; } }\n        @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n          .yo-dialog > .ft .yo-btn-dialog::after {\n            border-radius: 0; } }\n        @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n          .yo-dialog > .ft .yo-btn-dialog::after {\n            border-radius: 0; } }\n      .yo-dialog > .ft .yo-btn-dialog.yo-btn-touch {\n        background-color: #f9f9f9; }\n      .yo-dialog > .ft .yo-btn-dialog.yo-btn-disabled {\n        background-color: white;\n        color: #94f2ff; }\n        .yo-dialog > .ft .yo-btn-dialog.yo-btn-disabled::after {\n          border-color: #ebebeb; }\n      .yo-dialog > .ft .yo-btn-dialog:last-child {\n        font-weight: bold;\n        border-bottom-right-radius: 0.1rem; }\n        .yo-dialog > .ft .yo-btn-dialog:last-child::after {\n          border-right-width: 0; }\n      .yo-dialog > .ft .yo-btn-dialog:first-child {\n        border-bottom-left-radius: 0.1rem; }\n\n/**\n * @module fragment\n * @method yo-carousel\n * @version 3.0.0\n * @description 构造yo-carousel的自定义使用方法\n * @demo http://ued.qunar.com/hy2/yo/demo/src/html/fragment/yo-carousel.html\n * @param {String} $name 定义扩展名称 <3.0.0>\n * @param {Length} $btn-size 按钮大小 <3.0.0>\n * @param {Color} $btn-bgcolor 按钮背景色 <3.0.0>\n * @param {Color} $btn-color 按钮文本色 <3.0.0>\n * @param {Color} $touch-btn-bgcolor 按钮按下背景色 <3.0.0>\n * @param {Color} $touch-btn-color 按钮按下文本色 <3.0.0>\n * @param {Length} $index-size 索引大小 <3.0.0>\n * @param {Color} $index-bgcolor 索引背景色 <3.0.0>\n * @param {Color} $on-index-bgcolor 索引当前项背景色 <3.0.0>\n */\n.yo-carousel {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  text-align: center; }\n  .yo-carousel > .cont {\n    position: relative;\n    white-space: nowrap;\n    font-size: 0;\n    font-family: arial; }\n    .yo-carousel > .cont > .item {\n      display: inline-block;\n      font-size: 0.14rem;\n      font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif; }\n    .yo-carousel > .cont > .item {\n      width: 100%;\n      background-color: #eee; }\n    .yo-carousel > .cont .img {\n      max-width: 100%;\n      max-height: 100%;\n      height: auto; }\n  .yo-carousel > .index {\n    position: absolute;\n    bottom: .05rem;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0) translateZ(0);\n    transform: translate(-50%, 0) translateZ(0); }\n    .yo-carousel > .index > li {\n      float: left;\n      margin: 0 .05rem;\n      width: 0.1rem;\n      height: 0.1rem;\n      border-radius: 50%;\n      background-color: #85c8d1; }\n      .yo-carousel > .index > li.on {\n        background-color: #09a5c4; }\n  .yo-carousel > .yo-ico {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n    width: 0.44rem;\n    height: 0.44rem;\n    border-radius: 50%;\n    background-color: rgba(9, 165, 196, 0.8);\n    color: #fff;\n    line-height: 0.44rem;\n    cursor: pointer; }\n    .yo-carousel > .yo-ico:active, .yo-carousel > .yo-ico-touch {\n      background-color: rgba(9, 165, 196, 0.5); }\n  .yo-carousel > .yo-ico-prev {\n    left: 0; }\n  .yo-carousel > .yo-ico-next {\n    right: 0; }\n\n.yo-carousel-fade > .cont > .item {\n  position: absolute;\n  right: 0; }\n  .yo-carousel-fade > .cont > .item:first-child {\n    position: relative; }\n  .yo-carousel-fade > .cont > .item img {\n    opacity: 0;\n    -webkit-transition: opacity 0.2s ease-in;\n    transition: opacity 0.2s ease-in; }\n\n.yo-carousel-fade > .cont .top {\n  z-index: 99; }\n  .yo-carousel-fade > .cont .top img {\n    opacity: 1; }\n\n.yo-carousel-scale > .cont > .item {\n  -webkit-transition: -webkit-transform 0.4s ease-in-out 0.2s;\n  transition: transform 0.4s ease-in-out 0.2s;\n  -webkit-transform: scale(0.7);\n  transform: scale(0.7); }\n\n.yo-carousel-scale > .cont > .on {\n  -webkit-transform: scale(1);\n  transform: scale(1); }\n\n.yo-carousel > .cont {\n  -webkit-transition: -webkit-transform 0.5s ease-in;\n  transition: transform 0.5s ease-in;\n  width: 100%; }\n  .yo-carousel > .cont .item {\n    z-index: 2; }\n    .yo-carousel > .cont .item > img {\n      max-height: none; }\n  .yo-carousel > .cont .top {\n    z-index: 5; }\n\n.yo-carousel .extra-item {\n  margin-left: -100%; }\n\n.yo-carousel .transition {\n  -webkit-transition: -webkit-transform 0.5s ease-in;\n  transition: transform 0.5s ease-in; }\n\n.yo-carousel .index {\n  z-index: 5;\n  -webkit-transform: translate(-50%, 0) translateZ(0);\n  transform: translate(-50%, 0) translateZ(0); }\n\n.mh-index .hd-banner {\n  background: #f7f7f7;\n  height: 1.375rem; }\n  .mh-index .hd-banner .banner-item img {\n    height: 1.375rem; }\n\n.mh-index .qt-wrap {\n  margin: 0 0.12rem; }\n\n.mh-index .condition-search .domestic {\n  margin-top: 0.12rem; }\n  .mh-index .condition-search .domestic .hotel-type {\n    width: 60%;\n    height: 0.35rem;\n    background: #f7f7f7;\n    margin-bottom: 0.12rem; }\n  .mh-index .condition-search .domestic .address-line, .mh-index .condition-search .domestic .keyword-line {\n    margin: 0.06rem 0;\n    height: 0.35rem;\n    background: #f7f7f7; }\n  .mh-index .condition-search .domestic .time-line {\n    margin: 0.12rem 0;\n    height: 0.7rem;\n    background: #f7f7f7; }\n\n.mh-index .condition-search .submit-box {\n  margin: 0.12rem 0.06rem 0;\n  height: 0.38rem;\n  line-height: 0.38rem;\n  border-radius: 0.24rem;\n  background: #f7704a;\n  color: #fff;\n  text-align: center; }\n\n.mh-index .other-link {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 0.06rem;\n  margin-top: 0.12rem; }\n  .mh-index .other-link .link-item {\n    width: 0.4rem;\n    height: 0.4rem;\n    border-radius: 50%; }\n    .mh-index .other-link .link-item:nth-child(1) {\n      background-color: #f66829; }\n    .mh-index .other-link .link-item:nth-child(2) {\n      background-color: #3fc6d2; }\n    .mh-index .other-link .link-item:nth-child(3) {\n      background-color: #f9ad21; }\n    .mh-index .other-link .link-item:nth-child(4) {\n      background-color: #8b6bff; }\n", ""]);

// exports


/***/ })

};
//# sourceMappingURL=main.452ffa065eef1a6509ef.hot-update.js.map