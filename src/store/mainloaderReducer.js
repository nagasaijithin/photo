import { MAIN_LOADER_ADD, MAIN_LOADER_REMOVE } from "../actions/types";
let initstate = false;
export const mainLoaderReducer = (state = initstate, action) => {
  switch (action.type) {
    case MAIN_LOADER_ADD:
      return true;
      break;
    case MAIN_LOADER_REMOVE:
      return false;
      break;
    default:
      return state;
      break;
  }
};
