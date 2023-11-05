const router = require('express').Router();
const { addFavoriteCharacter } = require('./controllers/favoriteCharacters');
const { getCharacterById } = require('./controllers/characterController');
const { createUser } = require('./controllers/createUser');
const { loginUser } = require('./controllers/loginController');

const routes = () => {

    router.get('/', (req, res) => {
        res.status(200).send('Hello World');
    });
    

    router.get('/character/:id', getCharacterById);

    router.post('/login', loginUser)

    router.post('/signup', createUser);

    router.post('/addCharacter', addFavoriteCharacter);

    router.get('*', (req, res) => {
        res.status(404).send('Error 404 Not found');
    });

    return router;
}

module.exports = {
    routes
}
