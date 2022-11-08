import mongoose from 'mongoose'

const uri = "mongodb+srv://admin1:Bmp07AiMOHgq6HWK@cluster0.tbwhqac.mongodb.net/?retryWrites=true&w=majority";

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => console.log("Db is connected!!"))
	.catch((err) => console.log(err));