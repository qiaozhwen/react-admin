import axios from 'axios'
axios.defaults.withCredentials = true;
const service = axios.create({
    baseURL: 'http://localhost:9527/'
});
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
        return Promise.reject(error)
    }
);
export default service