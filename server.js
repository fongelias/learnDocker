const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send("Hello World");
});

const server = app.listen(3000, () => {
	console.log('hello world server listening on port 3000');
});


