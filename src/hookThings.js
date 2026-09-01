import { useState } from "react";

// TODO (naming): this hook should be called useTasks, and its inner
// functions/variables should say what they actually do.
export function things() {
  const [data, setData] = useState([
    { id: 1, text: "Prepare the Module 08 demo", completed: false },
    { id: 2, text: "Review the lesson exercises", completed: false },
    { id: 3, text: "Have coffee before class", completed: true },
  ]);

  function f2(text) {
    setData([...data, { id: Date.now(), text, completed: false }]);
  }

  function function2(id) {
    setData(
      data.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  return { data, f2, function2 };
}
