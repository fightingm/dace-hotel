exports.id = "main";
exports.modules = {

/***/ "./src/pages/list/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/list/index.jsx ***!
  \**********************************/
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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _list = __webpack_require__(/*! yo-component/list */ "./src/yo-component/list/index.js");

var _list2 = _interopRequireDefault(_list);

var _action = __webpack_require__(/*! ./action */ "./src/pages/list/action.js");

var _reducer = __webpack_require__(/*! ./reducer */ "./src/pages/list/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _default = __webpack_require__(/*! ../../layouts/default */ "./src/layouts/default/index.js");

var _default2 = _interopRequireDefault(_default);

__webpack_require__(/*! ./index.scss */ "./src/pages/list/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HotelList = (_dec = (0, _reactRedux.connect)(function (state) {
  return state;
}), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(HotelList, _Component);

  function HotelList() {
    (0, _classCallCheck3.default)(this, HotelList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HotelList.__proto__ || (0, _getPrototypeOf2.default)(HotelList)).call(this));

    _this.renderList = _this.renderList.bind(_this);
    _this.onRefresh = _this.onRefresh.bind(_this);
    _this.onLoad = _this.onLoad.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(HotelList, [{
    key: 'onRefresh',
    value: function onRefresh() {
      var _this2 = this;

      setTimeout(function () {
        _this2.list.stopRefreshing();
      }, 500);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var _this3 = this;

      setTimeout(function () {
        _this3.list.stopLoading();
      }, 500);
    }

    // 渲染酒店列表

  }, {
    key: 'renderList',
    value: function renderList() {
      var _this4 = this;

      var list = this.props.list;

      if (!(list && list.length)) {
        return null;
      }
      return _react2.default.createElement(_list2.default, {
        ref: function ref(dom) {
          _this4.list = dom;
        },
        extraClass: 'hotel-list',
        dataSource: this.props.list,
        usePullRefresh: true,
        useLoadMore: true,
        onRefresh: this.onRefresh,
        onLoad: this.onLoad,
        renderItem: function renderItem(item) {
          var id = item.id,
              price = item.price,
              attrs = item.attrs;
          var imageID = attrs.imageID,
              hotelName = attrs.hotelName,
              hotelAddress = attrs.hotelAddress;

          return _react2.default.createElement(
            'div',
            { key: id, className: 'list-item' },
            _react2.default.createElement(
              'div',
              { className: 'list-img' },
              _react2.default.createElement('img', { src: imageID, alt: '' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'list-info' },
              _react2.default.createElement(
                'div',
                { className: 'hotel-title' },
                hotelName
              ),
              _react2.default.createElement(
                'div',
                { className: 'location' },
                hotelAddress
              ),
              _react2.default.createElement(
                'div',
                { className: 'price' },
                price
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('?????????render');
      return _react2.default.createElement(
        _default2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'mh-list' },
          _react2.default.createElement('div', { className: 'search-head' }),
          _react2.default.createElement('div', { className: 'condition-select' }),
          _react2.default.createElement('div', { className: 'sale-tips' }),
          this.renderList()
        )
      );
    }
  }]);
  return HotelList;
}(_react.Component), _class2.propTypes = {
  list: _propTypes2.default.array
}, _class2.defaultProps = {
  list: []
}, _class2.getInitialProps = function (_ref) {
  var store = _ref.store;

  store.injectReducer(_reducer2.default);
  return store.dispatch((0, _action.fetchList)());
}, _temp)) || _class);
exports.default = HotelList;
module.exports = exports['default'];

/***/ }),

/***/ "./src/pages/list/index.scss":
/*!***********************************!*\
  !*** ./src/pages/list/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mh-list {\n  font-size: 12px; }\n  .mh-list .search-head {\n    height: 0.44rem;\n    background: #f7f7f7; }\n  .mh-list .condition-select {\n    height: .35rem;\n    background: #f7f7f7;\n    margin-top: .12rem; }\n  .mh-list .sale-tips {\n    height: .4rem;\n    background: #f7f7f7;\n    margin: .08rem 0; }\n  .mh-list .hotel-list {\n    top: 1.47rem;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    position: absolute; }\n    .mh-list .hotel-list .list-item {\n      display: flex;\n      min-height: 1rem;\n      width: 100%; }\n      .mh-list .hotel-list .list-item .list-img {\n        width: 1.05rem;\n        margin-right: 0.08rem;\n        position: relative; }\n        .mh-list .hotel-list .list-item .list-img img {\n          width: 100%;\n          height: 100%;\n          border-radius: 0.04rem;\n          position: absolute; }\n      .mh-list .hotel-list .list-item .list-info {\n        flex: 1;\n        display: flex;\n        flex-direction: column; }\n        .mh-list .hotel-list .list-item .list-info .hotel-title {\n          font-size: 16px;\n          font-weight: 500;\n          color: #222; }\n        .mh-list .hotel-list .list-item .list-info .location {\n          flex: 1; }\n        .mh-list .hotel-list .list-item .list-info .price {\n          align-self: flex-end; }\n", ""]);

// exports


/***/ })

};
//# sourceMappingURL=main.9f38bbb4a7d7bb4c8961.hot-update.js.map