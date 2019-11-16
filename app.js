const express = require('express');
const app = express();
const port = 3000;

// root route
app.get('/', (req, res) => res.send('Welcome to Home Page'));

// Handle unexisting routes (404 response)
app.use(function(req, res, next) {
  res.status(404).send("sorry can't find that!")
});

// Handle errors (500 response)
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Launch server
app.listen(port, () => console.log(`App listening on port ${port}!`));
