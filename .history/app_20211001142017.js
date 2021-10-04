const express = require('express');
const app = express();
const config = require('config');
const mongoose = require('mongoose')
const PORT = config.get('port') || 5000;

app.listen(PORT, () => console.log('App has been started on port ${PORT}...'));

async function start (){
    try {
await mongoose.connect(config)
    }
    catch (e) {
        console.log('Server ERROR', e.message)
        process.exit(code:1)
    }
}
start ()