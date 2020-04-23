import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID GhgFPRjHq24CGnkTq8Yxf5xgWV_HHQ8e5ZDmsAmXeUg",
  },
});
