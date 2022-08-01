const express = require('express'),
  app = express(),
  port = 4000;

app.get('/api/hello', (req, res) => {
  res.json({
    state: 200,
    message: 'Hello World',
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
