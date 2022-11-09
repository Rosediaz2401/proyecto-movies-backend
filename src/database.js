import mongoose from 'mongoose'

const uri = "mongodb+srv://proyecto:proyecto@cluster0.jc4xf2g.mongodb.net/?retryWrites=true&w=majority";

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => console.log("Db is connected!!"))
	.catch((err) => console.log(err));