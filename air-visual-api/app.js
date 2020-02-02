const express = require('express')
const app = express()

const mongoose = require('./db/mongoose')

const bodyParser = require('body-parser')

const {
    Location
} = require('./db/models')

// middleware
app.use(bodyParser.json())
// cors header
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// post the location 
app.post('/locations', (req, res) => {
    let country = req.body.country
    let city = req.body.city
    let code = req.body.code
    let lat = req.body.lat
    let lang = req.body.lang

    let newLocation = new Location({
        country,
        city,
        code,
        lat,
        lang
    })

    newLocation.save().then(newLocation => {
        res.send(newLocation)
    })
})

// delete
app.delete('/locations/:code', (req, res) => {
    Location.findOneAndRemove({
        code: req.params.code
    }).then(removedLocation => {
        res.send(removedLocation)
    })
})

// get location by the city
app.get('/locations/:code', (req, res) => {
    Location.findOne({
        code: req.params.code
    }).then((location) => {
        res.send(location)
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000.')
})