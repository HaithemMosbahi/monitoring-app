// TO DO : add cloud functions to generate monitoring data
const functions = require('firebase-functions');
const express = require('express');

const app = express()
app.get("/api/hello", (request, response) => {
    response.send("Hello from Express on Firebase Functions!")
});

app.get("/measurements", (request, response) => {
    const startDate = request.query.from;
    const endDate = request.query.to;
    response.send(`Generate measurements from ${startDate} to ${endDate}`);
});

// export the api 
exports.app = functions.https.onRequest(app)