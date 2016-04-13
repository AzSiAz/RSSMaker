var parseData = require('../utils/parsedata');
var getFeed = require('../utils/getfeed');

var novelupdates = {
  groups: function groups(req, res) {
    var group = req.params.group
    var feed = getFeed.getFeedGroup(group)
    res.set('Content-Type', 'application/rss+xml');
    parseData('http://www.novelupdates.com/group/' + group, feed, function (data) {
      res.send(feed.render('rss-2.0'));
    })
  },
  novel: function novel(req, res) {
    // res.send(req.params.novel);
    var novel = req.params.novel
    var feed = getFeed.getFeedNovel(novel);
    res.set('Content-Type', 'application/rss+xml');
    parseData('http://www.novelupdates.com/series/' + novel, feed, function (data) {
      res.send(feed.render('rss-2.0'));
    })
  }
}

module.exports = novelupdates;