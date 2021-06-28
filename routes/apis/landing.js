const router = require("express").Router();
const { instagram } = require("instagram-scraper-api");

router.post("/api/get-user-data", async (req, res) => {
  // get the username passed from da front end
  const username = req.body.username;
  const data = await instagram.user(username);
  console.log(data);
  res.json(data);
});

module.exports = router;
