const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  app.use(express.static("public"));
})

app.get('/about', (req, res) => {
  res.send("hoi");
})

app.listen(port, () => console.log(`running on port ${port}`))
