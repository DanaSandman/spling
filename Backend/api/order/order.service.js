const dbService = require('../../service/db.service.js')
const util = require('../../service/util.js')

async function query(filterBy = {}) {
    try {
        const collection = await dbService.getCollection('order')
        const orders = await collection.find(filterBy).toArray()
        return orders
    } catch (err) {
        // logger.error('cannot find toys', err)
        console.log('cannot find orders', err);
        throw err
    }
}
async function save(order) {
    try {
        const orderToAdd = order
        orderToAdd._id = util.makeId();
        const collection = await dbService.getCollection('order')
        await collection.insertOne(orderToAdd)
        return orderToAdd._id
    } catch (err) {
        // logger.error('cannot insert art', err)
        throw err
    }
}
async function update(order) {
    try {
        console.log('service order to update id', order._id);
        console.log('service order to update', order);
        const orderToSave = {
            _id: order.orderId,
            lowProfileCode: order.lowProfile,
            paymentDetails: order.paymentDetails
        }
        const collection = await dbService.getCollection('order')
        await collection.updateOne({
            '_id': orderToSave._id
        }, {
            $set: orderToSave
        })
        const orders = await query();
        return orders
    } catch (err) {
        // logger.error('cannot insert order', err)
        throw err
    }
}

module.exports = {
    query,
    save,
    update
}