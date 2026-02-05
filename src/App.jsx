import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// Page Components
const Tasks = () => (
    <div>
        <h1>Tasks</h1>
        <p>View and manage your tasks.</p>
    </div>
);

const Team = () => (
    <div>
        <h1>Team</h1>
        <p>Manage your team members.</p>
    </div>
);

const Calendar = () => (
    <div>
        <h1>Calendar</h1>
        <p>View your schedule and deadlines.</p>
    </div>
);

const Reports = () => (
    <div>
        <h1>Reports</h1>
        <p>Generate and view reports.</p>
    </div>
);

const Settings = () => (
    <div>
        <h1>Settings</h1>
        <p>Configure your application settings.</p>
    </div>
);

const Profile = () => (
    <div>
        <h1>Profile</h1>
        <p>Manage your profile information.</p>
    </div>
);

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [projects, setProjects] = useState(() => {
        const savedProjects = localStorage.getItem('pm_projects');
        return savedProjects ? JSON.parse(savedProjects) : [];
    });

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleAddProject = (newProject) => {
        const updatedProjects = [...projects, { ...newProject, id: Date.now() }];
        setProjects(updatedProjects);
        localStorage.setItem('pm_projects', JSON.stringify(updatedProjects));
    };

    const handleDeleteProject = (projectId) => {
        const updatedProjects = projects.filter(p => p.id !== projectId);
        setProjects(updatedProjects);
        localStorage.setItem('pm_projects', JSON.stringify(updatedProjects));
    };

    return (
        <Router>
            <div className="app">
                <Navbar toggleSidebar={toggleSidebar} />
                <Sidebar isOpen={sidebarOpen} />
                <main className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                    <div className="container-fluid py-4">
                        <Routes>
                            <Route path="/" element={<Dashboard projects={projects} />} />
                            <Route
                                path="/projects"
                                element={
                                    <Projects
                                        projects={projects}
                                        onAddProject={handleAddProject}
                                        onDeleteProject={handleDeleteProject}
                                    />
                                }
                            />
                            <Route path="/tasks" element={<Tasks />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/reports" element={<Reports />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </Router>
    );
}

export default App;
