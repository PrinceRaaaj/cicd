const express = require('express')

const app = express();

app.get("/", (req, res) => res.send("123"))

app.listen(1000, err => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server is running on ${1000}`);
});
