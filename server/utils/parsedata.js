var jsdom = require('jsdom');
var moment = require('moment');
var madokamidate = require('../utils/madokamidate');

class ParseData {
    
    static novelupdates(url, feed, callback) {
        jsdom.env(
            url,
            ['http://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js'],
            function (errors, window) {
                var $ = window.$;
                $('#myTable > tbody > tr').each(function (index) {
                    var object = {
                        date: moment.utc(this.cells[0].innerHTML, "MM/DD/YY").toDate(),
                        title: $(this).find('a').first().text() + ' ' + $(this).find('a').last().text(),
                        description: '',
                        link: $(this).find('a').last().attr('href')
                    };
                    feed.addItem(object);
                });
                callback();
            }
        );
    }

    static madokami(url, feed, callback) {
        jsdom.env(
            url,
            ["http://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"],
            function (err, window) {
                var $ = window.$;
                $('#index-table > tbody > tr').each(function (index) {
                    var title = $(this).find('a').first().text();
                    title.endsWith('/') ? title = title.slice(0, title.length - 1) : title;
                    var mdate = madokamidate(this.cells[2].innerHTML.trim());
                    var object = {
                        date: mdate,
                        title: title + ' updated - ' + mdate ,
                        description: '',
                        link: 'https://manga.madokami.com' + $(this).find('a').first().attr('href')
                    };
                    feed.addItem(object);
                });
                callback();
            }
        );
    }

}

// var parseData = {
//   novelupdates: function novelupdates(url, feed, callback) {
//     jsdom.env(
//       url,
//       ['http://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js'],
//       function (errors, window) {
//         var $ = window.$;
//         $('#myTable > tbody > tr').each(function (index) {
//           var object = {
//             date: moment.utc(this.cells[0].innerHTML, "MM/DD/YY").toDate(),
//             title: $(this).find('a').first().text() + ' ' + $(this).find('a').last().text(),
//             description: '',
//             link: $(this).find('a').last().attr('href')
//           };
//           feed.addItem(object);
//         });
//         callback();
//       }
//     );
//   },
//   madokami: function madokami(url, feed, callback) {
//     jsdom.env(
//       url,
//       ["http://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"],
//       function (err, window) {
//         var $ = window.$;
//         $('#index-table > tbody > tr').each(function (index) {
//           var title = $(this).find('a').first().text();
//           title.endsWith('/') ? title = title.slice(0, title.length - 1) : title;
//           var mdate = madokamidate(this.cells[2].innerHTML.trim());
//           var object = {
//             date: mdate,
//             title: title + ' updated - ' + mdate ,
//             description: '',
//             link: 'https://manga.madokami.com' + $(this).find('a').first().attr('href')
//           };
//           feed.addItem(object);
//         });
//         callback();
//       }
//     );
//   }
// };

module.exports = ParseData;