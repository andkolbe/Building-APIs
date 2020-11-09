const express = require('express');
const chirpsRouter = require('./chirps'); // import like other modules but with a relative path
let router = express.Router(); // index.js needs a router too

router.use('/chirps', chirpsRouter); // this connects chirps.js to index.js



module.exports = router;

// index.js pulls in all other routes. you put them all in the index.js so you don't have to put them in server.js and get jumbled with everything else. keeps your code looking neat and tidy