import React from 'react';
import StatCard from '../components/StatCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = ({ projects = [] }) => {
    const stats = [
        {
            title: 'Total Projects',
            value: projects.length.toString(),
            icon: 'bi-folder-fill',
            color: 'primary',
            trend: { type: 'up', value: 'Live' }
        },
        {
            title: 'Active Tasks',
            value: projects.filter(p => p.status === 'active' || p.status === 'in-progress').length.toString(),
            icon: 'bi-check2-square',
            color: 'success',
            trend: { type: 'up', value: 'Active' }
        },
        {
            title: 'Team Members',
            value: Array.from(new Set(projects.map(p => p.team))).filter(t => t).length.toString(),
            icon: 'bi-people-fill',
            color: 'info',
            trend: { type: 'up', value: 'Teams' }
        },
        {
            title: 'Completed Tasks',
            value: projects.filter(p => p.status === 'completed').length.toString(),
            icon: 'bi-check-circle-fill',
            color: 'warning',
            trend: { type: 'up', value: 'Finished' }
        }
    ];

    const recentProjects = [...projects].sort((a, b) => b.id - a.id).slice(0, 5);

    return (
        <div className="dashboard">
            {/* Page Header */}
            <div className="row mb-4">
                <div className="col-12">
                    <h1 className="display-5 fw-bold mb-2">Dashboard</h1>
                    <p className="text-muted">Welcome back! Here's what's happening with your projects today.</p>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="row">
                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                        color={stat.color}
                        trend={stat.trend}
                    />
                ))}
            </div>

            {/* Recent Activity Section */}
            <div className="row mt-4">
                <div className="col-lg-8 mb-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white border-0 py-3">
                            <h5 className="mb-0 fw-bold">Recent Projects</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle">
                                    <thead>
                                        <tr>
                                            <th>Project Name</th>
                                            <th>Status</th>
                                            <th>Progress</th>
                                            <th>Due Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentProjects.length > 0 ? (
                                            recentProjects.map((project) => (
                                                <tr key={project.id}>
                                                    <td>
                                                        <i className="bi bi-folder text-primary me-2"></i>
                                                        {project.name}
                                                    </td>
                                                    <td>
                                                        <span className={`badge bg-${project.status === 'active' ? 'success' : project.status === 'in-progress' ? 'warning' : project.status === 'completed' ? 'primary' : 'info'}`}>
                                                            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="progress" style={{ height: '6px' }}>
                                                            <div
                                                                className={`progress-bar bg-${project.progress >= 75 ? 'success' : project.progress >= 45 ? 'warning' : 'info'}`}
                                                                style={{ width: `${project.progress}%` }}
                                                            ></div>
                                                        </div>
                                                    </td>
                                                    <td>{new Date(project.deadline).toLocaleDateString()}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="text-center text-muted py-5">
                                                    <i className="bi bi-inbox display-4 d-block mb-3 opacity-25"></i>
                                                    No recent projects
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Activity */}
                <div className="col-lg-4 mb-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white border-0 py-3">
                            <h5 className="mb-0 fw-bold">Team Activity</h5>
                        </div>
                        <div className="card-body">
                            {projects.length > 0 ? (
                                <>
                                    <div className="activity-item mb-3 pb-3 border-bottom">
                                        <div className="d-flex align-items-start">
                                            <div className="avatar bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                                                <i className="bi bi-person-fill text-primary"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="mb-1 fw-semibold">Activity Tracked</p>
                                                <small className="text-muted">New projects are being managed</small>
                                                <br />
                                                <small className="text-muted">Just now</small>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center text-muted py-5">
                                    <i className="bi bi-people display-4 d-block mb-3 opacity-25"></i>
                                    No recent activity
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
