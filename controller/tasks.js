const Task = require('../model/tasks');

const getAllTasks = async (req, res) => {
    // get all tasks
    try {
        const tasks = await Task.find({});
        return res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
}

const getTask = async (req, res) => {

    // get all tasks
    const { id: taskID } = req.params;
    try {
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ success: false, message: `No tasl with id: ${taskID}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
    // res.send('get single task');
    // next();
}

const createTask = async (req, res) => {
    // create a new tasks
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
    // next();
}



const deleteTask = async (req, res) => {
    // delete a task
    const { id: taskID } = req.params;
    try {
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ success: false, message: `No task with id: ${taskID}` });
        }
        res.status(200).json({ success: true, messgae: `Task-${task._id} Deleted successfully` });
    } catch (error) {
        res.status(500).json({ success: false, messgae: error });
    }
    // next();
};

const updateTask = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(400).json({ sucess: false, message: error });
    }
    // Update a task
    // res.send(' Update a task');

    // next();
};


module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };