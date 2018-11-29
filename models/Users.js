const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name required"
    },

    // kudos: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Kudos"
    // }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;