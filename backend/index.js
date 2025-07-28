const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// ➤ Your APIs
app.get('/api/new', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// ➤ Serve frontend (in production)
app.use(express.static(path.join(__dirname, 'client')));

app.get(/^\/(?!api).*/, (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'client', 'index.html'));
      } catch (err) {
        next(err);
      }
});

// ➤ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
