webpackHotUpdate(0,{

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

  eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nvar _reactTransformHmr2 = __webpack_require__(15);\n\nvar _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);\n\nvar _react = __webpack_require__(11);\n\nvar _reactTransformCatchErrors2 = __webpack_require__(14);\n\nvar _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);\n\nvar _redboxReact = __webpack_require__(17);\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _components = {\n  _$UserList: {\n    displayName: 'UserList'\n  }\n};\n\nvar _reactComponentWrapper = (0, _reactTransformHmr3['default'])({\n  filename: '/home/top/react-yo/src/components/UserList/UserList.js',\n  components: _components,\n  locals: [module],\n  imports: [_react]\n});\n\nvar _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({\n  filename: '/home/top/react-yo/src/components/UserList/UserList.js',\n  components: _components,\n  locals: [],\n  imports: [_react, _redboxReact]\n});\n\nfunction _wrapComponent(uniqueId) {\n  return function (ReactClass) {\n    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);\n  };\n}\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar UserList = (function (_Component) {\n  _inherits(UserList, _Component);\n\n  function UserList() {\n    _classCallCheck(this, _UserList);\n\n    _get(Object.getPrototypeOf(_UserList.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(UserList, [{\n    key: 'render',\n    value: function render() {\n      //var list = this.props.data.map(function(item) {\n      //  return <li>{item.first} <strong>{item.last}</strong></li>\n      //});\n      console.log(this.props);\n\n      //var list = this.props.data;\n\n      return _react2['default'].createElement(\n        'ul',\n        null,\n        list\n      );\n    }\n  }]);\n\n  var _UserList = UserList;\n  UserList = _wrapComponent('_$UserList')(UserList) || UserList;\n  return UserList;\n})(_react.Component);\n\nexports['default'] = UserList;\nmodule.exports = exports['default'];\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDc4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlckxpc3QvVXNlckxpc3QuanM/Zjk3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgVXNlckxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCl7XG4gICAgICAvL3ZhciBsaXN0ID0gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAvLyAgcmV0dXJuIDxsaT57aXRlbS5maXJzdH0gPHN0cm9uZz57aXRlbS5sYXN0fTwvc3Ryb25nPjwvbGk+XG4gICAgICAvL30pO1xuICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG5cbiAgICAgIC8vdmFyIGxpc3QgPSB0aGlzLnByb3BzLmRhdGE7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bGlzdH1cbiAgICAgICAgPC91bD5cbiAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTGlzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVXNlckxpc3QvVXNlckxpc3QuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBREE7Ozs7OztBQUFBOztBQUVBOzs7O0FBSUE7QUFDQTs7O0FBR0E7OztBQUVBO0FBQ0E7QUFFQTs7O0FBZkE7QUFBQTtBQUFBOzs7QUFrQkE7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})