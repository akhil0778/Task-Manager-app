import React from "react";

const TaskForm = ({ formData, handleChange, handleSubmit, buttonLabel }) => {
  return (
    <div className="container mx-auto mt-8 p-6 max-w-xl bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">{buttonLabel} Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.description}
          onChange={handleChange}
          rows="4"
        />
        <input
          type="date"
          name="due_date"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.due_date}
          onChange={handleChange}
        />
        <select
          name="status"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <textarea
          name="remarks"
          placeholder="Remarks"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.remarks}
          onChange={handleChange}
          rows="3"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 rounded-lg hover:opacity-90 transition-all"
        >
          {buttonLabel} Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
