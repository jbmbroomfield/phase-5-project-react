import { getJwt } from "../jwt"

const baseUrl = 'http://localhost:3000/api/v1/'

const baseHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const headers = () => {
    const headers = { ...baseHeaders }
    const jwt = getJwt()
    jwt && (headers['Authorization'] = `Bearer ${jwt}`)
    return headers
}

const method = body => body ? 'POST' : 'GET'

const configObject = (body, setMethod) => {
    const configObject = { headers: headers(), method: setMethod || method(body) }
    body && (configObject['body'] = JSON.stringify(body))
    return configObject
}

const api = (url, body) => {
    let setMethod
    if (body === 'DELETE') {
        setMethod = 'DELETE'
        body = undefined
    } else {
        setMethod = undefined
    }
    return fetch(baseUrl + url, configObject(body, setMethod))
    .then(response => response.json())
}

export default api