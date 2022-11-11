import Movie from "../../models/Movie.js";

const Mutation = {
    createMovie: async ( _, { original_language, original_title, overview, poster_path, title, video } ) => {
        const newMovie = new Movie( { original_language, original_title, overview, poster_path, title, video } );
        return await newMovie.save()
    },
    deleteMovie: async( _,{_id}) => {
        await Movie.findByIdAndDelete(_id)
        return await Movie.find();
    },
    async updateMovie( _, { input, _id } ) {
        return await Movie.findByIdAndUpdate(_id,input, {new: true})
    }
}
    


export default Mutation;
