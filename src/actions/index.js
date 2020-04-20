import { INIT } from "./types";
import api from "../api";

export const init = () => async (disptch) => {
  let res = await api.get("/photos", {
    params: {
      per_page: "25",
    },
  });
  disptch({
    type: INIT,
    payload: res.data,
  });
};
