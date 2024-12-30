import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
configDotenv();

const conectarDB = async () =>{
    try {        
        await mongoose.connect(process.env.MONGO_URI,{
            maxPoolSize: process.env.MONGO_MAX_POOL_SIZE,
            authSource: process.env.MONGO_AUTH_SOURCE,
            user: process.env.MONGO_USER,
            pass: process.env.MONGO_PASSWORD
        });
    } catch (error) {
        console.error(`error: ${error.message}`);
        process.exit(1);
    }
}

export default conectarDB;