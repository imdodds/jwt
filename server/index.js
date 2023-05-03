const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening in port 3000');
});