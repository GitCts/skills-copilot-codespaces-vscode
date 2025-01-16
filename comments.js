
//create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var comments = [];

// 1. create server
http.createServer(function(req, res) {
  //parse url
  var urlObj = url.parse(req.url, true);
  var pathName = urlObj.pathname;
  if (pathName == '/') {
    fs.readFile('./index.html', function(err, data) {
      if (err) {
        console.log(err);
        res.end('read file error');
      } else {
        res.end(data);
      }
    });
  } else if (pathName == '/addComment') {
    var comment = urlObj.query;
    comments.push(comment);
    res.end(JSON.stringify(comments));
  } else {
    fs.readFile('.' + pathName, function(err, data) {
      if (err) {
        console.log(err);
        res.end('read file error');
      } else {
        res.end(data);
      }
    });
  }
}).listen(3000, function() {
  console.log('server is running...');
});
// 2. create comments array
// 3. add /addComment route, when user submit a comment, add it to comments array
// 4. when user visit /loadComments, return comments array
// 5. when user visit other routes, return 404
// 6. when user visit /, return index.html
// 7. when user visit /index.html, return index.html
// 8. when user visit /style.css, return style.css
// 9. when user visit /comments.js, return comments.js