var express = require('express');

// A GET route with the url `/data/friends`. This will be used to display a JSON of all possible friends.
app.get('/api/friends', function (req, res) {
    res.json('Display JSON on possible friends')
  })

// * A POST routes `/data/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post('/api/friends', function (req, res) {

  console.log(req.body);
    res.send('POST incoming survey results')
  })
