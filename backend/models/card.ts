import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    cardNumber: String,
    dueData: String,
    ownerName: String,
    securityCode: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
});

export default mongoose.model('Card', cardSchema);
