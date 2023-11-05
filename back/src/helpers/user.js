const { User } = require("../services/DB_connection");


const checkUser = async (user) => {
    const msgLocation = 'Helpers::user::checkUser()';
    const get_user = await User.findOne({ where: { email: user } });
    console.log(`${msgLocation}::user`, get_user);

    if (get_user) {
        return true;
    }
    else {
        return false;
    }
}

const checkPassword = async (user, password) => {
    const msgLocation = 'Helpers::user::checkPassword()';
    const get_password = await User.findOne({
        where: { email: user, password: password },
    });

    console.log(`${msgLocation}::password`, get_password);

    if (get_password) {
        return true;
    }
    else {
        return false;
    }

}

module.exports = {
    checkUser,
    checkPassword
}
