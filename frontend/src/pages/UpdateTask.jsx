import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "Pending",
    remarks: "",
    updated_by: "Admin",
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await api.get(`/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching task:", error.message);
      }
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/${id}`, formData);
      alert("Task Updated Successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating task:", error.message);
      alert("Failed to update task");
    }
  };

  return (
    <div className="container mx-auto mt-8 p-6 max-w-xl bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="date"
          name="due_date"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.due_date}
          onChange={handleChange}
        />
        <select
          name="status"
          className="w-full p-2 border border-gray-300 rounded"
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
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.remarks}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-all"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
