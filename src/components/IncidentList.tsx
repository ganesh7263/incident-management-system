import React from 'react';
import { AlertCircle, AlertTriangle, AlertOctagon } from 'lucide-react';

interface Incident {
  id: number;
  title: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in-progress' | 'resolved';
}

const mockIncidents: Incident[] = [
  { id: 1, title: 'Server Downtime', priority: 'critical', status: 'open' },
  { id: 2, title: 'Database Connection Issue', priority: 'high', status: 'in-progress' },
  { id: 3, title: 'UI Bug in Dashboard', priority: 'medium', status: 'open' },
  { id: 4, title: 'Minor CSS Glitch', priority: 'low', status: 'resolved' },
];

const IncidentList: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Incident List</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockIncidents.map((incident) => (
              <tr key={incident.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{incident.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{incident.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <PriorityBadge priority={incident.priority} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={incident.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PriorityBadge: React.FC<{ priority: Incident['priority'] }> = ({ priority }) => {
  const colors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-orange-100 text-orange-800',
    critical: 'bg-red-100 text-red-800',
  };

  const icons = {
    low: <AlertCircle className="w-4 h-4 mr-1" />,
    medium: <AlertCircle className="w-4 h-4 mr-1" />,
    high: <AlertTriangle className="w-4 h-4 mr-1" />,
    critical: <AlertOctagon className="w-4 h-4 mr-1" />,
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[priority]}`}>
      {icons[priority]}
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </span>
  );
};

const StatusBadge: React.FC<{ status: Incident['status'] }> = ({ status }) => {
  const colors = {
    'open': 'bg-blue-100 text-blue-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    'resolved': 'bg-green-100 text-green-800',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
    </span>
  );
};

export default IncidentList;