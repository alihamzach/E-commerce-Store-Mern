import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.URL);
        console.log(`Connected to MongoDb ${conn.connection.host}`);
    } catch (error) {
        console.log(`error in mongodb: ${error}`);
    }
}
export default connectDB;

