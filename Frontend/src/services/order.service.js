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
    console.log("service front order", order);
    // return await storageService.post(STORAGE_KEY, order);
    return httpService.post("order/", order);

}
async function updateOrder(data){
    return await httpService.put("order/",data);
}
async function getOrderById(orderId) {
    console.log('front service order id', orderId);
    // return await storageService.get(STORAGE_KEY, orderId);
    return await httpService.get(`order/${orderId}`);
}
//API CARDCOM
async function charge(_productName, _price, orderId) {
    console.log('order service orderId',orderId);

    const params = {
        TerminalNumber: 1000,
        Operation: 1,
        UserName: "barak9611",
        SumToBill: _price,
        CoinId: 1,
        Language: "he",
        ProductName: _productName,
        APILevel: 10,
        Codepage: 65001,
        SuccessRedirectUrl: `http://localhost:3000/#/payment/success/${orderId}`,
        ErrorRedirectUrl: "http://www.ynet.co.il",
        IndicatorUrl: "http://www.site.com/hide.aspx",
    };

    const data = `TerminalNumber=${params.TerminalNumber}&Operation=1&UserName=${params.UserName}&SumToBill=${params.SumToBill}&CoinId=${params.CoinId}&Language=${params.Language}&ProductName=${params.ProductName}&APILevel=10&Codepage=65001&SuccessRedirectUrl=${params.SuccessRedirectUrl}&ErrorRedirectUrl=${params.ErrorRedirectUrl}&IndicatorUrl=http://www.site.com/hide.aspx`;
    const endPoint = "https://secure.cardcom.solutions/Interface/LowProfile.aspx";
    return httpService.post(endPoint, data);
}
async function getPaymentDetails(lowProfileCode) {
    console.log('getPaymentDetails order.service',lowProfileCode);
    const params = {
        TerminalNumber: 1000,
        UserName: "barak9611",
        LowProfileCode : lowProfileCode
    };

    const data = `TerminalNumber=${params.TerminalNumber}&username=${params.UserName}&lowprofilecode=${params.LowProfileCode}`;
    const endPoint = "https://secure.cardcom.solutions/Interface/BillGoldGetLowProfileIndicator.aspx";
    return httpService.post(endPoint, data);
}



