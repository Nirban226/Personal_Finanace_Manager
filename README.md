Personal Finance Manager
Personal Finance Manager is a web application built to help users manage their personal finances effectively. It includes features for tracking income, expenses, budgets, investments, and more.

Getting Started
To get the application running locally, follow these steps:

Prerequisites
Ensure you have the following installed:

Node.js and npm (Node Package Manager)
PostgreSQL
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/personal-finance-manager.git
cd personal-finance-manager
Install frontend dependencies:

bash
Copy code
cd frontend
npm install
Install backend submodule:

bash
Copy code
cd backend
npm install
Set up PostgreSQL database:

Create a PostgreSQL database named personal_finance_manager.
Configure your database connection in backend/.env file (see .env.example).
Start the frontend and backend:

Frontend:

bash
Copy code
cd frontend
npm start
Open http://localhost:3000 in your browser.

Backend:

bash
Copy code
cd backend
npm start
The backend server will run on http://localhost:5000.

Access the application:

You can now access the Personal Finance Manager web application in your browser.

Technologies Used
Frontend:

React.js
Redux
Sass/SCSS
Backend:

Node.js
Express.js
PostgreSQL
