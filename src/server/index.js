const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => {
  res.send({ username: 'Irfan Production test @4' });
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}!`);
});
