import { Schema, model } from "mongoose";

const movieSchema = new Schema( {
    original_language: {
        type: String
    },
    original_title: {
        type: String
    },
   
    overview: {
        type: String
    },
    poster_path: {
        type: String
    },
    title: {
        type: String
    },
    video: {
        type: Boolean
    },
} )

export default model("movie_project", movieSchema)