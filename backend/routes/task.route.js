const express = require('express');
const Task = require('../models/task.model');

const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.json({message: 'Tasks retrieved', tasks});
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
})

// Create a new task
router.post('/', async (req, res) => {
    const { text } = req.body;

    const newTask = new Task({ text, completed: false });

    try {
        const savedTask = await newTask.save();
        res.status(201).json({message: 'Task created', task: savedTask});
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
})

// Update a task
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { text, completed } = req.body;

    try {
        const selectedTask = await Task.findById(id);

        // Check if task exists
        if (!selectedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Update task fields
        selectedTask.text = text !== undefined ? text : selectedTask.text;
        selectedTask.completed = completed !== undefined ? completed : selectedTask.completed;

        const updatedTask = await selectedTask.save();
        res.status(200).json({message: 'Task updated', task: updatedTask}); 
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
})

// Delete a task
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTask = await Task.findByIdAndDelete(id);

        // Check if task exists
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({message: 'Task deleted', task: deletedTask}); 
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
})

module.exports = router;