import { useEffect, useState } from "react";
import { api } from "../api/api";
import TaskCard from "../components/TaskCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await api.get("/");
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-6 px-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
