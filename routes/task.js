const express = require('express')
const router = express.Router()
const taskController = require('../controller/task')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', taskController.findAll)
router.post('/',taskController.create)
router.get('/:id', taskController.findByPk)
router.put('/:id', authorization, taskController.update)
router.patch('/:id', authorization, taskController.updateColumn)
router.delete('/:id',authorization, taskController.delete)
module.exports = router