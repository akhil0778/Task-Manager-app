const Task = require('../models/task.model');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.getAll();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.getById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    // Replace "admin" with "Akhilesh"
    const newTask = {
      ...req.body,
      created_by: "Akhilesh",
      updated_by: "Akhilesh",
    };

    const result = await Task.create(newTask);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = {
      ...req.body,
      updated_by: "Akhilesh",
    };
    await Task.update(req.params.id, updatedTask);
    res.status(200).json({ message: 'Task updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.delete(req.params.id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const searchTasks = async (req, res) => {
  try {
    const tasks = await Task.search(req.query.q);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  searchTasks
};
