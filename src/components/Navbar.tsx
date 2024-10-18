import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <AlertTriangle className="mr-2" />
            <span className="font-bold text-xl">IMS</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-blue-200">Dashboard</Link>
            <Link to="/incidents/new" className="hover:text-blue-200">New Incident</Link>
            <Link to="/incidents" className="hover:text-blue-200">Incidents</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;