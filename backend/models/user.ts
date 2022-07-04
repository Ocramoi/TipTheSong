import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String, 
    password: String,
    isAdmin: Boolean,
    addresses: Array,
    cards: Array,
    orders: Array
});

module.exports = mongoose.model('User', userSchema);