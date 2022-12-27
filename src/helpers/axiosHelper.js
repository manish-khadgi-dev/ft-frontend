import axios from "axios";

// ===================USER API

const baseUrl = "http://localhost:8000/api/v1";
const userAPI = baseUrl + "/user";
export const postUser = async (obj) => {
  try {
    const resp = await axios.post(userAPI, obj);
    return resp.data;
  } catch (error) {
    return {
      status: "success",
      message: "error.message",
    };
  }
};

//login user

export const loginUser = async (obj) => {
  try {
    const { data } = await axios.post(userAPI + "/login", obj);
    return data;
  } catch (error) {
    return {
      status: "success",
      message: error.message,
    };
  }
};
//=====================Transaction API
