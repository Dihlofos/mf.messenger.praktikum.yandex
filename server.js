const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.static("./dist"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(PORT, function () {
  console.log(`Look my project at port ${PORT}`);
});

// const express = require("express");
// const webpack = require("webpack");
// const webpackDevMiddleware = require("webpack-dev-middleware");

// const app = express();
// const config = require("./webpack.config.js");
// const compiler = webpack(config);

// // Tell express to use the webpack-dev-middleware and use the webpack.config.js
// // configuration file as a base.
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

// app.get("/*", (req, res) => {
//   res.sendFile(__dirname + "/dist/index.html");
// });

// // Serve the files on port 3000.
// app.listen(3000, function () {
//   console.log("Example app listening on port 3000!\n");
// });
