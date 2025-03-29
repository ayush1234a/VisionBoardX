import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => navigate("/whiteboard")}>Go to Whiteboard</button>
    </div>
  );
};

export default Dashboard;
