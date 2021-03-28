import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    //log every api call for development
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    console.log("response", response.data);
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

const requestApi = (endpoint, params, method = "GET") => {
  return instance.request({ url: endpoint, method, params });
};

export default requestApi;
