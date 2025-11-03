const router = require('express').Router();
const pool   = require('../db');

// GET  /cats
router.get('/', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM docs ORDER BY id');
  res.json(rows);
});

// POST /cats
router.post('/', async (req, res) => {
  const { name, age } = req.body;
  const { rows } = await pool.query(
    'INSERT INTO docs(name, age) VALUES ($1, $2) RETURNING *',
    [name, age]
  );
  res.status(201).json(rows[0]);
});

module.exports = router;