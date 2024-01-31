import mongoose from "mongoose";

export const connectDatabase = async () => {
    try {
        const MONGODB_URI = 'mongodb+srv://admin:admin1234@cluster0.fevzmm8.mongodb.net/?retryWrites=true&w=majority';
        await mongoose.connect(MONGODB_URI);
        console.log('Database connection is successful');
    } catch (error: unknown) {
        console.log(error)
        throw new Error('Database cannot connected')
    }
}