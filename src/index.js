// CONFIG. MODULOS \\
const express = require('express');
const router = require('./app/routes');
const app = express();

// MINHAS ROTAS \\
app.use(router);

// INICIALIZAR SERVIDOR \\
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
