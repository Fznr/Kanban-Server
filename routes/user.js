const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

router.post('/signup', userController.signup)

router.post('/signin', userController.signin)

router.post('/googlesign', userController.googleSign)


module.exports= router