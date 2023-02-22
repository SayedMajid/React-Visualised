import React from "react";
import ReactDOM from "react-dom/client";

const reactRoot = ReactDOM.createRoot(document.querySelector("#reactRoot"));

const div = (
  <div>
    <h1>Hello JSX in Handrolled</h1>
    <input />
    <button>Click Here...</button>
  </div>
);

reactRoot.render(div);
