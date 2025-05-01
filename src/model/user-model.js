import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true,
    },
});

module.exports = mongoose.model("User", userSchema);