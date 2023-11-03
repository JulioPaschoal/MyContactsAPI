// import module \\
const express = require('express');
const routes = require('./routes');
const app = express();

// My routes \\
app.use(routes);

// Start the server \\
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
