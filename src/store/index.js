import { intiReducer } from "./initreducers";
import { collectiondetailsReducer } from "./collectiondetailsReducer";
import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
const reducersCombiner = combineReducers({
  intiReducer,
  collectiondetails: collectiondetailsReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducersCombiner,
  composeEnhancers(applyMiddleware(reduxThunk))
);
