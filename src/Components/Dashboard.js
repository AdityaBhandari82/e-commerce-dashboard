import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
// import { icon } from "react-bootstrap-icons";
import Header from './Header';
import Sales from "./Sales.png";
const Dashboard = () => {
  const metrics = [
    {
      title: "Total User",
      value: "40,689",
      icon: "bi bi-people-fill",
      trend: "8.5% Up from yesterday",
      trendClass: "text-success",
    },
    {
      title: "Total Order",
      value: "10,293",
      icon: "bi bi-box-seam",
      trend: "1.3% Up from past week",
      trendClass: "text-success",
    },
    {
      title: "Total Sales",
      value: "$89,000",
      icon: "bi bi-bar-chart-line-fill",
      trend: "4.3% Down from yesterday",
      trendClass: "text-danger",
    },
    {
      title: "Total Pending",
      value: "2,040",
      icon: "bi bi-clock-history",
      trend: "1.8% Up from yesterday",
      trendClass: "text-success",
    },
  ];

  return (
    <div className="d-flex">
    <Sidebar />
    <div className="container my-4">
    <Header />
    <div>
      <h2 className="m-4">Dashboard</h2>
    </div>
      <div className="row  " >
        {metrics.map((metric, index) => (
          <div className="col-md-3 mb-4" key={index}>
           
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <div className="d-flex" style={{justifyContent:'space-between'}}>
                <div>
                <h5 className="card-title">{metric.title}</h5>
                
                <h3 className="card-text fw-bold">{metric.value}</h3>
                </div>
                <div>
                <i className={`${metric.icon} fs-1 mb-3 text-muted`}></i>
                </div>
                </div>
                <div className={`mt-2 ${metric.trendClass}`}>
                  </div>
                  <i
                    className={`bi ${
                      metric.trendClass.includes("success")
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                    }`}
                  ></i>{" "}
                  {metric.trend}
                
              </div>
            </div>
          </div>
        ))}
        <div className="graph">
   <img className="img-fluid" src={Sales} alt=""/>
 </div>
 <div className="container my-4">
<h6>Deals Details</h6>
 </div>
      </div>



    </div>
    </div>
  );
};

export default Dashboard;
