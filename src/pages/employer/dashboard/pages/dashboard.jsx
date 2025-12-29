import React, { useEffect, useState } from 'react';
import '../assets/css/material-dashboard.css';
import '../assets/css/material-dashboard.min.css';
import DashboardWrapper from './DashboardLayout.jsx';
import Chart from 'chart.js/auto';


export default function HomeDashboard() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  useEffect(() => {
    // Crucial for Material Dashboard responsiveness
    document.body.classList.add('g-sidenav-show', 'bg-gray-100');
    
    const charts = [];
    const chartConfig = { responsive: true, maintainAspectRatio: false };

    const setupChart = (id, type, labels, data, color) => {
      const ctx = document.getElementById(id);
      if (ctx) {
        charts.push(new Chart(ctx, {
          type: type,
          data: {
            labels: labels,
            datasets: [{ 
              label: 'Performance', 
              data: data, 
              backgroundColor: type === 'bar' ? color : 'transparent',
              borderColor: color, 
              tension: 0.4,
              fill: true
            }],
          },
          options: chartConfig
        }));
      }
    };

    setupChart("chart-bars", "bar", ["M", "T", "W", "T", "F", "S", "S"], [50, 45, 22, 28, 50, 60, 76], "#43A047");
    setupChart("chart-line", "line", ["M", "T", "W", "T", "F", "S", "S"], [50, 40, 300, 220, 500, 250, 400], "#43A047");
    setupChart("chart-line-tasks", "line", ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], [50, 40, 300, 220, 500, 250, 400], "#43A047");

    return () => charts.forEach(chart => chart.destroy());
  }, []);

  return (
    <DashboardWrapper activePage="dashboard" isSidenavOpen={isSidenavOpen} toggleSidenav={toggleSidenav}>
      
      <div className="ms-3 mb-4">
        <h3 className="mb-0 h4 font-weight-bolder">Dashboard Overview</h3>
        <p className="mb-0 text-sm text-secondary">Check the sales, value and bounce rate by country.</p>
      </div>

      {/* Responsive Grid for Stats Cards */}
      <div className="row">
        {[
          { label: "Today's Money", val: "$53k", icon: "weekend", perc: "+55%", color: "success" },
          { label: "Today's Users", val: "2300", icon: "person", perc: "+3%", color: "success" },
          { label: "Ads Views", val: "3,462", icon: "leaderboard", perc: "-2%", color: "danger" },
          { label: "Sales", val: "$103,430", icon: "weekend", perc: "+5%", color: "success" }
        ].map((item, i) => (
          <div key={i} className="col-lg-3 col-sm-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-header p-2 ps-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="text-sm mb-0 text-capitalize">{item.label}</p>
                    <h4 className="mb-0">{item.val}</h4>
                  </div>
                  <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark text-center border-radius-lg">
                    <i className="material-symbols-rounded opacity-10">{item.icon}</i>
                  </div>
                </div>
              </div>
              <hr className="dark horizontal my-0" />
              <div className="card-footer p-2 ps-3">
                <p className="mb-0 text-sm"><span className={`text-${item.color} font-weight-bolder`}>{item.perc} </span>than last week</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Grid for Charts */}
      <div className="row mt-4">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="mb-0 text-dark">Website Views</h6>
              <div className="chart" style={{ height: '200px' }}><canvas id="chart-bars"></canvas></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="mb-0 text-dark">Daily Sales</h6>
              <div className="chart" style={{ height: '200px' }}><canvas id="chart-line"></canvas></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="mb-0 text-dark">Completed Tasks</h6>
              <div className="chart" style={{ height: '200px' }}><canvas id="chart-line-tasks"></canvas></div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Table Row */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header pb-0"><h6>Projects</h6></div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive">
                <table className="table align-items-center mb-0 w-100">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Companies</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Budget</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><div className="d-flex px-2 py-1"><h6 className="mb-0 text-sm">Material XD Version</h6></div></td>
                      <td className="align-middle text-center text-sm"><span className="text-xs font-weight-bold">$14,000</span></td>
                      <td className="align-middle"><div className="progress-wrapper w-75 mx-auto"><div className="progress"><div className="progress-bar bg-gradient-info" style={{ width: '60%' }}></div></div></div></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
}