import axios from "axios";
import API_URL from './Constants';

const LoginService = () => {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }console.log(response);
        
        return response.data;
      });
}

export {
    LoginService
}