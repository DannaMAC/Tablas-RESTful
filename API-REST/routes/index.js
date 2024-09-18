const express = require('express');
const router = express.Router();

router.get('/results/:n1/:n2', (req, res) => {
  const n1 = parseFloat(req.params.n1);
  const n2 = parseFloat(req.params.n2);
  const result = n1 + n2;
  res.json({ operation: 'sum', result });
});

router.post('/results', (req, res) => {
  const { n1, n2 } = req.body;
  const result = n1 * n2;
  res.json({ operation: 'multiply', result });
});

router.put('/results', (req, res) => {
  const { n1, n2 } = req.body;
  if (n2 === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed' });
  }
  const result = n1 / n2;
  res.json({ operation: 'divide', result });
});

router.patch('/results', (req, res) => {
  const { n1, n2 } = req.body;
  const result = Math.pow(n1, n2);
  res.json({ operation: 'power', result });
});

router.delete('/results/:n1/:n2', (req, res) => {
  const n1 = parseFloat(req.params.n1);
  const n2 = parseFloat(req.params.n2);
  const result = n1 - n2;
  res.json({ operation: 'subtract', result });
});

module.exports = router;
