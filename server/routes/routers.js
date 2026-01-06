const express = require('express')
const { getAllRouters, addRouter, deleteRouter, updateRouter } = require('../controllers/routerController')
const router = express.Router()

router.route ('/').get(getAllRouters).post(addRouter)

router.route ('/:id').delete(deleteRouter).patch(updateRouter)

module.exports = router