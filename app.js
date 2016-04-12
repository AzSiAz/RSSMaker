var express = require('express');
var app = express();
var jsdom = require('jsdom');
var Feed = require('feed');
var cloudscraper = require('cloudscraper');

app.get('/rss/novelupdates/baka-tsuki', function (req, res) {
  var feed = new Feed({
    title: 'Baka-Tsuki NovelUpdates',
    description: 'NovelUpdates Baka-Tsuki group update',
    link: 'http://www.novelupdates.com/group/baka-tsuki/',
    image: 'http://www.novelupdates.com/wp-content/uploads/2015/10/ndfavicon.ico',
    copyright: '',
    updated: new Date(),
    author: {
      name: 'AzSiAz',
      email: 'contact@azsiaz.tech',
      link: 'https://azsiaz.tech'
    }
  });
  res.set('Content-Type', 'application/rss+xml');
  parseData('http://www.novelupdates.com/group/baka-tsuki/', feed, function (data) {
    res.send(feed.render('rss-2.0'));
  })
});

app.get('/rss/novelupdates/nanodesu', function (req, res) {
  var feed = new Feed({
    title: 'NanoDesu NovelUpdates',
    description: 'NovelUpdates NanoDesu group update',
    link: 'http://www.novelupdates.com/group/nanodesu/',
    image: 'http://www.novelupdates.com/wp-content/uploads/2015/10/ndfavicon.ico',
    copyright: '',
    updated: new Date(),
    author: {
      name: 'AzSiAz',
      email: 'contact@azsiaz.tech',
      link: 'https://azsiaz.tech'
    }
  });

  res.set('Content-Type', 'application/rss+xml');
  parseData('http://www.novelupdates.com/group/nanodesu/', feed, function (data) {
    res.send(feed.render('rss-2.0'));
  })
});

app.get('/', function (req, res) {
  res.send('RSS Maker');
});

function correctData(data) {
  
}

function parseData(url, feed, callback) {
  cloudscraper.get(url, function(error, response, body) {
  if (error) {
    console.log('Error occurred');
  } else {
    jsdom.env({
      html: body,
      scripts: ['http://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js'],
      done: function (errors, window) {
        var $ = window.$;
        $('#myTable > tbody > tr').each(function (index) {
          var object = {
            date: new Date(this.cells[0].innerHTML),
            title: $(this).find('a').first().text() + ' ' + $(this).find('a').last().text(),
            description: '',
            link: $(this).find('a').last().attr('href')
          }
          feed.addItem(object);
        })
        callback();
      }
    }); 
  }
});
}

app.listen(4000, function () {
  console.log('RSS Maker listening on port 4000!');
});