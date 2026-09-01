// TODO (naming): this file and this function also need a name that says
// what they do (hint: it counts tasks).
export function otherThing(list) {
  const total = list.length;
  const done = list.filter((t) => t.completed).length;
  return { total, done };
}
