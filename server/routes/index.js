const express = require('express');
const router = express.Router();
var apicache = require('apicache');
var cache = apicache.middleware;

var novelupdates = require('./novelupdates')
var madokami = require('./madokami');

router.get('/', cache('10 minutes'), function (req, res) {
  res.send('RSS Maker');
});

// NovelUpdates routes
router.get('/rss/novelupdates/group/:group', cache('5 minutes'), novelupdates.group);
router.get('/rss/novelupdates/novel/:novel', cache('5 minutes'), novelupdates.novel);

// Madokami route
router.get('/rss/madokami/', cache('5 minutes'), madokami.madokamiNovelList);

module.exports = router;