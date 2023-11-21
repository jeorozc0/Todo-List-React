# Todo List App

This is a simple Todo List application built using the PERN (PostgreSQL, Express, React, Node.js) stack. The app allows users to create, update, and delete tasks, providing a straightforward and efficient way to manage their to-do lists.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- Create, read, update, and delete tasks.
- Real-time updates for a seamless user experience.
- Responsive design for various devices.

## Prerequisites
Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://www.npmjs.com/package//nodemon)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pern-todo-list.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pern-todo-list
   ```
   
3. Navigate to the client folder:
   ```bash
   cd client
   ```

4. Install dependencies:
   ```bash
   npm install
   ```
5. Navigate to the server folder:
   ```bash
   cd server
   ```

6. Install dependencies:
   ```bash
   npm install
   ```
   
7. Set up the PostgreSQL database:
   - Create a database using the database file and update the connection details in `server/db.js` with your own.

8. Run the server with nodemon on the server directory:
   ```bash
   npm run dev
   ```

9. Open a new terminal window, navigate to the client directory, and run the React app:
   ```bash
   npm start
   ```

10. Visit `http://localhost:8080` in your browser to use the Todo List app.

## Usage
1. Add a new task by entering the task description and clicking the "Add Task" button.
4. Edit tasks by clicking the edit button, make the necessary changes, and click "Edit"
4. Delete tasks by clicking the delete button next to each task.

## Technologies Used
- **Frontend:**
  - React

- **Backend:**
  - Express.js
  - PostgreSQL

- **Database:**
  - PostgreSQL

## Contributing
Contributions are welcome! If you find any bugs or have ideas for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
