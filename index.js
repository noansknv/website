var app = module.exports = require('derby').createApp('website', __filename);

// .styl support
app.serverUse(module, 'derby-stylus');

app.loadViews(__dirname + '/views');
app.loadStyles(__dirname);

// Routes render on client as well as server
app.get('/', function(page, model) {
  model.set('_page.title', 'noansknv');

  model.set('_page.links', [{
    href: 'http://www.github.com/noansknv',
    img: '/img/github.png',
    alt: 'github/noansknv'
  }, {
    href: 'http://www.linkedin.com/in/marcinkanclerz/',
    img: '/img/linkedin.png',
    alt: 'linkedin'
  }, {
    href: 'http://www.twitter.com/noansknv',
    img: '/img/twitter.png',
    alt: 'twitter/noansknv'
  }, {
    href: 'https://noansknv.exposure.co/',
    img: '/img/exposure.png',
    alt: 'exposure/noansknv'
  }, {
    href: 'http://portfolio.noansknv.io',
    img: '/img/shutter.png',
    alt: 'portfolio'
  }, {
    href: 'https://www.flickr.com/photos/129514387@N07/',
    img: '/img/flickr.png',
    alt: 'flickr/noansknv'
  }, {
    href: 'https://www.instagram.com/beyondcomfort',
    img: '/img/instagram.png',
    alt: 'instagram/beyondcomfort'
  }, {
    href: 'https://medium.com/@noansknv',
    img: '/img/medium.png',
    alt: 'medium/@noansknv'
  }]);

  page.render();
});
