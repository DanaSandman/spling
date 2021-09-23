import {
    storageService
} from "./order-storage.service.js";
import {
    httpService
} from "./http.service.js";

const STORAGE_KEY = "orders";

export const orderService = {
    saveOrder,
    charge,
    getPaymentDetails,
    getOrderById,
    updateOrder
};

//CHOOSE localstorageService OR httpService
async function saveOrder(order) {
    // return await storageService.post(STORAGE_KEY, order);
    return httpService.post("order/", order);

}
async function updateOrder(data) {
    return await httpService.put("order/", data);
}
async function getOrderById(orderId) {
    // return await storageService.get(STORAGE_KEY, orderId);
    return await httpService.get(`order/${orderId}`);
}
//API CARDCOM
async function charge(_productName, _price, orderId) {
    const data = {
        _productName,
        _price,
        orderId
    }
    console.log('data charge front', data);
    const transaction =  await httpService.put("payment/", data)
    return resUrl(transaction)
}
async function getPaymentDetails(lowProfileCode) {
    return httpService.post("payment/", lowProfileCode)
}
//CLEAN RES
function resUrl(data) {
    const urlStart = data.indexOf("&url=")
    const urlEnd = data.indexOf("&", urlStart + 1)
    const fullUrl = data.substr(urlStart + 5, (urlEnd - (urlStart + 5)));
    return replace(fullUrl)
}
function replace(data) {
    return data.replaceAll("%2f", "/").replaceAll("%3f", "?").replaceAll("%3a", ":").replaceAll("%3d", "=");
}