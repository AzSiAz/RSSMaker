var cloudscraper = require('cloudscraper');
var jsdom = require('jsdom');
var moment = require('moment');
var madokamidate = require('../utils/madokamidate');

var parseData = {
  novelupdates: function(url, feed, callback) {
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
                date: moment.utc(this.cells[0].innerHTML, "MM/DD/YY").toDate(),
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
  },
  madokami: function(url, feed, callback) {
    jsdom.env(
      url,
      ["http://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"],
      function (err, window) {
        var $ = window.$;
        $('#index-table > tbody > tr').each(function (index) {
          var title = $(this).find('a').first().text();
          title.endsWith('/') ? title = title.slice(0, title.length - 1) : title;
          var object = {
            date: madokamidate(this.cells[2].innerHTML.trim()),
            title: title + ' updated',
            description: '',
            link: 'https://manga.madokami.com' + $(this).find('a').first().attr('href')
          }
          feed.addItem(object);
        })
        callback();
      }
    );
  }
}

module.exports = parseData;