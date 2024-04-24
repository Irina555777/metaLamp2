const path = require('path');
const result = {
    modes: {
      dev: "dev",
      prod: "prod",
    },
  };
  
  result.builds = {
    [result.modes.dev]: "development",
    [result.modes.prod]: "production",
  };
result.entry = {
    'main': path.join(__dirname, '/src/index.js'),
    'uiCards': path.join(__dirname, '/src/uiCards.js'),
    'uiColorsType': path.join(__dirname, '/src/uiColorsType.js'),
    'uiHeadersFooters': path.join(__dirname, '/src/uiHeadersFooters.js'),
    'uiFormElements': path.join(__dirname, '/src/uiFormElements.js'),
    'websiteLanding': path.join(__dirname, '/src/websiteLanding.js'),
    'websiteSearchRoom': path.join(__dirname, '/src/websiteSearсhRoom.js'),
    'websiteRoom': path.join(__dirname, '/src/websiteRoom.js'),
}

result.pages = [
    { chunks: ['main'], page: 'index.html', template: path.join(__dirname, '/src/pages/index.html'), },
    { chunks: ['uiCards'], page: 'UiCards.html', template: path.join(__dirname, 'src/pages/pages/UI-cards/UiCards.html') },
    { chunks: ['uiColorsType'], page: 'UiColorsType.html', template: path.join(__dirname, 'src/pages/pages/UI-colors-type/UiColorsType.html') },
    { chunks: ['uiHeadersFooters'], page: 'UiHeadersFooters.html', template: path.join(__dirname, 'src/pages/pages/UI-headers-footers/UiHeadersFooters.html') },
    { chunks: ['uiFormElements'], page: 'UiFormElements.html', template: path.join(__dirname, 'src/pages/pages/UI-form-elements/UiFormElements.html') },
    { chunks: ['websiteLanding'], page: 'WebsiteLanding.html', template: path.join(__dirname, 'src/pages/pages/Website-landing/WebsiteLanding.html') },
    { chunks: ['websiteSearchRoom'], page: 'WebsiteSearchRoom.html', template: path.join(__dirname, 'src/pages/pages/WebsiteSearchRoom/WebsiteSearchRoom.html') },
    { chunks: ['websiteRoom'], page: 'WebsiteRoom.html', template: path.join(__dirname, 'src/pages/pages/WebsiteRoom/WebsiteRoom.html') },
]
module.exports = result;