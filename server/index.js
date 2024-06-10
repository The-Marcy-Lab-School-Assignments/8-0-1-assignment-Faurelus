const express = require('express');
const path = require('path');

const { logRoutes } = require('./middleware/loggingMiddleware');

const app = express();
const port = process.env.PORT || 8080;
const pathToDist = path.join(__dirname, '../vite-project/dist');

app.use(logRoutes);

app.use(express.static(pathToDist))

app.get('*', (req, res) => {
  res.sendFile(path.join(pathToDist, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})