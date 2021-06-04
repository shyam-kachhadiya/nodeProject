var express = require("express");
var app = express();
const port = 3000;
const fs = require("fs");

app.post("/", function () {
  console.log("this is post");
});
app.get("/", function (req, res) {
  res.end("Hello world");
});

app.get("/list_movies", (req, res) => {
  fs.readFile(__dirname + "/" + "movies.json", "utf8", (err, data) => {
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
