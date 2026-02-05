import React, { useState } from 'react';
import { getStatusColor, getStatusLabel, getProgressColor } from '../data/mockProjects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';

const Projects = ({ projects = [], onAddProject, onDeleteProject }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [showModal, setShowModal] = useState(false);

    // New project form state
    const [newProject, setNewProject] = useState({
        name: '',
        team: '',
        deadline: '',
        status: 'planning',
        progress: 0
    });

    // Filter projects based on search and status
    const filteredProjects = projects.filter(project => {
        const name = project.name || '';
        const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProject(newProject);
        setNewProject({ name: '', team: '', deadline: '', status: 'planning', progress: 0 });
        setShowModal(false);
    };

    return (
        <div className="projects-page">
            {/* Page Header */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="mb-3 mb-md-0">
                            <h1 className="display-5 fw-bold mb-2">Projects</h1>
                            <p className="text-muted">Manage and track all your projects</p>
                        </div>
                        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                            <i className="bi bi-plus-circle me-2"></i>
                            New Project
                        </button>
                    </div>
                </div>
            </div>

            {/* Add Project Modal */}
            {showModal && (
                <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
                    <div className="modal-dialog">
                        <div className="modal-content border-0 shadow">
                            <div className="modal-header border-0 bg-light">
                                <h5 className="modal-title fw-bold">Add New Project</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body p-4">
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Project Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={newProject.name}
                                            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                                            required
                                            placeholder="e.g. Website Overhaul"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Team Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={newProject.team}
                                            onChange={(e) => setNewProject({ ...newProject, team: e.target.value })}
                                            required
                                            placeholder="e.g. Design Team"
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-semibold">Deadline</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={newProject.deadline}
                                                onChange={(e) => setNewProject({ ...newProject, deadline: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-semibold">Status</label>
                                            <select
                                                className="form-select"
                                                value={newProject.status}
                                                onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
                                            >
                                                <option value="planning">Planning</option>
                                                <option value="active">Active</option>
                                                <option value="in-progress">In Progress</option>
                                                <option value="completed">Completed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Initial Progress ({newProject.progress}%)</label>
                                        <input
                                            type="range"
                                            className="form-range"
                                            min="0"
                                            max="100"
                                            step="5"
                                            value={newProject.progress}
                                            onChange={(e) => setNewProject({ ...newProject, progress: parseInt(e.target.value) })}
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="button" className="btn btn-light" onClick={() => setShowModal(false)}>Cancel</button>
                                    <button type="submit" className="btn btn-primary px-4">Create Project</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Filters and Search */}
            <div className="row mb-4">
                <div className="col-md-6 mb-3 mb-md-0">
                    <div className="input-group search-group">
                        <span className="input-group-text border-end-0 bg-transparent">
                            <i className="bi bi-search text-muted"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <select
                        className="form-select"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="in-progress">In Progress</option>
                        <option value="planning">Planning</option>
                        <option value="completed">Completed</option>
                        <option value="on-hold">On Hold</option>
                    </select>
                </div>
            </div>

            {/* Projects Table */}
            <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="px-4">Project Name</th>
                                    <th>Status</th>
                                    <th>Progress</th>
                                    <th>Deadline</th>
                                    <th className="text-center px-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProjects.length > 0 ? (
                                    filteredProjects.map((project) => (
                                        <tr key={project.id}>
                                            <td className="px-4">
                                                <div className="d-flex align-items-center">
                                                    <div className="project-icon bg-primary bg-opacity-10 rounded-3 me-3">
                                                        <i className="bi bi-folder2-open text-primary"></i>
                                                    </div>
                                                    <div>
                                                        <div className="fw-bold mb-0">{project.name}</div>
                                                        <small className="text-muted">{project.team}</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`badge rounded-pill bg-${getStatusColor(project.status)} bg-opacity-75`}>
                                                    {getStatusLabel(project.status)}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="progress-container" style={{ width: '120px' }}>
                                                    <small className="d-block mb-1 fw-bold text-muted" style={{ fontSize: '0.7rem' }}>{project.progress}%</small>
                                                    <div className="progress shadow-sm" style={{ height: '6px' }}>
                                                        <div
                                                            className={`progress-bar bg-${getProgressColor(project.progress)}`}
                                                            role="progressbar"
                                                            style={{ width: `${project.progress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-muted" style={{ fontSize: '0.9rem' }}>
                                                    <i className="bi bi-calendar3 me-2"></i>
                                                    {new Date(project.deadline).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </div>
                                            </td>
                                            <td className="px-4">
                                                <div className="d-flex justify-content-center gap-2">
                                                    <button className="btn btn-icon btn-light text-primary" title="View">
                                                        <i className="bi bi-eye"></i>
                                                    </button>
                                                    <button className="btn btn-icon btn-light text-danger" title="Delete" onClick={() => onDeleteProject(project.id)}>
                                                        <i className="bi bi-trash3"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center py-5">
                                            <div className="py-5">
                                                <i className="bi bi-inbox-fill display-1 text-light mb-3 d-block"></i>
                                                <h4 className="text-muted fw-bold">No projects found</h4>
                                                <p className="text-muted mb-0">Start by creating your first project!</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Projects Summary */}
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm bg-light">
                        <div className="card-body">
                            <div className="row text-center">
                                <div className="col-md-3 col-6 mb-3 mb-md-0">
                                    <h4 className="fw-bold text-primary">{projects.length}</h4>
                                    <small className="text-muted">Total Projects</small>
                                </div>
                                <div className="col-md-3 col-6 mb-3 mb-md-0">
                                    <h4 className="fw-bold text-success">
                                        {projects.filter(p => p.status === 'active').length}
                                    </h4>
                                    <small className="text-muted">Active</small>
                                </div>
                                <div className="col-md-3 col-6">
                                    <h4 className="fw-bold text-warning">
                                        {projects.filter(p => p.status === 'in-progress').length}
                                    </h4>
                                    <small className="text-muted">In Progress</small>
                                </div>
                                <div className="col-md-3 col-6">
                                    <h4 className="fw-bold text-info">
                                        {projects.filter(p => p.status === 'completed').length}
                                    </h4>
                                    <small className="text-muted">Completed</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
