import request from '../utils/request'
export default {
    login: function ({username, password, telephone}) {
        return request({
            method: 'post',
            url: 'login',
            body: {username, password, telephone}
        })
    }
}