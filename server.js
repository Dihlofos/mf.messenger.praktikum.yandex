const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.static("./build"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, function () {
  console.log(`Look my project at port ${PORT}`);
});
