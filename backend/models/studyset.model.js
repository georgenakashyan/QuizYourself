const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studySetSchema = new Schema({
    owner_id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    flashcards: [{
        question: String,
        answer: String,
    }],
    public_access: Boolean,
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;