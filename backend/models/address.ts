import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    name: String,
    phone: String,
    country: String,
    postalCode: String,
    address: String,
    complemment: String,
    state: String,
    city:  String,
    userId: mongoose.Types.ObjectId
});

module.exports = mongoose.model('Address', addressSchema);

