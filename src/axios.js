import axios from "axios";

const instance = axios.create({
  baseSearchURL: "https://api.tvmaze.com/search/shows?q=girls",
});

console.log(instance);
export default instance;
