# Incident Management System (IMS)

## Overview

The Incident Management System (IMS) is a web-based application designed to help organizations efficiently log, track, and resolve technical issues. Built with React and TypeScript, this project showcases a modern, responsive, and user-friendly interface for managing incidents in real-time.

## Features

- **Dashboard**: Provides a quick overview of incident statistics, including total incidents, open incidents, and critical incidents.
- **Incident Reporting**: User-friendly form for reporting new incidents with details such as title, description, and priority.
- **Incident Tracking**: Comprehensive list view of all reported incidents, their current status, and priority.
- **Real-time Alerts**: Notification system for new critical incidents to ensure timely attention.
- **Responsive Design**: Seamless experience across desktop and mobile devices using Tailwind CSS.

## Tech Stack

- React
- TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Lucide React for icons

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/incident-management-system.git
   ```

2. Navigate to the project directory:
   ```
   cd incident-management-system
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the application.

## Project Structure

- `src/components/`: Contains all React components
  - `Dashboard.tsx`: Main dashboard component
  - `IncidentForm.tsx`: Form for creating new incidents
  - `IncidentList.tsx`: List view of all incidents
  - `AlertSystem.tsx`: Real-time alert notification system
  - `Navbar.tsx`: Navigation component
- `src/App.tsx`: Main application component and routing
- `src/main.tsx`: Entry point of the application

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
