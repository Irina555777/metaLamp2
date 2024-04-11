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
}

result.pages = [
    { chunks: ['main'], page: 'index.html', template: path.join(__dirname, '/src/pages/index.html'), },
    { chunks: ['uiCards'], page: 'UiCards.html', template: path.join(__dirname, 'src/pages/pages/UI-cards/UiCards.html') },
    { chunks: ['uiColorsType'], page: 'UiColorsType.html', template: path.join(__dirname, 'src/pages/pages/UI-colors-type/UiColorsType.html') },
    { chunks: ['uiHeadersFooters'], page: 'UiHeadersFooters.html', template: path.join(__dirname, 'src/pages/pages/UI-headers-footers/UiHeadersFooters.html') },
    { chunks: ['uiFormElements'], page: 'UiFormElements.html', template: path.join(__dirname, 'src/pages/pages/UI-form-elements/UiFormElements.html') },
]
module.exports = result;