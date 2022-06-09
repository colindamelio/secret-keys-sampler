const PORT = 4000;
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

require('dotenv').config();

const app = express();

app.use(cors());

// app.get('/', (req, res) => {
//   res.send('<h1>HELLO</h1>')
// });

app.get('/', (req, res) => {
  
  const url = new URL('https://www.rijksmuseum.nl/api/en/collection');

  url.search = new URLSearchParams({
    key: process.env.VITE_API_KEY,
  })

  fetch(url)
    .then(response => response.json())
    .then(jsonData => res.json(jsonData.artObjects))
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));