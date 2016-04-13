const express = require('express');
const router = express.Router();
var apicache  = require('apicache');
var cache     = apicache.middleware;

var novelupdates = require('./novelupdates')


router.get('/', cache('10 minutes'), function (req, res) {
  res.send('RSS Maker');
});

router.get('/rss/novelupdates/group/:group', cache('5 minutes'), novelupdates.groups);
router.get('/rss/novelupdates/novel/:novel', cache('5 minutes'), novelupdates.novel);

module.exports = router;