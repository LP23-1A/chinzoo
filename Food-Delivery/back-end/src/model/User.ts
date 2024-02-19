import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: String,
    avatarImage: Buffer,
    email: String,
    address: String,
    
    
});

const UserModel = mongoose.model('User',  UserSchema);

export { UserModel };