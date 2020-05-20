const { Pool } = require ('pg');

//const lib = require('./mcalib');             // uncomment for Windows
//lib.setErrorPrefix(__filename);              // uncomment for Windows

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

process.argv.forEach(function (arg, index) {
    if (index >= 2) { // skip the program name 'node' and this file's name
	console.log(index-1 + ": " + arg);
	pool.query(arg)
	    .then(res => {
		if (res.rows.length == 1)
		    console.log(index-1 +": ", res.rows[0]);
		else {
		    console.log(index-1 +": ");
		    res.rows.forEach((val, i) => {
			console.log("  ["+i+"]: ", val)});
		}
	    })
	    .catch(err =>
		   setImmediate(() => {
		       throw err;
		   })
		  );
    }});

pool.end();
