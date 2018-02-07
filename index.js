'use strict';
require('dotenv').config();
const express = require('express');
const app = express();



const bodyParser = require('body-parser');
const router = require('./router');
const cors = require('cors');

require('./db');



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors('*'));
app.use(router);
app.listen(4000, function(){
  console.log('running @4000');
})
