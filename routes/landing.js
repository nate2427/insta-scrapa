const router = require("express").Router();
// get the database object from the config file by importing the getDb method
const { getDb } = require("../config/db_connection");

// configure a simple get request on the router
router.get("/", async (req, res) => {
  // grab the database
  const db = getDb();
  // figure out which collection you want
  const collection = db.collection("user");
  // grab the data from that collection (will come back as a cursor object)
  const cursor = await collection.find();
  // turn the object into an array of data
  const userData = await cursor.toArray();
  // send the data to the requester
  res.json(userData);
});

module.exports = router;
