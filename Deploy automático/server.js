const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send({
        status: 'active',
        timestamp: new Date().toISOString(),
        service: 'node-api-main'
    });
});

// Endpoint pra o Load Balancer da AWS verificar se o container tá vivo
app.get('/health', (req, res) => res.sendStatus(200));

app.listen(PORT, () => {
    console.log(`> Server linstening on port ${PORT}`);
});