const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SEC);
module.exports = router;
