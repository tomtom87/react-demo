webpackHotUpdate(0,{

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

  eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nvar _reactTransformHmr2 = __webpack_require__(15);\n\nvar _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);\n\nvar _react = __webpack_require__(11);\n\nvar _reactTransformCatchErrors2 = __webpack_require__(14);\n\nvar _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);\n\nvar _redboxReact = __webpack_require__(17);\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ContentPageCss = __webpack_require__(460);\n\nvar _ContentPageCss2 = _interopRequireDefault(_ContentPageCss);\n\nvar _decoratorsWithStyles = __webpack_require__(22);\n\nvar _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);\n\nvar _UserList = __webpack_require__(478);\n\nvar _UserList2 = _interopRequireDefault(_UserList);\n\nvar _components = {\n  _$ContentPage: {\n    displayName: 'ContentPage'\n  }\n};\n\nvar _reactComponentWrapper = (0, _reactTransformHmr3['default'])({\n  filename: '/home/top/react-yo/src/components/ContentPage/ContentPage.js',\n  components: _components,\n  locals: [module],\n  imports: [_react]\n});\n\nvar _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({\n  filename: '/home/top/react-yo/src/components/ContentPage/ContentPage.js',\n  components: _components,\n  locals: [],\n  imports: [_react, _redboxReact]\n});\n\nfunction _wrapComponent(uniqueId) {\n  return function (ReactClass) {\n    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);\n  };\n}\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar ContentPage = (function (_Component) {\n  _inherits(ContentPage, _Component);\n\n  function ContentPage() {\n    _classCallCheck(this, _ContentPage);\n\n    _get(Object.getPrototypeOf(_ContentPage.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(ContentPage, [{\n    key: 'render',\n    value: function render() {\n      this.context.onSetTitle(this.props.title);\n      return _react2['default'].createElement(\n        'div',\n        { className: 'ContentPage' },\n        _react2['default'].createElement(\n          'div',\n          { className: 'ContentPage-container' },\n          this.props.path === '/' ? null : _react2['default'].createElement(\n            'h1',\n            null,\n            this.props.title\n          ),\n          _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content || '' } }),\n          _react2['default'].createElement(_UserList2['default'], { data: this.listData })\n        )\n      );\n    }\n  }], [{\n    key: 'propTypes',\n    value: {\n      path: _react.PropTypes.string.isRequired,\n      content: _react.PropTypes.string.isRequired,\n      title: _react.PropTypes.string\n    },\n    enumerable: true\n  }, {\n    key: 'contextTypes',\n    value: {\n      onSetTitle: _react.PropTypes.func.isRequired\n    },\n    enumerable: true\n  }, {\n    key: 'listData',\n    value: [{ first: 'Peter', last: 'Tosh' }, { first: 'Robert', last: 'Marley' }, { first: 'Bunny', last: 'Wailer' }],\n    enumerable: true\n  }]);\n\n  var _ContentPage = ContentPage;\n  ContentPage = _wrapComponent('_$ContentPage')(ContentPage) || ContentPage;\n  ContentPage = (0, _decoratorsWithStyles2['default'])(_ContentPageCss2['default'])(ContentPage) || ContentPage;\n  return ContentPage;\n})(_react.Component);\n\nexports['default'] = ContentPage;\nmodule.exports = exports['default'];\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzA3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvQ29udGVudFBhZ2UuanM/MjFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgUmVhY3QgU3RhcnRlciBLaXQgfCBNSVQgTGljZW5zZSB8IGh0dHA6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8gKi9cblxuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRlbnRQYWdlLmNzcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi8uLi9kZWNvcmF0b3JzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFVzZXJMaXN0IGZyb20gJy4uL1VzZXJMaXN0JztcblxuQHdpdGhTdHlsZXMoc3R5bGVzKVxuXG5jbGFzcyBDb250ZW50UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgb25TZXRUaXRsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0aWMgbGlzdERhdGEgPSBbXG4gICAge2ZpcnN0OidQZXRlcicsbGFzdDonVG9zaCd9LFxuICAgIHtmaXJzdDonUm9iZXJ0JyxsYXN0OidNYXJsZXknfSxcbiAgICB7Zmlyc3Q6J0J1bm55JyxsYXN0OidXYWlsZXInfSxcbiAgXTtcblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jb250ZXh0Lm9uU2V0VGl0bGUodGhpcy5wcm9wcy50aXRsZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGVudFBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250ZW50UGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnBhdGggPT09ICcvJyA/IG51bGwgOiA8aDE+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5wcm9wcy5jb250ZW50IHx8ICcnfX0gLz5cblxuICAgICAgICAgIDxVc2VyTGlzdCBkYXRhPXt0aGlzLmxpc3REYXRhfSAvPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQYWdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQUE7QUFDQTtBQURBOzs7Ozs7QUFBQTs7QUFrQkE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7QUFFQTs7O0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7OztBQS9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7Ozs7QUFaQTtBQUFBO0FBQUE7QUFBQTs7O0FBcUNBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})