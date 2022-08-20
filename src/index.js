import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

console.log("initial state: ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log(("State after dispatch: ", store.getState()))
);
//dispatch some actions
store.dispatch({ type: "todos/todoAdded", payload: "Learn about actions" });
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })

store.dispatch({ type: 'todos/todoToggled', payload: 0 })
store.dispatch({ type: 'todos/todoToggled', payload: 1 })

store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active'})

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: {color: 'red', changeType: 'added'}
})

//stop listening to state updates
unsubscribe()

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
