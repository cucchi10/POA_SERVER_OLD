import config from "./../config";

const sql = require('mssql')


let connection = null;

const getConnection = () => {
    if(connection){
        return connection
    }

    connection = sql.connect({
        server: config.server,
        database: config.database,
        user: config.user,
        password: config.password,
        pool: config.poll,
        options: config.options
    });

    return connection;
};

module.exports = {
    getConnection
};