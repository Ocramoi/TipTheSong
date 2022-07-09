import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    cardNumber: String,
    dueData: String,
    ownerName: String,
    securityCode: String,
    userId: mongoose.Types.ObjectId
});

export default mongoose.model('Card', cardSchema);
