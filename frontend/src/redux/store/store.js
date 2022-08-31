import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { empleados } from "../reducers/empleados";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  empleados: empleados,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
