# Present Perfect Event Planner v3.0

A comprehensive event planning web application that helps users plan and organize various types of events, from weddings to corporate gatherings.

## Project Structure

The project is divided into three main parts:

1. **Client** - Frontend web application built with React
2. **Dashboard** - Admin dashboard for event management
3. **Server** - Backend API built with Express.js

## Features

- User authentication and authorization
- Event browsing and booking
- Customizable event planning
- Admin dashboard for event management
- User messaging system
- Responsive design for all devices

## Technologies Used

### Frontend
- React
- React Router
- CSS
- Vite (build tool)
- React Icons
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository
```
git clone <repository-url>
cd PresentPerfect-Event
```

2. Install dependencies for all parts
```
# Root directory
npm install

# Client directory
cd Client
npm install

# Dashboard directory
cd ../dashboard
npm install

# Server directory
cd ../Server
npm install
```

3. Setup environment variables
   - Create a `config.env` file in the `Server/config` directory
   - Add the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     JWT_EXPIRE=7d
     COOKIE_EXPIRE=7
     ```

4. Run the application
```
# Start the server (from Server directory)
npm start

# Start the client (from Client directory)
npm run dev

# Start the dashboard (from dashboard directory)
npm run dev
```

## Contributors

Nisargp78

## License

This project is licensed under the MIT License - see the LICENSE file for details.
