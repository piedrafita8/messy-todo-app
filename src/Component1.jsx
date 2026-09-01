// TODO (Exercise 1 - naming): rename the component, the function, the
// variable and the "a" prop following the conventions from the lesson,
// without changing the behavior.
function Component1({ text, a, toggle }) {
  const x = text;

  function f() {
    toggle();
  }

  return (
    <li onClick={f} className={a ? "completed" : ""}>
      {x}
    </li>
  );
}

export default Component1;
