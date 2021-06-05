const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log('Dir created');
// })

const filePath = path.join(__dirname, 'test', 'text.txt');

// fs.writeFile(filePath, 'Hello node.js', (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log('File created');

//   fs.appendFile(filePath, '\nHello again node.js', (err) => {
//     if (err) {
//       throw err;
//     }
  
//     console.log('File updated');
//   })
// })

// fs.readFile(filePath, (err, content) => {
//   if (err) throw err;

//   const text = Buffer.from(content);

//   console.log('content: ', text.toString());
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) throw err;

  console.log('content: ', content);
})

