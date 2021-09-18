const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    posts: [{
        type: Schema.Types.Objectid,
        ref: 'Post'
    }]
});

module.export = mongoose.model('Post', userSchema)