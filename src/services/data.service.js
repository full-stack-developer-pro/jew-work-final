// import axios from "axios";
// import AuthService from "./auth.service";
// // import {useEffect} from "react";


//const API_URL = (process.env.NODE_ENV != 'production'?"https://api.jewwork.com/":"https://api.jewwork.com/")

// axios.interceptors.request.use(function(config){
//      const token = AuthService.getCurrentUserToken;
//      config.headers.Authorization = 'Bearer ' +token;

//      return config;
// });


// axios.interceptors.response.use(function(response){
//     return response;
// },function(error){
//     if(error.response.status === 401){
//         localStorage.removeItem("wagger_userToken");
//     }
//     return Promise.reject(error);
// })

//  const profile = () =>
//    {
//     return axios.get(API_URL + "auth/profile")
  //  }



// const DataService = {
//     profile
// }


// export default DataService;


import axios from "axios";
import AuthService from "./auth.service";

const API_URL = (process.env.NODE_ENV != 'production'?"https://api.jewwork.com/":"https://api.jewwork.com/")


axios.interceptors.request.use(function (config) {
    const token = AuthService.getCurrentUserTokken();
    config.headers.Authorization =  'Bearer '+token;
     
    return config;
});
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("swagger_userToken");
      // window.location.href ='/#/login'
      // Hace la solicitud de refresco de tokens
    }
    return Promise.reject(error);
  });

  const profile = () => {
    return axios.get(API_URL + "auth/profile");
  };
  const DataService = {
    profile

  }
  export default DataService;
