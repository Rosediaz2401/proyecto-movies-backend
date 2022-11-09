import Message from "../../models/Message.js";

const Mutation = {
    createMessage: async ( _, { title, content, author } ) => {
        const newMessage = new Message( { title, content, author } );
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
