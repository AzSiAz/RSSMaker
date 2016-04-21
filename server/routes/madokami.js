var parseData = require('../utils/parsedata');
var getFeed = require('../utils/getfeed');

var madokami = {
  madokamiNovelList:function madokamiNovelList(req, res) {
    var feed = getFeed.getMadokamiFeedList();
    parseData.madokami('https://manga.madokami.com/Novels?order=time&dir=desc', feed, function (data) {
      res.set('Content-Type', 'application/rss+xml');
      res.send(feed.render('rss-2.0'));
    })
  }
}

module.exports = madokami;