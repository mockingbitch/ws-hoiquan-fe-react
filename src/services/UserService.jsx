import axios from "axios";
import API_URL from './Constants';

const LoginService = (email, password) => {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem("token", JSON.stringify(response.data.access_token));
          localStorage.setItem("user", response.data.user);
        }console.log(response);
        
        return response.data;
      });
}

export {
    LoginService
}