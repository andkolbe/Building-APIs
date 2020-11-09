const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const apiRouter = require('./routes'); // this will grab the index.js
const app = express();

app.use(cors()); // setting up our middleware with use
app.use(morgan('dev'));
app.use(express.json()); // body parser. this must go before the routes
app.use(express.static('client')); // connects back end with front end
app.use('/api', apiRouter); // this is the same way we put chirps.js into index.js



app.listen(3000, () => console.log('Server is running')); // always goes in the server.js

// cors - (cross origin resource sharing) - allows cross-domain HTTP requests. the browser blocks requests without it
// it lets the client app run on one web server and api run on another and allow it to call it

// server.js is the entry point to the application. it imports all routes, configs, etc
// because of this, we need a routes directory to store all of the routes