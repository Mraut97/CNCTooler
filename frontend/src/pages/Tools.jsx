import { useEffect, useState } from 'react';
import { API_URL } from '../config';

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/tools`)
      .then((res) => res.json())
      .then((data) => setTools(data))
      .catch((err) => console.error("Failed to fetch tools:", err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Tools</h2>
      {tools.length === 0 ? (
        <p>No tools found.</p>
      ) : (
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Tool Name</th>
              <th className="p-3">Holder</th>
              <th className="p-3">Machine</th>
              <th className="p-3">Life Used</th>
              <th className="p-3">Life Max</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr key={tool._id} className="border-t">
                <td className="p-3">{tool.tool_name}</td>
                <td className="p-3">{tool.holder_type}</td>
                <td className="p-3">{tool.machine_type}</td>
                <td className="p-3">{tool.tool_life_used} min</td>
                <td className="p-3">{tool.tool_life_max} min</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Tools;
