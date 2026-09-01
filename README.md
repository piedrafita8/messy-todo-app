# Exercise: Sorting and Debugging Live

This project is a mini TODO List that **works**, but it was built breaking
every rule from the React best-practices lesson on the way: a messy folder,
names that say nothing, and a few bugs hiding in the console. Your job is to
leave it clean, well-named, and error-free — without changing what it does
for the user.

## Getting started

```bash
npm install
npm run dev
```

Open the URL printed in the terminal, and open the browser console too (F12,
or right click → Inspect → Console). Something will look wrong right away.
That's expected.

## Part 1 — Organize the folder

Right now everything lives loose inside `src/`. Look at what each file
actually does — is it a component, a custom hook, or context? — and organize
`src/` into folders that make that obvious:

```
src/
  components/
  hooks/
  context/
  App.jsx
  main.jsx
```

Move each file where it belongs and fix whatever breaks as a result.

## Part 2 — Rename

Go file by file and ask yourself: *if someone who has never seen this code
read only the name, would they understand what it does?* Wherever the answer
is no — a component, a function, a variable, a prop, a file name — rename it.
Nothing here is off-limits: some names are just weak, others actively lie
about what they do.

The behavior shouldn't change: once you're done, the app still has to add,
toggle, and hide tasks exactly the same way it does now.

## Part 3 — Hunt down and fix the bugs

There's more than one bug waiting in the console. Don't try to fix everything
at once:

1. Read the **full** error message, not just the first line.
2. Find the file and line the stack trace points to.
3. Write a short comment above the affected line saying what the error meant
   and why it was happening.
4. Fix it, reload, and see what the console says now.

Repeat until the app runs with a completely clean console — no red, no
yellow — while you add a task, toggle it, and show/hide completed ones.

## When it's done

- `src/` is organized into `components/`, `hooks/`, `context/`.
- No file, component, function, or variable has a name that could belong to
  any project (`Component1`, `data`, `stuff`, `f`, `x`, `a`, and friends are
  all gone).
- The console is silent, in every state of the app.
