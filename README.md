# Project Management Dashboard

A modern React dashboard layout built with Bootstrap 5, featuring a responsive navbar, collapsible sidebar, and routing.

##  Folder Structure

```
project-management-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── Sidebar.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

##  Features

- **Responsive Navbar**: Fixed top navigation with brand logo, links, and user dropdown
- **Collapsible Sidebar**: Smooth toggle animation with active route highlighting
- **React Router**: Client-side routing for seamless navigation
- **Bootstrap 5**: Modern UI components and responsive grid system
- **Bootstrap Icons**: Beautiful icons for navigation and UI elements

##  Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

##  Components

### Navbar.jsx
- Fixed top navigation bar
- Sidebar toggle button
- Brand logo with link to home
- Navigation links (Home, Projects)
- User dropdown menu (Profile, Settings, Logout)
- Fully responsive with mobile menu

### Sidebar.jsx
- Collapsible sidebar navigation
- Menu items with icons:
  - Dashboard
  - Projects
  - Tasks
  - Team
  - Calendar
  - Reports
  - Settings
- Active route highlighting
- Smooth open/close animations

### App.jsx
- Main application component
- React Router setup with routes:
  - `/` - Dashboard
  - `/projects` - Projects
  - `/tasks` - Tasks
  - `/team` - Team
  - `/calendar` - Calendar
  - `/reports` - Reports
  - `/settings` - Settings
  - `/profile` - Profile
- Sidebar state management
- Responsive layout with dynamic margins

##  Customization

### Colors
The dashboard uses Bootstrap's default dark theme for navbar and sidebar. You can customize colors in:
- `Sidebar.css` - Sidebar colors and hover effects
- `App.css` - Main content area and card styles

### Routes
Add new routes in `App.jsx`:
```jsx
<Route path="/your-route" element={<YourComponent />} />
```

Add corresponding sidebar menu items in `Sidebar.jsx`:
```jsx
{ path: '/your-route', icon: 'bi-icon-name', label: 'Your Label' }
```

##  Responsive Design

- **Desktop**: Full sidebar visible by default
- **Tablet/Mobile**: Sidebar collapses, toggle button in navbar
- **Smooth Transitions**: Animated sidebar and content area adjustments

##  Technologies

- React 18.2.0
- React Router DOM 6.20.0
- Bootstrap 5.3.2
- React Bootstrap 2.9.1
- Bootstrap Icons

##  License

This project is open source and available for use.
