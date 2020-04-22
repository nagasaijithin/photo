import { INIT, SEARCH_IMG } from "../actions/types";

const inslState = [];
export const intiReducer = (state = inslState, action) => {
  // console.log(action.payload);
  if (action.type === INIT || action.type === SEARCH_IMG) {
    return action.payload;
  }
  return state;
};
