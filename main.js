require('dotenv/config');   // reads .env, puts vars into process.env

const express = require('express');
const app  = express();

app.use(express.json())
app.get('/route', (req, res) => res.json({ message:'hello mom' }));

const port = process.env.PORT || 3000
const catRoutes = require('./routes/cats');
app.use('/cats', catRoutes);
app.listen(port)