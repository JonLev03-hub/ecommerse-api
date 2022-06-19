const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test is successful");
});
router.post("/posttest", (req, res) => {
  console.log(req.body);
  res.send("post test is successful" + req.body);
});
module.exports = router;
