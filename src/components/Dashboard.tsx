import React from 'react';
import { PieChart, BarChart2, AlertCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Total Incidents"
          value="42"
          icon={<PieChart className="w-8 h-8 text-blue-500" />}
        />
        <DashboardCard
          title="Open Incidents"
          value="15"
          icon={<BarChart2 className="w-8 h-8 text-yellow-500" />}
        />
        <DashboardCard
          title="Critical Incidents"
          value="3"
          icon={<AlertCircle className="w-8 h-8 text-red-500" />}
        />
      </div>
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {icon}
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default Dashboard;