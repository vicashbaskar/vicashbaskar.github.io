import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css';

export class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-bar-container">
                <nav className="nav-bar">
                    <Link to='/Home' className="nav-link">Home</Link>
                    <Link to='/EmployeeList' className="nav-link">EmployeeList</Link>
                    <Link to='/EmployeeDetail' className="nav-link">EmloyeeDetail</Link>
                    <Link to='/Pagination' className="nav-link">Pagination</Link>
                    <Link to='/Singin' className="nav-link">Sign in</Link>
                    <Link to='/About' className="nav-link">About</Link>
                    <Link to='/Services' className="nav-link">Services</Link>
                    <Link to='/Welcome' className="nav-link">Welcome</Link>
                    <Link to='/Counter' className="nav-link">Counter</Link>
                </nav>
            </div>
        )
    }
}