"use strict";

var parseData = require('../utils/parsedata');
var getFeed = require('../utils/getfeed');

class NovelUpdates {

  static group(req, res) {
    var group = req.params.group;
    var feed = getFeed.getNovelUpdatesFeedGroup(group);
    parseData.novelupdates('http://www.novelupdates.com/group/' + group, feed, function () {
      res.set('Content-Type', 'application/rss+xml');
      res.send(feed.render('rss-2.0'));
    })
  }

  static novel(req, res) {
    var novel = req.params.novel;
    var feed = getFeed.getNovelUpdatesFeedNovel(novel);
    parseData.novelupdates('http://www.novelupdates.com/series/' + novel, feed, function () {
      res.set('Content-Type', 'application/rss+xml');
      res.send(feed.render('rss-2.0'));
    })
  }
  
}

module.exports = NovelUpdates;