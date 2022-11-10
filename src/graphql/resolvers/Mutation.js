import Message from "../../models/Message.js";

const Mutation = {
    createMessage: async ( _, { original_language, original_title, overview, poster_path, title, video } ) => {
        const newMessage = new Message( { original_language, original_title, overview, poster_path, title, video } );
        return await newMessage.save()
    },
    deleteMessage: async( _,{_id}) => {
        await Message.findByIdAndDelete(_id)
        return await Message.find();
    },
    async updateMessage( _, { input, _id } ) {
        return await Message.findByIdAndUpdate(_id,input, {new: true})
    }
}
    


export default Mutation;
