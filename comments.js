//create web server
const express = require('express');
const app = express();
const port = 3000;
//use the comments.js file
const comments = require('./comments.js');

//set the view engine to ejs
app.set('view engine', 'ejs');

//use the comments.js file
app.use('/comments', comments);

//listen on port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});