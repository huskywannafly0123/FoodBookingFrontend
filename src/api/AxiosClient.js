import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5029/api" 
});

export default client;