const axios = require('axios');
require('dotenv').config()

const BASE_URL = process.env.NODE_ENV === 'production' ? '//spling-touch.herokuapp.com/#/' : 'http://localhost:3000/#/'
const userName = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_CARDCOME_USER_NAME_PROD : process.env.REACT_APP_CARDCOME_USER_NAME_DEV
const terminalNumber = process.env.NODE_ENV === 'production' ? parseInt(process.env.REACT_APP_CARDCOME_TERMINAL_NUMBER_PROD) : parseInt(process.env.REACT_APP_CARDCOME_TERMINAL_NUMBER_DEV)

async function makeTransaction(transactionData) {
    const _productName = transactionData._productName
    const _price = transactionData._price
    const orderId = transactionData.orderId
    const parameters = {
        TerminalNumber: terminalNumber,
        Operation: 1,
        UserName: userName,
        SumToBill: _price,
        CoinId: 1,
        Language: "he",
        ProductName: _productName,
        APILevel: 10,
        Codepage: 65001,
        SuccessRedirectUrl: `${BASE_URL}payment/success/${orderId}`,
        ErrorRedirectUrl: "http://www.ynet.co.il",
        IndicatorUrl: "http://www.site.com/hide.aspx",
    };
    const data = `TerminalNumber=${parameters.TerminalNumber}&Operation=1&UserName=${parameters.UserName}&SumToBill=${parameters.SumToBill}&CoinId=${parameters.CoinId}&Language=${parameters.Language}&ProductName=${parameters.ProductName}&APILevel=10&Codepage=65001&SuccessRedirectUrl=${parameters.SuccessRedirectUrl}&ErrorRedirectUrl=${parameters.ErrorRedirectUrl}&IndicatorUrl=http://www.site.com/hide.aspx`;
    const endpoint = "https://secure.cardcom.solutions/Interface/LowProfile.aspx";
    return axiosReq(endpoint, 'POST', data)
}
async function getDetails(transactionData) {
    const parameters = {
        TerminalNumber: terminalNumber,
        UserName: userName,
        LowProfileCode: transactionData.lowProfileCode
    };
    const data = `TerminalNumber=${parameters.TerminalNumber}&username=${parameters.UserName}&lowprofilecode=${parameters.LowProfileCode}`;
    const endpoint = "https://secure.cardcom.solutions/Interface/BillGoldGetLowProfileIndicator.aspx";
    return axiosReq(endpoint, 'POST', data)
}

async function axiosReq(endpoint, method = 'GET', data = null) {
    try {
        const res = await axios({
            url: `${endpoint}`,
            method,
            data,
            params: (method === 'GET') ? data : null
        })
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
        console.dir(err)
        if (err.response && err.response.status === 401) {
            // Depends on routing startegy - hash or history
            window.location.assign('/#/login')
            throw err
        }
    }
}
module.exports = {
    makeTransaction,
    getDetails
}