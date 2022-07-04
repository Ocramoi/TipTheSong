import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    launchDate: String,
    frontCover: String, 
    artists: Array,
    genres: Array,
    shortDescription: String,
    longDescription: String,
    extraInfo: String,
    price: Number,
    amountInStock: Number,
    amountSold: Number,
})

module.exports = mongoose.model('Product', productSchema);