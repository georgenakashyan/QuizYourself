const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studysetSchema = new Schema({
    owner_id: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    flashcards: {
        type: Map,
        of: String,
        required: true,
    },
    public_access: {type: Boolean, required: true},
}, {
    timestamps: true,
});

const Studyset = mongoose.model('Studyset', studysetSchema);

module.exports = Studyset;