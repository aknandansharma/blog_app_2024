import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MONGODB ${mongoose.connection.host} CONNECTED!!!`.bgGreen.white);
    } catch (error) {
        console.log(`MONGO_DB ${error}!!`.bgRed.white);
    }
}

export default connectDB;

