const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json()); // Middleware for parsing JSON data

app.post('/', (req, res) => {
  console.log(req.body);
  const data=req.body.name;
  res.send(`hello hashir, it is ok ${data}`);
});

app.get('/', (req, res) => {
  res.send('hello hashir');
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
