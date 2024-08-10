const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studysetSchema = new Schema({
    owner_id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    flashcards: {
        type: Map,
        of: String,
    },
    public_access: Boolean,
}, {
    timestamps: true,
});

const Studyset = mongoose.model('Studyset', studysetSchema);

module.exports = Studyset;