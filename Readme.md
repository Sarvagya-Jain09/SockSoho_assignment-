# Full Stack To-Do List

This repository contains a Full Stack "to-do list" application built using ReactJS, Flask, Python, and MongoDB. The application allows users to create, edit, and delete to-do items, as well as sort the list by name in ascending or descending order. The frontend is developed using ReactJS or Vanilla JS, while the backend is implemented with Python, Flask, and MongoDB.

## Features

### Frontend

1. **Create New To-Do Item**: Users can enter a task in the input field and click the button to create a new to-do item.
2. **List To-Do Items**: All the created to-do items are displayed in a list format.
3. **Edit and Delete**: Users have the option to edit and delete individual to-do items.
4. **Sort List**: The list can be sorted by name in ascending or descending order.
5. **User Interface**: The frontend is designed with a visually appealing and user-friendly interface.

### Backend

The backend of the application is implemented using Python, Flask, and MongoDB. It provides the following APIs:

1. **Create To-Do Item API**: This API allows creating a new to-do item.
2. **Edit To-Do Item API**: This API enables editing an existing to-do item.
3. **Delete To-Do Item API**: This API allows deleting a to-do item.
4. **List To-Do Items API**: This API provides a list of all the to-do items.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

```shell
git clone https://github.com/your-username/repository-name.git
```

2. Navigate to the project directory:

```shell
cd repository-name
```

3. Install the required dependencies for the frontend and backend:

```shell
# For frontend
cd frontend
npm install

# For backend
cd ../backend
pip install -r requirements.txt
```

4. Configure the backend:

   - Set up a MongoDB database and obtain the connection URI.
   - Update the configuration file `backend/config.py` with the MongoDB connection URI.

5. Start the frontend and backend servers:

```shell
# For frontend
cd frontend
npm start

# For backend
cd ../backend
python app.py
```

6. Access the application in your web browser:

```shell
http://localhost:3000
```

## Technologies Used

- ReactJS 
- Python
- Flask
- MongoDB

