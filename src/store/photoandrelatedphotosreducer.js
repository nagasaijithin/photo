import {
  PHOTO_AND_RELATED,
  CLEAR_PHOTO_AND_RELATED_IMAGES,
} from "../actions/types";
let initstate = {};
export const photoandrelatedphotosreducer = (state = initstate, action) => {
  switch (action.type) {
    case PHOTO_AND_RELATED:
      return { ...state, ...action.payload };
      break;
    case CLEAR_PHOTO_AND_RELATED_IMAGES:
      return {};
      break;
    default:
      return state;
      break;
  }
};
