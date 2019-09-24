const winston = require('winston');
const express = require('express');
const app = express();


require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();


const port = process.env.Port || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));

//mongodb+srv://farouk:5hrvlvrurk45@cluster0-9qh0l.mongodb.net/test