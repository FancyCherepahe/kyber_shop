const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the root folder
app.use(express.static(__dirname));

// Optional: Explicitly serve index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`KYBER SHOP running at http://localhost:${PORT}`);
});