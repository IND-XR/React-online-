import { axios } from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/', // Replace this with your API's base URL
//   headers: {
//     'Authorization': 'Bearer your_token_here', // Add your default authorization header if needed
//     'Content-Type': 'application/json', // Set the default content type for requests
  },
);

// Add a request interceptor   ( sending data it on )
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("request -----> ",config)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor   ( jab data aa raha hota hai to yah chal ta hai )
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
        console.log("response -----> ",response)

    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default instance