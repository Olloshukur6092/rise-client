import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8000/";
// axios.defaults.withCredentials = true;
// axios.defaults.headers = {

// }
export const http = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
});
