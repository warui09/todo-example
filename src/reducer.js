import { combineReducers } from "redux";

import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filterSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer
});

export default rootReducer;
