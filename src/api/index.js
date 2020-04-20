import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID R8Jj663I6pw8ftK7pgD5FPu9LwALY_4A4NXb_3HT8Fo",
  },
});
