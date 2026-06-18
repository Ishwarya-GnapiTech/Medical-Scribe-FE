import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6 bg-white">
        <h1 className="text-3xl font-semibold">
          Center Panel
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;