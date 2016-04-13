var cloudscraper = require('cloudscraper');
var jsdom = require('jsdom');

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

module.exports = parseData;