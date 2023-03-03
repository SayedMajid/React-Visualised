import { useReducer } from "react";

const reducer = (state, action) => {
  const actionMap = {
    increment: { ...state, count: state.count + 1 },
    decrement: { ...state, count: state.count - 1 },
  };

  return actionMap[action?.type] ?? state;
};

export default function Counter() {
  const initState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h3>Counter : {state.count}</h3>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}
