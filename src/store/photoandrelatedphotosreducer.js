import { PHOTO_AND_RELATED } from "../actions/types";
let initstate = {};
export const photoandrelatedphotosreducer = (state = initstate, action) => {
  switch (action.type) {
    case PHOTO_AND_RELATED:
      return action.payload;
      break;

    default:
      return state;
      break;
  }
};
