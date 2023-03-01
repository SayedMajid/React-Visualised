import PropTypes from "prop-types";
import React from "react";

export default class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      time: new Date(),
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ ...this.state, counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({ ...this.state, counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps() {
    return null;
  }

  componentDidMount() {
    console.log("Component did mount called");
  }

  shouldComponentUpdate() {
    console.log("Should component update called");
    
      return true;
    
    
  }

  getSnapshotBeforeUpdate() {
    console.log("Get snapshot before updarte");
    return null;
  }

  componentDidUpdate() {
    console.log(`Component did update ?? ${this.state.counter}`);
  }

  render() {
    return (
      <>
        <h1>Managing State in React Component</h1>
        <div>
          <h3>Counter is {this.state.counter} </h3>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <h3>Time is {this.state.time.toDateString()} </h3>
        </div>
      </>
    );
  }
}

Customer.propTypes = {
  cust: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    address: PropTypes.string,
  }),
};
