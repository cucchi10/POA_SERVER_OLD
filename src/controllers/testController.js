import testService from '../services/testService';

const getTest = async (req, res) => {
    try {
        const result = await testService.getTest()
        res.send(result);
    } catch (error) {
        res.status(error.status || 500).send(error.message);
    }
};

module.exports = {
    getTest,
};