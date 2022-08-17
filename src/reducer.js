import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filterSlice";

export default function rootReducer(state = {}, action) {
  return {
    todos: todosReducer(state.todos, action),
    filters: filtersReducer(state.filters, action)
  };
}
