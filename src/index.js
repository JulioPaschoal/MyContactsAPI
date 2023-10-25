// modules configuration \\
const express = require('express');
const routes = require('./routes');
const app = express();

// Middleware configuration \\
app.use(express.json());

// Application routes \\
app.use(routes);

// Start the server \\
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at  http://localhost:${PORT}`);
});
