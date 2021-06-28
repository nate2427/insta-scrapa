const router = require("express").Router();
const path = require("path");
// get the database object from the config file by importing the getDb method
const { getDb } = require("../config/db_connection");

// configure a simple get request on the router
router.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../public/templates/index.html"));
});

module.exports = router;
