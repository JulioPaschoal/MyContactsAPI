// import module \\
const express = require('express');
const app = express();

// My routes \\
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server \\
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
