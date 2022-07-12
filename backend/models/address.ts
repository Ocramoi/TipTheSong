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
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
});

export default mongoose.model('Address', addressSchema);
