import axios from "axios";
import {useEffect} from "react";


const API_URL = (process.env.NODE_ENV != 'production'?"https://api.jewwork.com/":"https://api.jewwork.com/")

const getCurrentUserTokken = () =>{
    return JSON.parse(localStorage.getItem("swagger_userToken"))
};


const register = (data) =>
{
     return axios.post(API_URL + "user/register",data);
}

const login = (username,password) => {
    return axios.post(API_URL + "auth/login",{username,password})
    .then((response) => {
        console.log("Done")
        if(response.data.access_token){
            // localStorage.setItem("d_user",JSON.stringify(response.data.data.user._id));
            localStorage.setItem("swagger_userToken",JSON.stringify(response.data.access_token));

        }
      return response.data;
    });
}



const AuthService = {
    register,
    login,
    getCurrentUserTokken
}


export default AuthService;