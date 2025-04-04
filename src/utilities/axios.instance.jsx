import axios from "axios";
import Idx from "idx";
import i18n from "../i18n";

const AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_ENDPOINT}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-accept-language": i18n.language,
  },
  timeout: 1000 * 60 * 2,
});

AxiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (Idx(error, (_) => _.response.data)) {
      const errorDetail = {
        code: error.response.status,
        message: error.response.data.message,
      };

      return Promise.reject(errorDetail);
    }

    return Promise.reject(error);
  }
);

export default AxiosInstance;
