//const { get } = require("../server/routes");

function getChirps() {
    $.ajax({ // jquery ajax takes an object as its argument
        type: 'GET',
        url: '/api/chirps' // because the website is in the same place as the server, we don't have to write localhost:3000 here
        // the ajax request is getting my api from /api/chirps and storing it in a function that can then be manipulated on the front end
    })
        .then(chirps => displayChirps(chirps)); // this happens after the ajax request happens
}

function displayChirps(chirps) {
    $('#chirps').empty(); // this will empty the chirps list after a change, such as delete, is made, before appending the newly updated chirps list
    chirps.forEach(chirp => {
        $('#chirps').append(` 
            <div class="col-md-7">
                <div class="card my-2 shadow">
                    <div class="card-body">
                        <h5 class="card-title">${chirp.name}</h5>
                        <p class="card-text">${chirp.text}</p>
                        <div class="d-flex justify-content-between">
                            <button onclick="editChirp('${chirp.id}', '${chirp.name}', '${chirp.text}')" class="btn btn-outline-info">Edit</button>
                            <button onclick="deleteChirp(${chirp.id})" class="btn btn-outline-danger">Delete</button>
                        </div>                       
                    </div>
                </div>
            </div>
        `)
    })
}

getChirps();

function deleteChirp(id) {
    $.ajax({
        type: 'DELETE',
        url: `/api/chirps/${id}`
    })
        .then(res => {
            console.log(res)
            getChirps(); // get the updated chirps list after one is deleted. do this instead of refreshing the page
        })
        .catch(e => console.log(e));
}

function editChirp(id, name, text) {
    
}