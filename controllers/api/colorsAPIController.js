const { Color } = require('../../database/models');

const colorsAPIController = {
    index : async (req, res) => {
        try {
            const colors = await Color.findAll();
            res.json(colors);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = colorsAPIController;