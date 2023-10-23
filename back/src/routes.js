const router = require('express').Router();
const { getCharacterById } = require('./controllers/characterController');

const routes = () => {

    router.get('/', (req, res) => {
        res.status(200).send('Hello World');
    });
    
    router.get('/character/:id', getCharacterById);

    router.get('*', (req, res) => {
        res.status(404).send('Error 404 Not found');
    });

    return router;
}

module.exports = {
    routes
}
