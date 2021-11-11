//
//_________________________________________________
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("node js server app root route");
});

//
//_________________________________________________
const apiRoutes = require("./routes");
app.use("/api", apiRoutes);

//
//_________________________________________________
const secrets = require("./secrets.js");
const { port } = secrets;
app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
