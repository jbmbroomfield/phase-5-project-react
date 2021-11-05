import { getJwt } from "../jwt"

class API {

    static #BASE_URL = 'http://localhost:3000/api/v1/'
    static #BASE_HEADERS = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    static get(url) {
        return this.fetchFromAPI(url, 'GET')
    }

    static post(url, body) {
        return this.fetchFromAPI(url, 'POST', body)
    }

    static delete(url, body) {
        return this.fetchFromAPI(url, 'DELETE', body)
    }

    static headers = () => {
        const headers = { ...this.#BASE_HEADERS }
        const jwt = getJwt()
        if (jwt) {
            (headers['Authorization'] = `Bearer ${jwt}`)
        }
        return headers
    }

    static configObject = (method, body) => {
        const configObject = { headers: this.headers(), method: method }
        if (body) {
            configObject['body'] = JSON.stringify(body)
        }
        return configObject
    }

    static async fetchFromAPI(url, method, body) {
        const response = await fetch(this.#BASE_URL + url, this.configObject(method, body))
        return await response.json()
    }

}

export default API