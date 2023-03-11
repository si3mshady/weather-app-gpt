import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <div className="widget">
          <div className="widget-header">
            <h2>Widget 1</h2>
          </div>
          <div className="widget-body">
            <p>This is the content for Widget 1</p>
          </div>
        </div>
        <div className="widget">
          <div className="widget-header">
            <h2>Widget 2</h2>
          </div>
          <div className="widget-body">
            <p>This is the content for Widget 2</p>
          </div>
        </div>
        <div className="widget">
          <div className="widget-header">
            <h2>Widget 3</h2>
          </div>
          <div className="widget-body">
            <p>This is the content for Widget 3</p>
          </div>
        </div>
        <div className="widget">
          <div className="widget-header">
            <h2>Widget 4</h2>
          </div>
          <div className="widget-body">
            <p>This is the content for Widget 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
