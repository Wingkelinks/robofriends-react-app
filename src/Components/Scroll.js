import React from "react";

// Using props.children to create scrollable component.
// Instead of creating a scroll.css, use inline style attribute.
//  For JSX style attribute needs double curly brackets - it is a JS expression that contains an obejct
// The object can then have CSS styles

// css: overflow-y
// jsx: overflowY (note use of camelcase for JSX)

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "Scroll",
        border: "0.1px dashed #0cca65",
        height: "500px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
