/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and login
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The user's name
 *                     example: Leanne Graham
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Your code to get users
  res.send([{ id: 1, name: 'Leanne Graham' }]);
});

module.exports = router;
