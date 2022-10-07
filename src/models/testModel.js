import { getConnection } from "../database/database";
import HttpError from '../errors/HttpError';

const getAll = async () => {
    try {
        const connection = await getConnection();
        return connection.query("SELECT * FROM canes");
    } catch (error) {
        throw new HttpError("Internal server error")
    }
};

module.exports = {
    getAll,
};

