const router = require("express").Router();
const apiRoutes = require("./api-routes");

router.get("/", (req, res) => {
  res.send("node js server app api route");
});
router.use("/", apiRoutes);

module.exports = router;
