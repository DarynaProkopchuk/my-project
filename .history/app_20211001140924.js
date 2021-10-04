const express = require('express');
const app = express();
const config = require('config');

const PORT = config.get ('port')
app.listen(5000, () => console.log('App has been started ...'));

