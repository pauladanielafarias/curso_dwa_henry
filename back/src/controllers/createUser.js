const { checkUser } = require("../helpers/user");
const { User } = require("../services/DB_connection");

const createUser = async (req, res) => {
    const msgLocation = 'Controllers::createUser::createUser()';
    try {
        const { email, password } = req.body;
        console.log(`${msgLocation}::user`, email);

        const user = await checkUser(email);
        console.log(`${msgLocation}::authorizeUser`, user);

        if (user) {
            res.status(409).json({
                error: 'El usuario ya existe.'
            });
        }
        else {
            await User.create({
                email,
                password
            });
            res.status(200).json({
                message: 'Usuario creado exitosamente.'
            });
        }

    }
    catch (error) {
        console.error(`${msgLocation}::error`, error);
        res.status(500).json(error);
    }
}

module.exports = {
    createUser
}