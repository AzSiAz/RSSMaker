const express = require('express');
const router = express.Router();

var novelupdates = require('./novelupdates')
var madokami = require('./madokami');

router.get('/', function (req, res) {
  // res.send('RSS Maker');
  res.sendFile(__dirname + "../../public/index.html");
});

// NovelUpdates routes
router.get('/rss/novelupdates/group/:group', novelupdates.group);
router.get('/rss/novelupdates/novel/:novel', novelupdates.novel);

// Madokami route
router.get('/rss/madokami/', madokami.madokamiNovelList);

module.exports = router;