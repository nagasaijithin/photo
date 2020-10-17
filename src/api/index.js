import axios from "axios";
export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.unsplash.com/",
  withCredentials: false,

  headers: {
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    Authorization: "Client-ID GhgFPRjHq24CGnkTq8Yxf5xgWV_HHQ8e5ZDmsAmXeUg",
  },
});
