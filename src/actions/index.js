import { INIT } from "./types";
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
