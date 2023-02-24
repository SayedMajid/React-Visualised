import React from "react";
import ReactDOM from "react-dom/client";

const reactRoot = ReactDOM.createRoot(document.querySelector("#reactRoot"));

const user = { name: "Dan Abramov" };

const styles = {
  border: "1px solid black",
  fontFamily: "sans-serif",
  color: "teal",
  textAlign: "center",
};

class Person extends React.Component {
  constructor(props) {
    super(props); //* this.props = props
  }

  render() {
    return (
      <>
        <h1>
          Hello from {this.props.name}. ID {this.props.id}
        </h1>
      </>
    );
  }
}

const div = (
  <div style={styles}>
    <h1>Hello, JSX Handrolled!!!</h1>
    <div>
      <Person id={Math.random(0, 9)} name="Dan Abramov" />
    </div>
  </div>
);

reactRoot.render(div);
