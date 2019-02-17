var express = require('express');
// A GET Route to `/survey` which should display the survey page.
app.get('/survey', function (req, res) {
    res.send('GET request to the homepage')
  })

// * A default, catch-all route that leads to `home.html` which displays the home page.
app.all('/home', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
  })