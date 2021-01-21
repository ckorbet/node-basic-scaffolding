import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

// Create our Express application
const app = express();

app.use(bodyParser.urlencoded({
  extended: true,
}));

// app.use(bodyParser.json({ limit: environment.limit_body_parser }));

// Add headers
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Accept', 'application/json');
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();
});

// Health Actuator
app.get(`/health`, (req, res) => {
    res.sendStatus(200);
});
  
// Register all our routes with /api
app.use('/', require('./routers').default);

// Error Handler
app.use(methodOverride());
app.use((err, req, res, next) => {
  if (err) {
    console.error(err.stack);
    next(err);
  }
});

// Use environment defined port or 8080
const port = process.env.PORT || 8080;

console.log(`Running on http://localhost:${port}`);

// Start the server
module.exports = app.listen(port);
