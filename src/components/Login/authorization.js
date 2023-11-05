import axios from 'axios';
import constants from '../../helpers/constants';

const auth = async (data) => {
    let authorized = false;
    try {
        const config = {
            method: 'post',
            url: `${constants.BACK_URL}/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const response = await axios(config);

        if (response.status === 200) {
            authorized = true;
        }

        const authenticated = {
            authorized,
            status: response.status
        }

        return authenticated;
    }
    catch (error) {
        const authenticated = {
            authorized: false,
            status: error.response.status
        }
        return authenticated;
    }


}

export default auth;