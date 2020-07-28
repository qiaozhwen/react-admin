import axios from 'axios'
axios.withCredentials = true;
const service = axios.create({
    baseURL: process.env.NODE_ENV
});
console.log('111111111111111111', process.env);
service.defaults.timeout = 10000;
service.interceptors.request.use(
    config=>{
        config.headers.authorization = 'test token';
        return config
    }, error => {
        Promise.reject(error)
    }
);
service.interceptors.response.use(
    response => {
        console.log('-------------response', response);
        return response
    },error => {
        console.log('-------------error', error.response.status);
        // window.location.href='http://localhost:3000/#/login';
        return Promise.reject(error)
    }
);
export default service