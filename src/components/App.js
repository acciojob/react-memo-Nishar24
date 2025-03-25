import React, { useState, useMemo } from "react";
import ReactMemoComponent from "./ReactMemoComponent";
import UseMemoComponent from "./UseMemoComponent";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const addCustomTodo = () => {
    if (input.length > 5) {
      setTodos([...todos, input]);
      setInput("");
    } else {
      alert("Task must be more than 5 characters!");
    }
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const memoizedTodos = useMemo(() => todos, [todos]);

  return (
    <div>
      <h1>React Performance Optimization</h1>
      <button onClick={addTodo}>Add Todo</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addCustomTodo}>Submit</button>
      <ul>
        {memoizedTodos.map((todo, index) => (
          <ReactMemoComponent key={index} todo={todo} />
        ))}
      </ul>
      <button onClick={incrementCounter}>Increment Counter</button>
      <p>Counter: {counter}</p>
      <UseMemoComponent counter={counter} />
    </div>
  );
};

export default App;
