import mongoose, { mongo } from "mongoose";

const OrderSchema = new mongoose.Schema({
    Userid : [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    orderNumber :   Number,
    foods : [],
    totalPrice : Number,
    process : ["order", "complate"] ,
    createdDate : {
        type : Date,
        default : () => Date.now()
    },
    district : String,
    Khoroo : String,
    Apartment : String,
})

const OrderModel = mongoose.model('Order', OrderSchema);

export {OrderModel}