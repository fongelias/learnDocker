const express = require('express');
const app = express();
const mongoose = require('mongoose');

//setup for mongoDB
mongoose.connect("mongodb://mongo:27017");

//routes
app.get('/', (req, res) => {
	res.send("Hello World");
});

//listen to port and print message
const server = app.listen(3000, () => {
	console.log('hello world server listening on port 3000');
});


