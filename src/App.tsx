import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import IncidentForm from './components/IncidentForm';
import IncidentList from './components/IncidentList';
import AlertSystem from './components/AlertSystem';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <AlertSystem />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/incidents/new" element={<IncidentForm />} />
            <Route path="/incidents" element={<IncidentList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;