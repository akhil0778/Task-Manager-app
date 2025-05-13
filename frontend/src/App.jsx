import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import UpdateTask from "./pages/UpdateTask";
import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-task" element={<CreateTask />} />
      <Route path="/update-task/:id" element={<UpdateTask />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
