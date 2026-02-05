import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
    const location = useLocation();

    const menuItems = [
        { path: '/', icon: 'bi-speedometer2', label: 'Dashboard' },
        { path: '/projects', icon: 'bi-folder', label: 'Projects' },
        { path: '/tasks', icon: 'bi-check2-square', label: 'Tasks' },
        { path: '/team', icon: 'bi-people', label: 'Team' },
        { path: '/calendar', icon: 'bi-calendar3', label: 'Calendar' },
        { path: '/reports', icon: 'bi-graph-up', label: 'Reports' },
        { path: '/settings', icon: 'bi-gear', label: 'Settings' },
    ];

    return (
        <div className={`sidebar bg-dark ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-content">
                <ul className="nav flex-column">
                    {menuItems.map((item) => (
                        <li className="nav-item" key={item.path}>
                            <Link
                                to={item.path}
                                className={`nav-link text-white ${location.pathname === item.path ? 'active' : ''
                                    }`}
                            >
                                <i className={`bi ${item.icon} me-2`}></i>
                                <span className="sidebar-text">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
