import {
  INIT,
  SEARCH_IMG,
  COLLECTION,
  CONLLECTION_ALL_IMAGES,
  CONLLECTION_ALL_IMAGES_DETAILS,
} from "./types";
import api from "../api";

export const init = (pageNum) => async (disptch) => {
  // let res = await api.get("/photos", {
  //   params: {
  //     per_page: "25",
  //     page: pageNum,
  //   },
  // });
  disptch({
    type: INIT,
    payload: [],
  });
};

export const searchImag = (query, pageNum) => async (disptch) => {
  console.log("hi");
  let res = await api.get("/search/photos", {
    params: {
      per_page: "25",
      page: pageNum,
      query,
    },
  });
  disptch({
    type: SEARCH_IMG,
    payload: res.data,
  });
};

export const collections = (pageNum) => async (disptch) => {
  let res = await api.get("/collections", {
    params: {
      per_page: "25",
      page: pageNum,
    },
  });
  disptch({
    type: COLLECTION,
    payload: res.data,
  });
};

export const collectionPhotos = (colid, pageNum, perpage) => async (
  disptch
) => {
  let res = await api.get(`/collections/${colid}/photos`, {
    params: {
      per_page: perpage ? perpage : "25",
      page: pageNum,
    },
  });

  disptch({
    type: CONLLECTION_ALL_IMAGES,
    payload: res.data,
  });
};
export const collectionPhotoDetails = (
  title,
  totalphotos,
  id,
  startpoint,
  onpage
) => {
  return {
    type: CONLLECTION_ALL_IMAGES_DETAILS,
    payload: {
      startpoint,
      title,
      totalphotos,
      id,
      onpage: onpage ? onpage : 1,
    },
  };
};
