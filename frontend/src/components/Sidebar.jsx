
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h1 className="text-2xl font-bold mb-6">CNC Tool Tracker</h1>
      <nav className="flex flex-col gap-2">
        <Link to="/" className="hover:text-blue-600">Dashboard</Link>
        <Link to="/tools" className="hover:text-blue-600">Tools</Link>
        <Link to="/add-tool" className="hover:text-blue-600">Add Tool</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
