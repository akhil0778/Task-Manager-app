import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">
        <Link to="/">Task Manager</Link>
      </h1>
      <div className="flex gap-4">
        <Link className="text-white hover:text-gray-300" to="/create-task">
          Create Task
        </Link>
        <Link className="text-white hover:text-gray-300" to="/">
          Home
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
