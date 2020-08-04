import axios from "axios";

export default axios.create({
  //baseURL: "http://192.168.100.214:8000/api/v1",
  
  baseURL: "http://127.0.0.1/api/v1",
  headers: {
   Accept : 'application/json',
    "Content-Type": 'application/json'
  },
  withCredentials: false,
});