var express = require('express');
var bodyParser = require('body-parser');
const { Pool } = require('pg');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))

// variables to be manipulated by buttons

let question = [];

// handle requests

// RETRIEVE names - send array of all names in button_names table

app.get('/trivia', (request, response) => {
    console.log(`Got request for question`);
    pool.query('SELECT trivia FROM trivia ORDER BY id')
	.then(res => {
	    let arr = [];
	    console.log('DB response: ');
	    res.rows.forEach(val => {
		console.log(val);
		arr.push(val);
	    });
	    response.send({question: arr})
	})
	.catch(err =>
	       setImmediate(() => {
		   throw err;
	       }));
})


// catch 404 and forward to error handler

app.use(function(request, response, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, request, response, next) {
  // set locals, only providing error in development
  response.locals.message = err.message;
  response.locals.error = request.app.get('env') === 'development' ? err : {};

  // render the error page
  response.status(err.status || 500);
});


/* Main program */

console.log(`Starting button-server-db app`);

const lib = require('./mcalib');
lib.setErrorPrefix(__filename);  // set label for lib error messages

// database connection parameters
const dbHost = "csinparallel.cs.stolaf.edu";
const user = 'edward7';    // CHANGE to your username, e.g., jones1
//const password = lib.getPGPassword(dbHost);  // uncomment for Windows
const dbName = 'mca_s20';
const schema = 'mca_s20_trivia';  // CHANGE to your username as schema for Lab 5
                       // CHANGE to team schema for project

const pool = new Pool({
    user: user,
//    password: password,                      // uncomment for Windows
    host: dbHost,
    database: dbName,
    port: 5432,
});

pool.on('connect', client => {
    client.query(`SET search_path = ${schema}, public;`)
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

console.log(`Connected to database ${dbName} on ${dbHost}`);
pool.query('SELECT quest FROM trivia')
	.then(res => {
		console.log('DB response: ');
	    console.log(res.rows[0]);
	    //response.send(res.rows[0]);
	})
	.catch(err =>
	       setImmediate(() => {
		   throw err;
	       }));
console.log("IP addresses:  ", lib.getIPAddresses());

module.exports = app;
