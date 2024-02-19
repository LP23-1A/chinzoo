import mongoose from "mongoose";


const FoodSchema = new mongoose.Schema({
    image: String,
    FoodName: String,
    Price : Number, 
    Discount:{
        String,
        default:0
    } ,
    ingeredient: String
})


const FoodModel = mongoose.model('Model',FoodSchema )

export {FoodModel}