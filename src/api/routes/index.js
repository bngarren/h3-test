const express = require("express");

const { playerAction } = require("../controllers");

const router = express.Router();

router.post("/scan", playerAction.scan);

module.exports = router;
