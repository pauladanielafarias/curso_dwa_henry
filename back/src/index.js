const { server } = require('./server');
const { conn } = require('./services/DB_connection');

conn.sync({ force: true })
    .then(() => {
    console.log('DB connection successful');
    })
    .catch((err) => {
    console.log('DB connection error', err);
    }
);
server();