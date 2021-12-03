import axios from "axios";

const BASEURL = "https://todos-go.herokuapp.com/api";

export const request = async (method, url, data = null, baseURL = BASEURL) => {
  try {
    const response = axios({
      baseURL,
      url,
      method,
      data
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
