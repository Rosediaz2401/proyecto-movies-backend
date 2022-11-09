import { Schema, model } from "mongoose";
const movieSchema = new Schema({ name: Number });

const messageSchema = new Schema( {
    adult: {
        type: Boolean
    },
    backdrop_path: {
        type: String
    },
    genre_ids: {
        type: [movieSchema],
        default: undefined
    },
    original_language: {
        type: String
    },
    original_title: {
        type: String
    },
    overview: {
        type: String
    },
    // popularity: {
    //     type: Number
    // },
    poster_path: {
        type: String
    },
    // release_date: {
    //     type: Date
    // },
    title: {
        type: String
    },
    video: {
        type: Boolean
    },
    // vote_average: {
    //     type: Number
    // },
    // vote_count: {
    //     type: Number
    // }
} )

export default model("Message", messageSchema)