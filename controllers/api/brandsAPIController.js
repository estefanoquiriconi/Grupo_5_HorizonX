const { Brand } = require('../../database/models');
const BASE_URL = 'http://localhost:8080'

const brandsAPIController = {
    index : async (req, res) => {
        try {
            const brands = await Brand.findAll();
            //res.json();
            return res.json({
                meta: {
                  status: 200,
                  count: brands.length,
                  url: `${BASE_URL}/api/brands`,
                },
                data: brands,
              })
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = brandsAPIController;