const url = "ws://localhost:3000/cable"

const createSocket = (params, messageFunctions) => {
    
    const socket = new WebSocket(url)
	
    socket.onopen = event => {
		console.log('subscribing to', params)
		const subscribeMsg = {
			"command": "subscribe",
			"identifier": JSON.stringify(params),
		}
		socket.send(JSON.stringify(subscribeMsg))
	}

	socket.onmessage = event => {
		const data = JSON.parse(event.data)
		const message = data.message
		// console.log('received', data)
		if (!data.type) {
			console.log('received', data)
		}
		if (message) {
			const messageFunction = messageFunctions[message.type]
			messageFunction && messageFunction(message)
		}
	}

    return () => socket.close(1000)

}

export default createSocket