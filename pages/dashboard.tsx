import React from 'react';
import DashboardLayout from "../src/components/DashboardLayout"; // Adjust if necessary

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-gray-700">Welcome to the CRM Dashboard!</h1>
      <p className="text-gray-600 mt-4">Here’s a summary of your activities today.</p>
    </DashboardLayout>
  );
};

export default Dashboard;
