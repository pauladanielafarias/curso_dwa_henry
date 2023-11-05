import axios from 'axios';
import constants from '../../helpers/constants';

const createUser = async (data) => {
    try {
        const config = {
            method: 'post',
            url: `${constants.BACK_URL}/signup`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const response = await axios(config);

        return response.status;

    }
    catch (error) {
        return error.response.status;
    }
}

export default createUser;