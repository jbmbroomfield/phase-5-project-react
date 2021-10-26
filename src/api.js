const baseUrl = 'http://localhost:3000/api/v1/'

const api = (url, body, method = 'GET', jwt) => {
    const configObject = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }
    if (body && method === 'POST') {
        configObject['body'] = JSON.stringify(body)
    }
    if (jwt) {
        configObject.headers['Authorization'] = `Bearer ${jwt}`
    }
    return fetch(baseUrl + url, configObject)
    .then(response => response.json())
}

export default api