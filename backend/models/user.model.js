const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    last_name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    ownedStudySetIDs: [String],
    favoriteStudySetIDs: [String],
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;