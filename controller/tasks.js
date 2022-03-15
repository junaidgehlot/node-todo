const Task = require('../model/tasks');
const asyncWrapper = require('../middleware/async');
const {customErrorMethod} = require('../errors/custom-error');


const getAllTasks = asyncWrapper(async (req, res) => {
    // get all tasks
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
})

const getTask = asyncWrapper(async (req, res, next) => {

    // get all tasks
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        console.log(customErrorMethod);
        return next(customErrorMethod(`No task with id: ${taskID}`, 404 ));
        // const error = new Error('No Task');
        // error.status = 404;
        // return next(error);
        // return res.status(404).json({ success: false, message: `No tasl with id: ${taskID}` });
    }
    res.status(200).json({ task });
    // res.send('get single task');
    // next();
});

const createTask = asyncWrapper(async (req, res) => {
    // create a new tasks
    const task = await Task.create(req.body);
    res.status(201).json(task);
    // next();
});



const deleteTask = asyncWrapper(async (req, res) => {
    // delete a task
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return res.status(404).json({ success: false, message: `No task with id: ${taskID}` });
    }
    res.status(200).json({ success: true, messgae: `Task-${task._id} Deleted successfully` });
    // next();
});

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({_id: taskID},req.body,{
        new: true,
        runValidators: true
    });
    if (!task) {
        return res.status(404).json({ success: false, message: `No task with id: ${taskID}` });
    }
    console.log(task);
    res.json({task});

});


module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };