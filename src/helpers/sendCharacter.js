import axios from "axios";
import constants from "./constants";

const BACK_URL = constants.BACK_URL;

const sendCharacter = async (character) => {
    const msgLocation = "Helpers::sendCharacter::sendCharacter()";
    try {

        await axios({
            method: "POST",
            url: `${BACK_URL}/addCharacter`,
            data: character,
        });
        return true;
    } catch (error) {
        console.log(error, msgLocation);
        return true;
    }
}

export default sendCharacter;
