import {
  INIT,
  SEARCH_IMG,
  COLLECTION,
  CONLLECTION_ALL_IMAGES,
  CONLLECTION_ALL_IMAGES_DETAILS,
  PHOTO_AND_RELATED,
  CLEAR_PHOTO_AND_RELATED_IMAGES,
  CLEAR_IMAGES,
  CLEAR_COLLECTION,
  MAIN_LOADER_ADD,
  MAIN_LOADER_REMOVE,
} from "./types";
import api from "../api";

// staring state setup and featch data from api
export const init = (pageNum) => async (disptch) => {
  disptch({
    type: MAIN_LOADER_ADD,
  });
  await disptch(getPhotos(pageNum));
  disptch({
    type: MAIN_LOADER_REMOVE,
  });
};

// get some photos from api
const getPhotos = (pageNum) => async (disptch) => {
  let res = await api.get("/photos", {
    params: {
      per_page: "25",
      page: pageNum,
    },
  });
  disptch({
    type: INIT,
    payload: res.data,
  });
};

// searching data using user input
export const searchImag = (query, pageNum) => async (disptch) => {
  disptch({
    type: MAIN_LOADER_ADD,
  });
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
  disptch({
    type: MAIN_LOADER_REMOVE,
  });
};

export const collections = (pageNum) => async (disptch) => {
  disptch({
    type: MAIN_LOADER_ADD,
  });
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
  disptch({
    type: MAIN_LOADER_REMOVE,
  });
};

export const collectionPhotos = (colid, pageNum, perpage) => async (
  disptch
) => {
  disptch({
    type: MAIN_LOADER_ADD,
  });
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
  disptch({
    type: MAIN_LOADER_REMOVE,
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

export const getaPhoto = (photoid) => async (disptch) => {
  disptch({
    type: MAIN_LOADER_ADD,
  });
  let res1 = await api.get(`photos/${photoid}`);
  let res2 = await api.get(`photos/${photoid}/related`);
  disptch({
    type: PHOTO_AND_RELATED,
    payload: { mainphoto: res1.data, relatedphotos: res2.data },
  });
  disptch({
    type: MAIN_LOADER_REMOVE,
  });
};

export const clearImags = () => {
  return {
    type: CLEAR_IMAGES,
  };
};
export const clearPhotoimages = () => {
  return {
    type: CLEAR_PHOTO_AND_RELATED_IMAGES,
  };
};
export const clearcollections = () => {
  return {
    type: CLEAR_COLLECTION,
  };
};

export const mainloaderAdd = () => {
  return {
    type: MAIN_LOADER_ADD,
  };
};

export const mainloaderRemove = () => {
  return {
    type: MAIN_LOADER_ADD,
  };
};
