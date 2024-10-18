import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Alert {
  id: number;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

const AlertSystem: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    // Simulating incoming alerts
    const timer = setInterval(() => {
      const newAlert: Alert = {
        id: Date.now(),
        message: 'New critical incident reported!',
        type: 'error',
      };
      setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const removeAlert = (id: number) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`flex items-center p-4 rounded-lg shadow-lg ${
            alert.type === 'error' ? 'bg-red-500 text-white' :
            alert.type === 'warning' ? 'bg-yellow-500 text-black' :
            alert.type === 'success' ? 'bg-green-500 text-white' :
            'bg-blue-500 text-white'
          }`}
        >
          <span className="flex-grow">{alert.message}</span>
          <button
            onClick={() => removeAlert(alert.id)}
            className="ml-4 text-white hover:text-gray-200 focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default AlertSystem;