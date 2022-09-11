const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  serveFile(res, 'index.html');
});

app.post('/api/transfer', (req, res) => {
  const email = req.body.email;
  const amount = req.body.amount;
  const address = 'testaddress';
  res.json({ address, amount });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function serveFile(res, file) {
  res.sendFile(path.join(__dirname, `/public/${file}`));
}
