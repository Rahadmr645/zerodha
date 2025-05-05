import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config();

const DB_URL = process.env.db_url;
const connectToMongo = async () => {
    try {
        await mongoose.connect(DB_URL,{});
        console.log("DB Connected successfully");
    } catch (error) {
        console.log('Faild to connect DB');
        console.error(error);
    }
}

export default connectToMongo;