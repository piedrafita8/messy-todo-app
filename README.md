# Exercise: Sorting and Debugging Live

This project is a mini TODO List that **works**, but it's built with every
"anti-pattern" covered in the React best-practices lesson: a messy folder,
names that say nothing, and three bugs on purpose. The exercise has three
parts, in the same order as the live demo.

## Getting started

```bash
npm install
npm run dev
```

Open the URL printed in the terminal and **open the browser console too**
(F12, or right click → Inspect → Console). You'll see errors as soon as it
loads: that's expected, it's part of the exercise.

## Part 1 — Organize the folder

All of `src/` is a mess: components, hooks, and context are loose, mixed in
with `App.jsx` and `main.jsx`. Create this structure and move each file where
it belongs:

```
src/
  components/
  hooks/
  context/
  App.jsx
  main.jsx
```

After moving the files, update the `import`s (in `App.jsx` and between the
moved files) so the project keeps running without compile errors.

## Part 2 — Rename

With the files already in place, fix the names following the conventions
from the lesson (PascalCase for components, descriptive camelCase for
functions and variables, hooks that start with `use`):

- `Component1.jsx` → a name that says what it is (it's a task item). Inside
  it, also rename the `f()` function, the `x` variable, and the `a` prop.
- `hookThings.js` → should start with `use` and say what it manages. Same for
  its inner names (`data`, `f2`, `function2`).
- `hook2.js` and its `otherThing` function → they count completed tasks, the
  name should reflect that.
- `MyContext.jsx`, `Context1`, `Provider1`, `getData` → none of these names
  say which context this is. Pick names that do.
- `StuffList.jsx` → could also use a better name.

The behavior doesn't need to change: once you're done, the app should still
add, toggle, and hide tasks exactly the same way.

## Part 3 — Hunt down and fix the 3 errors

There are three intentional bugs, marked with `BUG` comments in the code.
You'll see them show up **one at a time**: fixing the first one reveals the
next. For each one:

1. Read the full message in the console (not just the first line).
2. Identify the file and line the stack trace points to.
3. Write a comment above the affected line explaining what the error said
   and why it was happening.
4. Fix it.

The three errors you'll run into (in this order):

- `Each child in a list should have a unique "key" prop` — a warning, it
  doesn't break the app, but it should still be fixed.
- `Cannot read properties of undefined (reading 'text')` — accessing an
  array position that doesn't exist.
- `Too many re-renders. React limits the number of renders to prevent an
  infinite loop.` — a state-setting function is being called directly during
  render, instead of being passed by reference or wrapped in an arrow
  function.

## When it's done

- `src/` is organized into `components/`, `hooks/`, `context/`.
- No file, component, function, or variable has a generic name (`Component1`,
  `data`, `stuff`, `f`, `x`, `a`, etc.).
- The console shows no errors or warnings while using the app: adding a
  task, toggling it as completed, and showing/hiding completed ones.
