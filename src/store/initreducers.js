import {
  INIT,
  SEARCH_IMG,
  COLLECTION,
  CONLLECTION_ALL_IMAGES,
} from "../actions/types";

const inslState = [];
export const intiReducer = (state = inslState, action) => {
  switch (action.type) {
    case INIT:
    case SEARCH_IMG:
    case COLLECTION:
    case CONLLECTION_ALL_IMAGES:
      return action.payload;
      break;

    default:
      return state;
      break;
  }
};
