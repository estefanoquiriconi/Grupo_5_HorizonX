const { Brand } = require('../../database/models');

const brandsAPIController = {
    index : async (req, res) => {
        try {
            const brands = await Brand.findAll();
            res.json(brands);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = brandsAPIController;