const Joi = require('joi');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello from index.js')
});

app.listen(port, () => console.log(`Listening on port ${port}...`));