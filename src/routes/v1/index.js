const express = require("express");
const memeRoute = require("./meme.route");
const captureDateMiddleware = require("../../middleware/middleware");
const router = express.Router();

router.use("memes", memeRoute);
router.use(captureDateMiddleware);

module.exports = router;
