import mongoose from "mongoose";


const Urlschema = new mongoose.Schema({
    url:String,
    Shorturl:String,
    Longurl: String,
    
});

const Url = mongoose.model('Url', Urlschema)

export default Url;