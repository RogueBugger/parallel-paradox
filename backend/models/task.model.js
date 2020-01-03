const mongoose = require('mongoose');
const schema = mongoose.Schema;

const taskSchema = new schema({
    taskname:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    taskDuration:{
        type: Number,
        required: true,
    },
    task_description:{
        type: String,
        trim: true,
        required: true
    },
    deadline:{
        type:Date,
        required: true
    }
},{
    timestamps: true
});

const task = mongoose.model('task', taskSchema);
module.exports = task;