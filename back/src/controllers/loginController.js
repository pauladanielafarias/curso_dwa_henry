const { checkUser, checkPassword } = require('../helpers/user');

require('dotenv').config();

const loginUser = async (req, res) => {
    const msgLocation = 'Controllers::loginController::loginUser()';
    try {
        const { email, password } = req.body;
        console.log(`${msgLocation}::user`, email);

        const authorizeUser = await checkUser(email);
        console.log(`${msgLocation}::authorizeUser`, authorizeUser);

        if (!authorizeUser) {
            res.status(404).json({
                error: 'El usuario no existe.'
            });
        }
        else {
            const authorizePassword = await checkPassword(email, password);
            console.log(`${msgLocation}::authorizePassword`, authorizePassword);
            if (!authorizePassword) {
                res.status(401).json({
                    error: 'La contraseña es incorrecta.'
                })
            }
            else {
                req.session.user = email;
                res.status(200).json({
                    message: 'Login exitoso.'
                });
            }
        }

    }
    catch (error) {
        console.error(`${msgLocation}::error`, error);
        res.status(500).json(error);
    }
}

module.exports = {
    loginUser
}