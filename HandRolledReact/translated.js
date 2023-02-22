import React from "react";
import ReactDOM from "react-dom/client";
const reactRoot = ReactDOM.createRoot(document.querySelector("#reactRoot"));
const div = /*#__PURE__*/ React.createElement(
  "div",
  null,
  /*#__PURE__*/ React.createElement("h1", null, "Hello JSX in Handrolled"),
  /*#__PURE__*/ React.createElement("input", null),
  /*#__PURE__*/ React.createElement("button", null, "Click Here...")
);
reactRoot.render(div);
