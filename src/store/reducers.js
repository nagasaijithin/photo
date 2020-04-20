import { INIT } from "../actions/types";

const inslState = [];
export const intiReducer = (state = inslState, action) => {
  if (action.type === INIT) {
    return action.payload;
  }
  return state;
};
