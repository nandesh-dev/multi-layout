function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", null, children);
}

function Section(props) {
  return /*#__PURE__*/React.createElement("div", null, props.component());
}

exports.Container = Container;
exports.Section = Section;
//# sourceMappingURL=index.js.map
