import config from "config";
import axios from "axios";
import { authHeader } from "../_helpers";
import firebase from "firebase/app";

export const userService = {
  login,
  logout,
  getById,
};

function login(email, password) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = {
        uid: userCredential.user.uid,
        token: userCredential.user.za,
      };
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function getById(id) {
  return axios
    .get(`${config.apiUrl}/users/${id}`, {
      headers: {
        ...authHeader,
      },
    })
    .then((res) => res.data);
}
