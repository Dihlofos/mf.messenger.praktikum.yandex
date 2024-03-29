const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.static("./dist"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(process.env.PORT || PORT, function () {
  console.log(`Look my project at port ${PORT}`);
});
