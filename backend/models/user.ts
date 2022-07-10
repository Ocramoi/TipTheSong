import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String, 
    password: String,
    isAdmin: Boolean,
    addresses: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
    ],
    cards: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Card" }
    ],
    orders: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Order" }
    ],
});

export default mongoose.model('User', userSchema);
