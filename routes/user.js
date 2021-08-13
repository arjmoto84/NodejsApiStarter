const express = require('express')
const router = express.Router()

const UserController = require('../controllers/userController')
router.route('/')
  .get(UserController.index)
  .post(UserController.newUser)
  .patch()
  .put()
  .delete()

  module.exports = router