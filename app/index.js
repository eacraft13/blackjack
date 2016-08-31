const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World! From Eric.');
});

app.listen(8080);