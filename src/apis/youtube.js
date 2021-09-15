import axios from "axios";
const KEY = "AIzaSyAZHoJAxdt8-9ooF9GR2wxBnhjmnVDZ9Xw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
