const express = require('express');
const app = express();
const swaggerSetup = require('./api-docs/swagger');

// Middleware and routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

// Swagger setup
swaggerSetup(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});