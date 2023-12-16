import axios from "axios";

const url = "https://backend-shawandparners.onrender.com";
const axiosClient = axios.create({ baseURL: `${url}/api` });

export const client = {
  get: axiosClient.get,
};
