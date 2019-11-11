import axios from "axios";

const instance = axios.create({
  baseURL: "https://dentist-ptsim-api.azurewebsites.net"
});

export default instance;
