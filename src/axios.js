import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/christotle--clone/us-central1/api",
    });

export default instance;

// Localhost URL: 'http://localhost:5001/christotle--clone/us-central1/api'
// Hosting URL: 'https://christotle--clone.web.app'
// Cloud URL: 'https://us-central1-christotle--clone.cloudfunctions.net/api'
//Project Console 'https://console.firebase.google.com/project/christotle--clone/overview'
