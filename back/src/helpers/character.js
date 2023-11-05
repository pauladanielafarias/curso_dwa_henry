const { Favorite } = require("../services/DB_connection");

const checkCharacter = async (character) => {
    const msgLocation = 'Helpers::character::checkCharacter()';
    const get_character = await Favorite.findOne({ where: { id: character.id } });
    console.log(`${msgLocation}::character`, get_character);

    if (!get_character) {
        await createCharacter(character)
    }
    return true;
}

const createCharacter = async (character) => {
    const msgLocation = 'Helpers::character::createCharacter()';
    const new_character = await Favorite.create(character);
    console.log(`${msgLocation}::new_character`, new_character);
}

module.exports = {
    checkCharacter
}
