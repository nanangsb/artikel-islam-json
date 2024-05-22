const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/api/:name', (req, res) => {
  const { name } = req.params;
  const filePath = path.join(__dirname, `${name}.json`);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    }
  });
});

module.exports = app;
