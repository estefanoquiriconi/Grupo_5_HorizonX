const { ProductImage } = require('../../database/models')
const path = require('path')

const productImageAPIController = {
  show: async (req, res) => {
    try {
      const image = await ProductImage.findOne({
        where: {
          id: req.params.imageId,
        },
      })

      if (!image) {
        return res.status(404).send({ message: 'Imagen no encontrada' })
      }

      const imagePath = path.join(
        __dirname,
        '../../public/images/products/' + image.image_filename
      )

      res.sendFile(imagePath)
    } catch (error) {
      console.error(error)
    }
  },
}

module.exports = productImageAPIController
