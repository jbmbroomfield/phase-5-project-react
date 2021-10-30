const url = "ws://localhost:3000/cable"

const createSocket = (params, onUpdate) => {
    
    const socket = new WebSocket(url)
	
    socket.onopen = event => {
		onUpdate()
		const subscribeMsg = {
			"command": "subscribe",
			"identifier": JSON.stringify(params)
		}
		socket.send(JSON.stringify(subscribeMsg))
	}

	socket.onmessage = event => {
		const data = JSON.parse(event.data)
		if (data.message && data.message.type === 'update') {
			onUpdate()
		}
	}

    return socket

}

export default createSocket