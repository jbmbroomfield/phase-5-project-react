const url = "ws://localhost:3000/cable"

const createSocket = (params, messageFunctions) => {
    
    const socket = new WebSocket(url)
	
    socket.onopen = event => {
		// onUpdate()
		const subscribeMsg = {
			"command": "subscribe",
			"identifier": JSON.stringify(params),
		}
		socket.send(JSON.stringify(subscribeMsg))
	}

	socket.onmessage = event => {
		const data = JSON.parse(event.data)
		const message = data.message
		if (message) {
			const messageFunction = messageFunctions[message.type]
			messageFunction && messageFunction(message)
		}
	}

    return socket

}

export default createSocket