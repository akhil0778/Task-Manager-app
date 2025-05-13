import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "Pending",
    remarks: "",
    created_by: "Admin",
    updated_by: "Admin",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/", formData);
      alert("Task Created Successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error creating task:", error.message);
      alert("Failed to create task");
    }
  };

  return (
    <TaskForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      buttonLabel="Create"
    />
  );
};

export default CreateTask;
