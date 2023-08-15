import React from 'react';

function Container({
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, children);
}

function Section(props) {
  return /*#__PURE__*/React.createElement("div", null, props.component());
}

export { Container, Section };
//# sourceMappingURL=index.modern.js.map
