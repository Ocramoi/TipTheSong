import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    launchDate: Number,
    frontCover: String,
    artists: [ String ],
    genres: [ String ],
    shortDescription: String,
    longDescription: String,
    extraInfo: String,
    price: Number,
    amountInStock: Number,
    amountSold: Number,
})

export default mongoose.model('Product', productSchema);
