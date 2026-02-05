// Mock data for projects
export const mockProjects = [];

// Helper function to get status badge color
export const getStatusColor = (status) => {
    const statusColors = {
        'active': 'success',
        'in-progress': 'warning',
        'planning': 'info',
        'completed': 'primary',
        'on-hold': 'secondary'
    };
    return statusColors[status] || 'secondary';
};

// Helper function to get status label
export const getStatusLabel = (status) => {
    const statusLabels = {
        'active': 'Active',
        'in-progress': 'In Progress',
        'planning': 'Planning',
        'completed': 'Completed',
        'on-hold': 'On Hold'
    };
    return statusLabels[status] || status;
};

// Helper function to get progress bar color
export const getProgressColor = (progress) => {
    if (progress >= 75) return 'success';
    if (progress >= 50) return 'info';
    if (progress >= 25) return 'warning';
    return 'danger';
};
