import request from '../utils/request'
export default {
    checkUser(){
        return request({
            url: `/api/check`,
        })
    },
    login({username, password, telephone}){
        return request({
            method: 'post',
            url: `/api/login`,
            body: {username, password, telephone}
        })
    }
}