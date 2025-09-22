const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello, Node.js! This works on Windows.');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
