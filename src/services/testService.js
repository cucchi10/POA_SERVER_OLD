import testModel from '../models/testModel';


const getTest = () => {
    try {
        return testModel.getAll()
    } catch (error) {
        return error
    }

}

module.exports = {
    getTest,
};