const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The product ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The product name
 *                     example: Widget
 */

router.get('/', (req, res) => {
  res.send([{ id: 1, name: 'Widget' }]);
});

module.exports = router;
