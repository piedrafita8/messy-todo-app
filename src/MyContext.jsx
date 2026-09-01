import { createContext, useContext } from "react";
import { things } from "./hookThings";

// TODO (naming): "MyContext" and "Context1" don't say what this context
// holds. Neither does "Provider1" nor "getData" (which, on top of that,
// doesn't follow the "custom hooks start with use" convention).
export const Context1 = createContext(null);

export function Provider1({ children }) {
  const value = things();
  return <Context1.Provider value={value}>{children}</Context1.Provider>;
}

export function getData() {
  return useContext(Context1);
}
