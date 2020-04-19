import { NAME_HOLDER } from "../actions/types";

const inslState = "";
export const nameReducer = (state = inslState, action) => {
  if (action.type === NAME_HOLDER) {
    return action.payload;
  }
  return state;
};
