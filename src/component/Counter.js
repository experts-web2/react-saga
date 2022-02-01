import React from "react";
import { useSelector } from "react-redux";
const Counter = ({ onIncrement, onIncrementAsync, onDecrement, onReset }) => {
  const count = useSelector((state) => state.counter.count);
  const user = useSelector((state) => state?.user?.name);
  console.log({ count, user });
  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>User Name: {user}</h2>
      <button onClick={onIncrement}>Increment</button>{" "}
      <button onClick={onDecrement}>Decrement</button>{" "}
      <button onClick={onIncrementAsync}>Increment after 3 second</button>{" "}
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Counter;
