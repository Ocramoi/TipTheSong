import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    date: Date,
    status: String,
    products: [
        { type: mongoose.Types.ObjectId, ref: "Product" },
    ],
    quantities: [ Number ],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    method: String, // TODO Deveria ser um enum de tipos válidos no bancokkk
    cardId: {
        type: mongoose.Types.ObjectId,
        ref: "Card",
        required: false,
        default: null,
    },
    addressId: {
        type: mongoose.Types.ObjectId,
        ref: "Address",
    },
    createdAt: Date,
}, {
    timestamps: true,
});

export default mongoose.model('Order', orderSchema);
