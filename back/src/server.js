const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const bodyParser = require('body-parser');
const { routes } = require('./routes');

const server = () => {

    //create express app
    const app = express();

    //use morgan to log at command line
    app.use(morgan("dev"));

    //enable cors
    app.use(cors());
    //parse application/json and look for raw text
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/', routes());

    //listen to port
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`App "${process.env.npm_package_name}" listening at ${PORT}`)
    }
    );
}


module.exports = {
    server
};