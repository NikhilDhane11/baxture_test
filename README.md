# baxture_test
User Management API
This project implements a simple API for managing user records with basic CRUD operations.

Usage
Clone the repository:

bash
Copy code
git clone <https://github.com/NikhilDhane11/baxture_test.git>
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm run start:dev
Endpoints
1. Get All Users
Endpoint:

bash
Copy code
GET /api/users
Description:
Retrieve all user records.

2. Get User by ID
Endpoint:

bash
Copy code
GET /api/users/:userId
Description:
Retrieve a user record by ID.

3. Create User
Endpoint:

bash
Copy code
POST /api/users
Description:
Create a new user record.

4. Update User by ID
Endpoint:

bash
Copy code
PUT /api/users/:userId
Description:
Update an existing user record by ID.

5. Delete User by ID
Endpoint:

bash
Copy code
DELETE /api/users/:userId
Description:
Delete an existing user record by ID.

User Object Properties
id (string): Unique identifier (UUID) generated on the server side.
username (string): User's name (required).
age (number): User's age (required).
hobbies (array of strings): User's hobbies (array of strings or empty array, required).
Testing
Run tests:

bash
Copy code
npm test
Notes
Ensure that the port value is stored in the .env file.

Two modes: development and production.

For horizontal scaling, use npm run start:multi for multiple instances.

Author
Nikhil Dhane





