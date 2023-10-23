const axios = require('axios');

const getCharacterById = async (req, res) => {
    const url = process.env.API_RICKANDMORTY_URL;
    const msgLocation = 'Controllers::characterController::getCharacterById()';
    try {
        const { id } = req.params;
        let character = await axios({
            method: 'get',
            url: `${url}/character/${id}`
        });
        character = character.data;
        console.log(`${msgLocation}::character`, character);
        
        res.status(200).json(character);
        
    } catch (error) {
        console.error(`${msgLocation}::error`, error);
        res.status(500).json(error);
    }


}

module.exports = {
    getCharacterById
}
