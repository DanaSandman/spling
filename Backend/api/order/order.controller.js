const logger = require('../../service/logger.service')
const orderService = require('./order.service')

module.exports = {
    saveOrder,
    getOrder,
    updateOrder
}
//ADD
async function saveOrder(req, res) {
    try {
        var order = req.body
        var orderId = await orderService.save(order)
        res.send(orderId)
    } catch (err) {
        logger.error('Failed to add order', err)
        res.status(500).send({
            err: 'Failed to add order'
        })
    }
}
//UPDATE
async function updateOrder(req, res) {
    try {
      var order = req.body
      var orders = await orderService.update(order)
        res.send(orders)
    } catch (err) {
        logger.error('Failed to add order', err)
        res.status(500).send({
            err: 'Failed to add order'
        })
    }
}
//DETAILS
async function getOrder(req, res) {
    try {
        const orders = await orderService.query({ _id: req.params.id})
        res.send(orders[0])
    } catch (err) {
        logger.error('Cannot get orders', err)
        res.status(500).send({ err: 'Failed to get orders' })
    }
}
