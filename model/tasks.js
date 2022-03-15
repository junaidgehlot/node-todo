const mongoose = require('mongoose');

const TASKSCHEMA = new mongoose.Schema({
    name: { 
        type: String,
        required:[true, 'Please provide name'],
        trim: true,
        max: 20
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task',TASKSCHEMA);