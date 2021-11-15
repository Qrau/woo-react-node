//
//_________________________________________________
const express = require("express");
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//
//_________________________________________________
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//
//_________________________________________________
const cors = require("cors");
const path = require("path");
app.use(cors());
app.use(express.static(path.join(__dirname, "../public_html/build")));

//
//_________________________________________________
const apiRoutes = require("./routes");
app.use("/api", apiRoutes);

//
//_________________________________________________
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public_html/build", "index.html"));
});

//
//_________________________________________________
const secrets = require("./secrets.js");
const { port } = secrets;
app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
