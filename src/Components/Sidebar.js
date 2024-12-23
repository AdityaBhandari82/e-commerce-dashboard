import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Collapse } from 'bootstrap';
import { Link } from 'react-router-dom';
const Sidebar = ()=>{
    return(
  
<div>

<div className="d-flex flex-column vh-100 bg-light col-6" style={{ width: '250px' }}>
    <div className="p-3">
        <h4 className="text-primary">DashStack</h4>
        
        <ul className="nav flex-column mt-3">
            <li className="nav-item">
                <Link to="/Dashboard" className="nav-link active text-primary">
                    <i className="bi bi-house-door"></i> Dashboard
                </Link>
            </li>
            <li className="nav-item">
                <Link to ="/Product" className="nav-link text-dark">
                    <i className="bi bi-box"></i> Products
                </Link>
            </li>
            <li className="nav-item">
                <Link to ="/Favorites" className="nav-link text-dark">
                    <i className="bi bi-heart"></i> Favorites
                </Link>
            </li>
            <li className="nav-item">
                <Link to ="/Inbox" className="nav-link text-dark">
                    <i className="bi bi-envelope"></i> Inbox
                </Link>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                    <i className="bi bi-list-check"></i> Order Lists
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                    <i className="bi bi-box-seam"></i> Product Stock
                </a>
            </li>
        </ul>
        <hr />
        <ul className="nav flex-column">
            <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                    <i className="bi bi-calendar"></i> Calendar
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                    <i className="bi bi-clipboard-check"></i> To-Do
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                    <i className="bi bi-people"></i> Contact
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                    <i className="bi bi-file-text"></i> Invoice
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                    <i className="bi bi-ui-checks"></i> UI Elements
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                    <i className="bi bi-people-fill"></i> Team
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                    <i className="bi bi-table"></i> Table
                </a>
            </li>
        </ul>
        <hr />
        <ul className="nav flex-column">
            <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                    <i className="bi bi-gear"></i> Settings
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                    <i className="bi bi-box-arrow-left"></i> Logout
                </a>
            </li>
        </ul>
        
    </div>
</div>
</div>
    );
}
export default Sidebar;