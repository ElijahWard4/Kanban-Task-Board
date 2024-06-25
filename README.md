# Kanban-Task-Board
![]assets/images/Kanban-Task-Board.gif

## Overview
Task Board is a simple and efficient Kanban board for task management. It allows users to add, delete, and move tasks across different statuses: "To Do", "In Progress", and "Done". This project leverages HTML, CSS, JavaScript, jQuery, and Bootstrap to provide a user-friendly interface and local storage for data persistence.

## Features
- Add Tasks: Users can add new tasks with a title, due date, and description.
- Delete Tasks: Users can delete tasks.
- Drag and Drop: Tasks can be moved between the "To Do", "In Progress", and "Done" columns using drag and drop.
- Local Storage: Tasks are saved in the browser's local storage to persist data between sessions.

## Technologies Used
- HTML
- CSS (Bootstrap)
- JavaScript (jQuery)
- jQuery UI
- Day.js
- Local Storage

## Installation
1. Clone the repository to your local machine:
```
git clone https://github.com/ElijahWard4/Kanban-task-board.git
```
2. Navigate to the project directory:
```
cd Kanban-Task-Board
```
3. Open index.html in your preferred web browser.

## Usage
### Adding a Task
1. Click on the "Add Task" button.
2. Fill out the task title, due date, and description in the modal form.
3. Click "Add Task" to save the task.

### Deleting a Task
- Click on the "Delete" button on the task card you want to remove.

### Moving Tasks
1. Drag a task card from one column to another.
2. Drop the task card into the desired column.

## Project Structure
```
Kanban-Task-Board/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── index.html
└── README.md
```

- `assets/css/style.css`: Custom styles for the Task Board.
- `assets/js/script.js`: JavaScript file containing all the logic for task management, drag and drop, and local storage interaction.
- `assets/index.html`: Main HTML file containing the structure of the Task Board.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgements
- Bootstrap
- jQuery
- jQuery UI
- Day.js

## Contact
For any questions or feedback, please contact [elijah.ward014@gmail.com].
