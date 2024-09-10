// src/pages/Dashboard.jsx
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Header />
        
        {/* Main Content */}
        <main className="p-6">
          <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
          
          {/* Placeholder for Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">Active Projects</div>
            <div className="bg-white p-4 rounded shadow">Completed Tasks</div>
            <div className="bg-white p-4 rounded shadow">Pending Approvals</div>
          </div>
          
          {/* Placeholder for Recent Activities */}
          <div className="mt-6 bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Recent Activities</h2>
            <p className="text-gray-600">No recent activities.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
