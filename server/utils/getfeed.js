var Feed = require('feed');

var getFeed = {
  getFeedGroup: function getFeedGroup(group) {
    return new Feed({
      title: groups +' NovelUpdates',
      description: 'NovelUpdates ' + groups + ' group update',
      link: 'http://www.novelupdates.com/group/' + groups,
      image: 'http://www.novelupdates.com/wp-content/uploads/2015/10/ndfavicon.ico',
      copyright: '',
      updated: new Date(),
      author: {
        name: 'AzSiAz',
        email: 'contact@azsiaz.tech',
        link: 'https://azsiaz.tech'
      }
    })
  },
  getFeedNovel: function getFeedNovel(novel) {
    return new Feed({
      title: novel +' NovelUpdates',
      description: 'NovelUpdates ' + novel + ' novel update',
      link: 'http://www.novelupdates.com/series/' + novel,
      image: 'http://www.novelupdates.com/wp-content/uploads/2015/10/ndfavicon.ico',
      copyright: '',
      updated: new Date(),
      author: {
        name: 'AzSiAz',
        email: 'contact@azsiaz.tech',
        link: 'https://azsiaz.tech'
      }
    })
  }
}
module.exports = getFeed;
