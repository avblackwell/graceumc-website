module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Grace United Methodist Church',
  siteDescription:
    'Lorem ipsum',
  siteType: 'Church', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Alex Blackwell', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'alexvblackwell@gmail.com', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: 'avblackwell.com', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Lorem ipsum', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Grace United Methodist Church Blog',
    description:
      'Tell the word what you are writing about in your blog! It will show up on feed readers.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Grace United Methodist Church',
    street: '1300 E Adams Dr,',
    city: 'Franklin',
    state: 'Indiana',
    zip: '46131',
    mobileDisplay: '317-736-7962',
    mobileCall: '317-736-7962',
    email: 'grace@franklingrace.org',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
