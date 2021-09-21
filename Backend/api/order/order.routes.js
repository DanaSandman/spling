const express = require('express')
const { saveOrder , getOrder, updateOrder } = require('./order.controller')

const router = express.Router()

router.post('/',saveOrder)
router.get('/:id', getOrder)
router.put('/', updateOrder)

module.exports = router
