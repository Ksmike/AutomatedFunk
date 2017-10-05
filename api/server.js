const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

const config = require('./config/credentials');
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(config.databaseConfig.url, (err, database) => {
	if (err) {return console.log(err);}
	require('./routes')(app, database);
	app.listen(port, () => {
		console.log('We are live on ' + port);
	});
});