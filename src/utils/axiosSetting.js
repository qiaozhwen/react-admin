import axios from 'axios'
axios.withCredentials = true;
const service = axios.create({
    baseURL: "http://111.229.212.111:9529/"
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
        if(error.response.status == '401'){
            window.location.href='http://111.229.212.111:9529/console/#/login';
        }
        return Promise.reject(error)
    }
);
export default service