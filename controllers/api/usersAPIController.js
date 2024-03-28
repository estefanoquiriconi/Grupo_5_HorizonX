const { User } = require('../../database/models')
const BASE_URL = 'http://localhost:8080'
const path = require('path')

const usersAPIController = {
  index: async (req, res) => {
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const offset = (page - 1) * limit
    const totalUsers = await User.count()
    const totalPages = Math.ceil(totalUsers / limit)
    const nextPageURL = BASE_URL + "/api/users" + "?page=" + (page+1)
    const prevPageURL = page > 1 ? BASE_URL + "/api/users" + "?page=" + (page-1) : ""

    try {
      const users = await User.findAll({
        include: ['role'],
        attributes: {
          exclude: ['role_id','password']},
        offset,
        limit,
      })
      users.forEach((user) => {
        user.setDataValue('detail', `${BASE_URL}/api/users/` + user.id)
        user.setDataValue('avatar', `${BASE_URL}/images/users/` + user.avatar)
      })

      res.json({
        meta: {
          status: 200,
          page,
          limit,
          totalUsers,
          totalPages,
          url: `${BASE_URL}/api/users`,
          nextPageURL,
          prevPageURL
        },
        data: {users},
      })
    } catch (error) {
      console.error(error)
    }
  },

  show: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id, {
        include: ['role'],
        attributes: {
          exclude: ['role_id','password']},
      })
      user.setDataValue('avatar', `${BASE_URL}/images/users/` + user.avatar)
      res.json(user)
    } catch (error) {
      console.error(error)
    }
  },

  last: async (req, res) => {
    try {
      const user = await User.findOne({
        order: [['id', 'DESC']],
        include: ['role'],
        attributes: {
          exclude: ['role_id','password']},
      })
      user.setDataValue('url', `${BASE_URL}/api/users/avatar/` + user.id)

      res.json(user)
    } catch (error) {
      console.error(error)
    }
  },

  avatar: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.userId,
        },
      })

      if (!user) {
        return res.status(404).send({ message: 'Usuario no encontrado' })
      }

      const avatarPath = path.join(
        __dirname,
        '../../public/images/users/' + user.avatar
      )

      res.sendFile(avatarPath)
    } catch (error) {
      console.error(error)
    }
  },

  count: async (req, res) => {
    try {
      return res.status(200).json({
        total : await User.count()
      })
    } catch (error) {
      console.error(error)
    }
  },
}

module.exports = usersAPIController
