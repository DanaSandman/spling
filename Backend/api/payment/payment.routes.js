const express = require('express')
const { charge , getPaymentDetails } = require('./payment.controller')

const router = express.Router()
 
router.put('/', charge)
router.post('/', getPaymentDetails)

module.exports = router