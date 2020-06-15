import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:9527'
});
export default service