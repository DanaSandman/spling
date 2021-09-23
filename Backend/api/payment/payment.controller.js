const logger = require('../../service/logger.service')
const paymentService = require('./payment.service')

module.exports = {
    charge,
    getPaymentDetails,
}
async function charge(req, res) {
    try {
        var data = req.body
        console.log('payment controller service data', data);
        const transaction = await paymentService.makeTransaction(data)
        res.send(transaction)
    } catch (err) {
        logger.error('Failed to add order', err)
        res.status(500).send({
            err: 'Failed to add order'
        })
    }
}
async function getPaymentDetails(req, res) {
    try {
        var data = req.body
        console.log('payment controller service data', data);
        const paymentDetails = await paymentService.getDetails(data)
        res.send(paymentDetails)
    } catch (err) {
        logger.error('Failed to add order', err)
        res.status(500).send({
            err: 'Failed to add order'
        })
    }
}


