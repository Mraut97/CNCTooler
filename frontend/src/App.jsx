
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tools from './pages/Tools';
import AddTool from './pages/AddTool';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/add-tool" element={<AddTool />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
