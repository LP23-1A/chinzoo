import mongoose from "mongoose";


const Urlschema = new mongoose.Schema({
    url:String,
});

const Url = mongoose.model('Url', Urlschema)

export default Url;