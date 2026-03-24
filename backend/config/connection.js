import mongoose from "mongoose";

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
            console.log('MongooDB')
        
    }catch(err){
        console.log(err);
        process.exit(1); // stop app if DB fails
    }
}

connectDB();