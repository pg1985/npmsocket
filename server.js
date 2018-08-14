let app = require('express')();
let http = require('http').Server(app);

//installed with -g so have to use the full path for socket.io
let io = require('/usr/local/lib/node_modules/socket.io')(http);

var clients = [];

getRandomNumber = () => {
	return 1 + Math.floor((Math.random() * 6));
}

io.on('connection', (socket) => {
	console.log("Connection established with " + ""); //add connection info 
	clients.push(socket);

	socket.on('disconnect', () =>  {
		console.log("Disconnected");
	});

	socket.on('resn', (message) => {
		console.log("Something");
		io.sockets.emit('response', {type: 'response', text: getRandomNumber()})
	});

	socket.on('message', (message) => {
		console.
		io.sockets.emit('response', {type: 'response', text: getRandomNumber()})
	});
});

http.listen(5000, () => {
    console.log('started on port 5000');
});