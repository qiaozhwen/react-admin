import request from '../utils/request'
export default {
    checkUser(code){
        return request({
            url: `/checkUser?code=${code}`,
        })
    }
}