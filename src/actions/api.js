const baseUrl = 'http://localhost:3000/api/v1/'

const api = (url, body) => {
    const configObject = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }
    if (body) {
        configObject['body'] = JSON.stringify(body)
        configObject.headers['method'] = 'POST'
    } else {
        configObject['method'] = 'GET'
    }
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
        configObject.headers['Authorization'] = `Bearer ${jwt}`
    }
    return fetch(baseUrl + url, configObject)
    .then(response => response.json())
}

export default api