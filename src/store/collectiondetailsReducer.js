import { CONLLECTION_ALL_IMAGES_DETAILS } from "../actions/types";
let intistate = {
  startpoint: 0,
  title: "",
  totalphotos: 0,
  id: 0,
  onpage: 1,
};

export const collectiondetailsReducer = (state = intistate, action) => {
  switch (action.type) {
    case CONLLECTION_ALL_IMAGES_DETAILS:
      return { ...state, ...action.payload };
      break;
    default:
      return state;
      break;
  }
};
