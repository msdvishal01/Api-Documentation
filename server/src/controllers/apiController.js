// src/controllers/userController.js

/**
 * @api {get} /api/users Get all users
 * @apiName GetAllUsers
 * @apiGroup User
 * @apiDescription This API retrieves a list of all users from the system.
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Array} users List of users.
 */

/**
 * @api {post} /api/users Create a new user
 * @apiName CreateUser
 * @apiGroup User
 * @apiDescription This API creates a new user in the system with the provided name, email, and optional age.
 *
 * @apiParam {String} name User's full name.
 * @apiParam {String} email User's email address.
 * @apiParam {Number} [age] User's age (optional).
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Object} user Created user object.
 * * @apiExample {js} JavaScript Example:
 *     const axios = require('axios');
 *     axios.post('http://localhost:3000/api/auth/login', {
 *       email: 'user@example.com',
 *       password: 'password123'
 *     })
 *     .then(response => {
 *       console.log(response.data);
 *     })
 *     .catch(error => {
 *       console.error(error);
 *     });
 *
 * @apiExample {python} Python Example:
 *     import requests
 *     response = requests.post('http://localhost:3000/api/auth/login', json={
 *       'email': 'user@example.com',
 *       'password': 'password123'
 *     })
 *     if response.status_code == 200:
 *         print(response.json())
 *     else:
 *         print('Login failed', response.status_code)
 */

/**
 * @api {put} /api/users/:id Update user
 * @apiName UpdateUser
 * @apiGroup User
 * @apiDescription This API updates an existing user's details.
 *
 * @apiParam {String} id User's unique ID.
 * @apiParam {String} [name] User's full name (optional).
 * @apiParam {String} [email] User's email address (optional).
 * @apiParam {Number} [age] User's age (optional).
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Object} user Updated user object.
 */

/**
 * @api {delete} /api/users/:id Delete user
 * @apiName DeleteUser
 * @apiGroup User
 * @apiDescription This API deletes an existing user by ID.
 *
 * @apiParam {String} id User's unique ID.
 *
 * @apiSuccess {String} message Success message.
 */

/**
 * @api {get} /api/users/:id Get user by ID
 * @apiName GetUserById
 * @apiGroup User
 * @apiDescription This API retrieves a user by their unique ID.
 *
 * @apiParam {String} id User's unique ID.
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Object} user User object.
 */

/**
 * @api {post} /api/auth/register Register a new user
 * @apiName RegisterUser
 * @apiGroup Auth
 * @apiDescription This API registers a new user with name, email, and password.
 *
 * @apiParam {String} name User's full name.
 * @apiParam {String} email User's email address.
 * @apiParam {String} password User's password.
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Object} user Registered user object.
 */

/**
 * @api {post} /api/auth/login Login a user
 * @apiName LoginUser
 * @apiGroup Auth
 * @apiDescription This API allows a user to log in with their email and password.
 *
 * @apiParam {String} email User's email address.
 * @apiParam {String} password User's password.
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {String} token JWT token for authenticated requests.
 */

/**
 * @api {post} /api/auth/logout Logout a user
 * @apiName LogoutUser
 * @apiGroup Auth
 * @apiDescription This API logs out the currently authenticated user.
 *
 * @apiSuccess {String} message Success message.
 */
