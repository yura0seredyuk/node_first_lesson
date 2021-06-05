const path = require('path');

console.log('Filename: ', path.basename(__filename));

console.log('Directory name: ', path.dirname(__filename));

console.log('File extname:', path.extname(__filename));

console.log('Parce: ', path.parse(__filename));

console.log('join path: ', path.join(__dirname, 'server', 'index.html'));
  