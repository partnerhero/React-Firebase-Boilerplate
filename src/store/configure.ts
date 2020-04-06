import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from ".";

function configureStore() {
  const middlewares = applyMiddleware(thunkMiddleware);
  const isProd = process.env.NODE_ENV === "production";

  const store = isProd
    ? createStore(rootReducer, middlewares)
    : createStore(rootReducer, composeWithDevTools(middlewares));

  return store;
}

export default configureStore;
