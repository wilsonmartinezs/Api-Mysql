const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');


const app = express();

// configuracion para recibir parametros
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config({path:'./env/.env'});

app.use(cors());
app.use(morgan('tiny'));


app.use(require('./routes/routeProducto'));
app.use(require('./routes/routeAutenticacion'));


app.listen(3000,() => {
    console.log('listening on port 3000');
});