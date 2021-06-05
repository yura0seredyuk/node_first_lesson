// const chalk = require('chalk');
// const dataText = require('./data');

// console.log(chalk.blue('hello'));
// console.log(chalk.green(dataText));
// console.log(__filename);
// console.log(__dirname);

const http = require('http'); 
const fs = require('fs');
const path = require('path');

// const server = http.createServer((req, res) => {
//   // res.writeHead(200, {
//   //   'Content-Type': 'text/html'
//   // })

//   console.log(req.url);

//   if (req.url === '/') {
//      fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
//         if (err) throw err;

//         res.writeHead(200, {
//           'Content-Type': 'text/html'
//         }) 

//         res.end(data);
//      })
//   } else if (req.url === '/contact') {
//     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
//        if (err) throw err;

//        res.writeHead(200, {
//          'Content-Type': 'text/html'
//        }) 

//        res.end(data);
//     })
//  }

//   // res.end('<h1>HELLO</h1>');
// })


const server = http.createServer((req, res) => {
   let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url); 
   const ext = path.extname(filePath);
   let contentType = 'text/html';

   switch (ext) {
      case '.css':
        contentType = 'text/css';
        break;
      case '.js': 
        contentType = 'text/js';
        break;
      default: 
        contentType = 'text/html';
   }

   if (!ext) {
     filePath += '.html'
   }

   fs.readFile(filePath, (err, content) => {
     if (err) {
       fs.readFile(path.join(__dirname, 'public', 'error.html') , (err, data) => {
          if (err) {
            res.writeHead(500);
            res.end('Error');
          } else {
             res.writeHead(200, {
               'Content-Type': 'text/html' 
             })

             res.end(data); 
          }
       })
     } else {
      res.writeHead(200, {
        'Content-Type': contentType 
      })

      res.end(content);
     }
   });
})

const PORT = process.env.PORT || 2000

server.listen(PORT, () => {
  console.log(`server has been started on port ${PORT} ...`);
}); 
