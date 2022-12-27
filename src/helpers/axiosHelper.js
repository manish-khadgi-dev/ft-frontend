import axios from "axios";

// ===================USER API

const baseUrl = "http://localhost:8000/api/v1";
const userAPI = baseUrl + "/user";
const transAPI = baseUrl + "/transaction";

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

//return user id
const getUserId = () => {
  const userStr = sessionStorage.getItem("user");
  const userObj = userStr ? JSON.parse(userStr) : null;
  return userObj?._id || null;
};

//=====================Transaction API

export const fetchTransaction = async () => {
  try {
    const userId = getUserId();

    if (!userId) {
      return {
        status: "error n ",
        message: "Please login first",
      };
    }

    const { data } = await axios.get(transAPI, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "success",
      message: error.message,
    };
  }
};
