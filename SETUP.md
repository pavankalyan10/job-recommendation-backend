1. Install Node.js and MongoDB
   Ensure that Node.js and MongoDB are installed on your system:

Node.js
MongoDB (you can also use a cloud MongoDB service like MongoDB Atlas)

2. Initialize the Project
   Create a new folder and navigate into it, then initialize the project:

# Create project folder and navigate into it

mkdir job-recommendation-backend
cd job-recommendation-backend

# Initialize the Node.js project

npm init -y

3. Install Dependencies
   Install the required dependencies for your project:

# Install core dependencies

npm install express mongoose dotenv

# (Optional) Install nodemon for development

npm install --save-dev nodemon

4. Create .env File for Environment Variables
   Create a .env file to store sensitive information like database connection strings.

# .env file

PORT=5000
MONGODB_URI=mongodb://localhost:27017/job-recommendation-backend
This file will store your MongoDB URI or credentials if you use MongoDB Atlas.
