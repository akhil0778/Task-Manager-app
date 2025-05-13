const initializeDB = require('../database/dbConfig');
const { v4: uuidv4 } = require('uuid');

const Task = {
  // 1. Get all tasks
  getAll: async () => {
    const db = await initializeDB();
    return db.all(`SELECT * FROM tasks`);
  },

  // 2. Get a task by ID
  getById: async (id) => {
    const db = await initializeDB();
    // ✅ Fixed: Passed the id and returned the result
    return db.get(`SELECT * FROM tasks WHERE id = ?`, [id]);
  },

  // 3. Create a new task
  create: async (task) => {
    const db = await initializeDB();
    const id = uuidv4();
    const { title, description, due_date, status, remarks, created_by, updated_by } = task;

    // ✅ Fixed: Added `await` for async db call and passed `task` parameter
    await db.run(
      `INSERT INTO tasks(id, title, description, due_date, status, remarks, created_by, updated_by) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, title, description, due_date, status, remarks, created_by, updated_by]
    );

    // ✅ Return the created task id
    return { id };
  },

  // 4. Update a task by ID
  update: async (id, task) => {
    const db = await initializeDB();
    const { title, description, due_date, status, remarks, updated_by } = task;

    // ✅ Fixed: Added `await` for async db call
    await db.run(
      `UPDATE tasks SET 
        title = ?,
        description = ?,
        due_date = ?,
        status = ?,
        remarks = ?,
        updated_by = ?,
        updated_on = CURRENT_TIMESTAMP
      WHERE id = ?`,
      [title, description, due_date, status, remarks, updated_by, id]
    );

    // Optional: Return the updated task
    return { id };
  },

  // 5. Delete a task by ID
  delete: async (id) => {
    const db = await initializeDB();
    // ✅ Fixed: Added `await` for async db call
    await db.run(`DELETE FROM tasks WHERE id = ?`, [id]);
    return { message: 'Task deleted successfully' };
  },

  // 6. Search for tasks
  search: async (query) => {
    const db = await initializeDB();
    // ✅ Fixed: Added `await` for async db call
    return db.all(
      `SELECT * FROM tasks WHERE 
      title LIKE ? OR 
      description LIKE ? OR 
      status LIKE ?`,
      [`%${query}%`, `%${query}%`, `%${query}%`]
    );
  },
};

module.exports = Task;
