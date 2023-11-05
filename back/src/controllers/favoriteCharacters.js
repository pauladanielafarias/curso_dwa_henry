const { checkCharacter } = require("../helpers/character");

const addFavoriteCharacter = async (req, res) => {
    const msgLocation = 'Controllers::favoriteCharacters::addFavoriteCharacter()';
    try {
        const character = {
            id: req.body.id,
            name: req.body.name,
            status: req.body.status,
            species: req.body.species,
            gender: req.body.gender,
            origin: req.body.origin.name,
            image: req.body.image,
        }
        console.log(`${msgLocation}`, character);

        await checkCharacter(character);

        res.status(200).json({ message: 'Character added to favorites' });

    }
    catch (error) {
        console.error(`${msgLocation}::error`, error);
    }
}

module.exports = {
    addFavoriteCharacter
}