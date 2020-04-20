import { intiReducer } from "./reducers";
import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
const reducersCombiner = combineReducers({
  intiReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducersCombiner,
  composeEnhancers(applyMiddleware(reduxThunk))
);
