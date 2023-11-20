# PERN Todo List App

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
- Real-time updates using WebSocket for a seamless user experience.
- Responsive design for various devices.

## Prerequisites
Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pern-todo-list.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pern-todo-list
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up the PostgreSQL database:
   - Create a database and update the connection details in `server/db.js`.

5. Run the server:
   ```bash
   npm run server
   ```

6. Open a new terminal window, navigate to the project directory, and run the React app:
   ```bash
   npm run client
   ```

7. Visit `http://localhost:3000` in your browser to use the Todo List app.

## Usage
1. Add a new task by entering the task description and clicking the "Add Task" button.
2. Mark tasks as completed by checking the checkbox next to each task.
3. Edit tasks by clicking the pencil icon, make the necessary changes, and click "Save Changes."
4. Delete tasks by clicking the trash icon next to each task.

## Technologies Used
- **Frontend:**
  - React
  - Axios (HTTP client)
  - WebSocket for real-time updates

- **Backend:**
  - Express.js
  - PostgreSQL
  - Sequelize (ORM)
  - WebSocket for real-time updates

- **Database:**
  - PostgreSQL

## Contributing
Contributions are welcome! If you find any bugs or have ideas for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
