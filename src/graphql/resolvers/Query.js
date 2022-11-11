import Movie from "../../models/Movie.js";
const Query = {

    ping() {
        return "pong"
     },

     getMovies: async () => {
       return await  Movie.find()
     }
     
}

export default Query;