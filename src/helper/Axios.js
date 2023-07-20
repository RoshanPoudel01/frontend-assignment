import axios from "axios";

export const apiCall = axios.create({
  baseURL: "https://fakestoreapi.com/",

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
