import request from '../utils/request'
export default {
    checkUser(){
        return request({
            url: `/check`,
        })
    },
    login({username, password, telephone}){
        return request({
            method: 'post',
            url: `/login`,
            body: {username, password, telephone}
        })
    }
}