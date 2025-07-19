import React from 'react';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md">
        {/* Sidebar content can go here */}
        <h2 className="text-lg font-semibold p-4">Dashboard</h2>
        <nav className="mt-4">
          <a href="/dashboard" className="block p-4 text-sm text-gray-700 hover:bg-gray-200">Dashboard</a>
          <a href="/profile" className="block p-4 text-sm text-gray-700 hover:bg-gray-200">Profile</a>
          <a href="/sessions" className="block p-4 text-sm text-gray-700 hover:bg-gray-200">Sessions</a>
          <a href="/mentors" className="block p-4 text-sm text-gray-700 hover:bg-gray-200">Mentors</a>
          <a href="/feedback" className="block p-4 text-sm text-gray-700 hover:bg-gray-200">Feedback</a>
        </nav>
      </div>
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
