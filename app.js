const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const useragent = require('express-useragent');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip;
  const lang = req.acceptsLanguages()[0];
  const os = req.useragent.os;
  res.json({ 'ipaddress': ipaddress, 'language': lang, 'Software': os });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});