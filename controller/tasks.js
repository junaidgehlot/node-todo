const getAllTasks = (req, res, next) => {
    // get all tasks
    res.send('get all tasks');
    next();
}

const getTask = (req, res, next) => {
    // get all tasks
    res.json(req.params);
    // res.send('get single task');
    next();
}

const createTask = (req, res, next) => {
    // create a new tasks
    res.json(req.body);
    next();
}

const updateTask = (req, res, next) => {
    // Update a task
    // res.send(' Update a task');
    res.json({params: req.params, body: req.body});
    next();
}

const deleteTask = (req, res, next) => {
    // delete a task
    res.send('delete a task');
    next();
};


module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };