const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 32,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 32,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5,
        maxlength: 64,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4,
        maxlength: 18,
    },
    owned_study_set_ids: [{type: String, required: true}],
    favorite_studyset_ids: [{type: String, required: true}],
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;