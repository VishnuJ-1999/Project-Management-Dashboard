import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StatCard.css';

const StatCard = ({ title, value, icon, color = 'primary', trend }) => {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className={`card stat-card border-0 shadow-sm h-100`}>
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                            <p className="text-muted mb-2 stat-title">{title}</p>
                            <h2 className="mb-0 stat-value">{value}</h2>
                            {trend && (
                                <small className={`trend ${trend.type === 'up' ? 'text-success' : 'text-danger'}`}>
                                    <i className={`bi bi-arrow-${trend.type} me-1`}></i>
                                    {trend.value}
                                </small>
                            )}
                        </div>
                        <div className={`stat-icon bg-${color} bg-opacity-10`}>
                            <i className={`bi ${icon} text-${color}`}></i>
                        </div>
                    </div>
                </div>
                <div className={`card-footer bg-${color} bg-opacity-10 border-0`}>
                    <small className={`text-${color}`}>
                        <i className="bi bi-arrow-right me-1"></i>
                        View Details
                    </small>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
