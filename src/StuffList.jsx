import { useState } from "react";
import Component1 from "./Component1";
import { getData } from "./MyContext";

// TODO (Exercise 3 - errors): this component has 3 bugs on purpose.
// Open the console, read each message in full, and fix them one at a
// time (a new error will show up as you fix the previous one).
function StuffList() {
  const { data, function2 } = getData();
  const [showAll, setShowAll] = useState(true);

  const visible = showAll ? data : data.filter((t) => !t.completed);

  return (
    <div>
      <ul>
        {/* BUG 1: missing the "key" prop on the list items */}
        {visible.map((task) => (
          <Component1
            text={task.text}
            a={task.completed}
            toggle={() => function2(task.id)}
          />
        ))}
      </ul>

      {/* BUG 2: reads an array position that doesn't exist */}
      <p className="summary">Last task added: {data[data.length].text}</p>

      {/* BUG 3: calls the function instead of passing a reference */}
      <button onClick={setShowAll(!showAll)}>
        {showAll ? "Hide completed" : "Show all"}
      </button>
    </div>
  );
}

export default StuffList;
