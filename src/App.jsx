import { useState } from "react";
import { Provider1, getData } from "./MyContext";
import StuffList from "./StuffList";
import { otherThing } from "./hook2";
import "./index.css";

function Form() {
  const [text, setText] = useState("");
  const { f2 } = getData();

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    f2(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

function Counter() {
  const { data } = getData();
  const { total, done } = otherThing(data);
  return (
    <p>
      {done} of {total} completed
    </p>
  );
}

function App() {
  return (
    <Provider1>
      <h1>Mini TODO List</h1>
      <Form />
      <Counter />
      <StuffList />
    </Provider1>
  );
}

export default App;
