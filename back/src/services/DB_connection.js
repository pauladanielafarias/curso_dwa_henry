require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const FavoriteModel = require('../models/Favorite.js');
const UserModel = require('../models/User.js');

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    { logging: false, native: false }
);

FavoriteModel(sequelize);
UserModel(sequelize);

const { User, Favorite, UserFavorite } = sequelize.models;

Favorite.belongsToMany(User, { through: 'UserFavorite' });
User.belongsToMany(Favorite, { through: 'UserFavorite' });

module.exports = {
    UserFavorite,
    User,
    Favorite,
    conn: sequelize,
};