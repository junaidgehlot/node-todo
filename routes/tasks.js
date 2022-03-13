const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controller/tasks');

// app.get('/api/v1/tasks')  - Get all tasks
// app.post('/api/v1/tasks') - Create a new task
// app.get('/api/v1/tasks/:id') - Get a task
// app.patch('/api/v1/tasks/:id') - Update a task
// app.delete('/api/v1/tasks/:id') - delete a task

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
