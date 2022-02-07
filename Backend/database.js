import mongoose from "mongoose";
const {connect} = mongoose; 

const uri = "mongodb+srv://admin:0881Digital!@interviewtest.bnk5t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export default (async () => {
    try {
        const db = await connect(uri);
        console.log("DB connected to ", db.connection.name);
        
    } catch (error) {
        console.log("Error in DB: ", error);
    };
})();
