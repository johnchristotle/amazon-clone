import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/christotle--clone/us-central1/api",
    });

export default instance;

//'https://us-central1-christotle--clone.cloudfunctions.net/api'

