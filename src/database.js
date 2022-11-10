import mongoose from 'mongoose'
require('dotenv').config({path: __dirname + "/.env"})

const uri = process.env.PROYECTO_URI;

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => console.log("Db is connected!!"))
	.catch((err) => console.log(err));