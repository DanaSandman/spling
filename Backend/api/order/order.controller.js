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
        console.log(err)
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
      console.log('server controller',order);
      var orders = await orderService.update(order)
        res.send(orders)
    } catch (err) {
        console.log(err)
        logger.error('Failed to add order', err)
        res.status(500).send({
            err: 'Failed to add order'
        })
    }
}
//DETAILS
async function getOrder(req, res) {
    try {
        console.log('req.params.id controller-getorder',req.params.id);
        const orders = await orderService.query({ _id: req.params.id})
        // console.log('order controller', orders);
        console.log('order details controller orders',orders[0]);
        res.send(orders[0])
    } catch (err) {
        // logger.error('Cannot get orders', err)
        console.log('Cannot get orders', err);
        res.status(500).send({ err: 'Failed to get orders' })
    }
}
