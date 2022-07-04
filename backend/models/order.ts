import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    date: Date,
    status: String,
    total:  Number,
    userId: mongoose.Types.ObjectId
});

module.exports = mongoose.model('Order', orderSchema);