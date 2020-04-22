import { INIT, SEARCH_IMG } from "./types";
import api from "../api";

export const init = (pageNum) => async (disptch) => {
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

export const searchImag = (query, pageNum) => async (disptch) => {
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
