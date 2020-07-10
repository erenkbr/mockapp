import axios from 'axios'

const BaseURL = 'https://5f0449e88b06d60016dde400.mockapi.io/api/v1'

class AuthService {
    login(email, password) {
        return axios({
            method: 'post',
            url: `${BaseURL}/login`,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            data: {
                email,
                password
            },
        })
    }
}

export default new AuthService()