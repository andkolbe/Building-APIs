const express = require('express');
const chirpStore = require('../chirpstore'); // connecting chirpstore to our chirps route
let router = express.Router();

router.get('/:id?', (req, res) => { // get = read // ? means it's not required
    let id = req.params.id // this lets you access id if you provide the optional argument
    const data = chirpStore.GetChirps();
    const chirps = Object.keys(data).map(key => { // you have to convert your object of objects into an array of objects to manipulate it
        return {
            id: key,
            name: data[key].name, // can also use spread operator ...data[key] 
            text: data[key].text
        } // return the object structure that you want inside of your new array
    });
    /*
    const chirps = Object.keys(data).map(key => {(  // can also use this shorthand
            id: key,
            ...data[key]    
    )});
    */
    chirps.pop(); // pops the nextid off the end of the array
    
    if (id) {
        res.json(chirpStore.GetChirp(id));
    } else {
        res.json(chirps); // always use res.json instead of res.send. most modern servers respond with json. it's the standard
    }
});

router.post('/', (req, res) => { // post = create
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
}) // test out posts on postman

router.put('/edit/:id', (req, res) => { // you need the id because you need to know exactly which one you are changing. put is a combo of get and post
    chirpStore.UpdateChirp(req.params.id, req.body);
    res.status(200).json(`chirp ${req.params.id} edited`);
}) 

router.delete('/:id', (req, res) => {
    chirpStore.DeleteChirp(req.params.id);
    res.status(200).json('You are banished to the shadow realm!');
})






module.exports = router; // this will be imported into index.js

// each resource should be in its own route file
// use express.Router() to create a router for each resource
// index.js in the route directory will import and add the routes to the Express app

// chain get, post, put, and delete onto router


// 1:21:53