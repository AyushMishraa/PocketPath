

# PocketPath - Expense Tracker

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

**PocketPath** is a full-stack web application for tracking your daily expenses. Users can register, log in, and manage their expenses by adding, editing, and deleting entries. The app provides a seamless experience for handling multiple categories of expenses while ensuring secure user authentication and data persistence.

## Features
- User Registration and Login
- Add new expenses with categories (title, amount, category)
- View a list of all expenses
- Edit or Delete existing expenses
- User authentication using JWT tokens
- Secure password handling using bcrypt
- Persistent data storage using MongoDB
- Responsive design using EJS templates and CSS
- Logout functionality to clear session cookies

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Frontend**: EJS (Embedded JavaScript), HTML, CSS
- **Authentication**: JSON Web Tokens (JWT), bcrypt for password hashing
- **Other**: Method-Override, dotenv, cookie-parser

## Project Structure

```
├── controllers/
│   └── index.js            # Controller logic for handling requests
├── middleware/
│   └── auth.js             # Middleware for token authentication
├── models/
│   └── index.js            # Expense model
│   └── user.js             # User model
├── public/                 # Static assets (CSS, images, etc.)
├── routes/
│   └── index.js            # Route definitions
├── views/
│   ├── pages/              # EJS templates for rendering pages
│   └── layout.ejs          # Main layout file
├── .env                    # Environment variables
├── app.js                  # Application entry point
└── connection.js           # MongoDB connection file
```

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/pocketpath.git
    ```

2. **Navigate to the project folder:**

    ```bash
    cd pocketpath
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
PORT=2000
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
NODE_ENV=development
```

Replace `<your_mongodb_connection_string>` and `<your_jwt_secret_key>` with your MongoDB connection string and a secret key for JWT.

## Running the Application

1. **Start MongoDB** (if not running):
   
   ```bash
   mongod
   ```

2. **Start the Node.js application:**

    ```bash
    npm start
    ```

The app will run at `http://localhost:2000`.

## Usage

1. Visit `http://localhost:2000/expenses/signup` to register a new account.
2. Login using your credentials at `http://localhost:2000/expenses/login`.
3. After logging in, you can:
   - Add new expenses
   - View your expenses
   - Edit or delete your expenses
4. To log out, click the logout button, which clears your session.

## Screenshots

_You can add screenshots here to illustrate the user interface. Just include the images under a `screenshots/` folder and link them here._

```markdown
![Signup Page](screenshots/signup.png)
![Dashboard](screenshots/dashboard.png)
```

## API Endpoints

### Public Routes:
- `GET /expenses/signup`: Renders the signup page.
- `POST /expenses/signup`: Registers a new user.
- `GET /expenses/login`: Renders the login page.
- `POST /expenses/login`: Logs in the user and issues a JWT token.

### Protected Routes (Require JWT Token):
- `GET /expenses`: Displays all expenses for the authenticated user.
- `POST /expenses`: Adds a new expense.
- `GET /expenses/:id/edit`: Renders the edit page for a specific expense.
- `PUT /expenses/:id`: Updates a specific expense.
- `DELETE /expenses/:id`: Deletes a specific expense.
- `GET /expenses/logout`: Logs the user out by clearing the JWT token.

### Middleware
- `auth.js`: Protects routes by checking for a valid JWT token.

## Contributing

Feel free to open an issue or submit a pull request if you'd like to contribute to this project. Contributions, whether it's bug fixes, features, or improvements, are always welcome!

### Steps for contributing:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
