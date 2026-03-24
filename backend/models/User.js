import mongoose from "mongoose"; //allows us to use schemas

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique: true

    },

    password:{
        type: String,
        required:true,
        minLength: 5
    },

    email:{
        type: String,
        required:true,
        unique: true
    }

})

const User = mongoose.model('USer', userSchema)
export default User;