import Message from "../../models/Message.js";
const Query = {

    ping() {
        return "pong"
     },

     getMessages: async () => {
       return await  Message.find()
     }
     
}

export default Query;