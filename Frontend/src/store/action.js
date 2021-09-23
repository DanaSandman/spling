import {
    orderService
} from '../services/order.service.js';

export function setMediaLink(mediaLink) {
    return async dispatch => {
        try {
            dispatch({
                type: 'SET_MEDIA_LINK',
                mediaLink
            });
        } catch (err) {
            console.log('Name Actions: err in loaded Names', err);
        }
    };
}
export function setMediaType(mediaName) {
    return async dispatch => {
        try {
            dispatch({
                type: 'SELECTED_MEDIA_TYPE',
                mediaName
            });
        } catch (err) {
            console.log('Order Actions: err in set order', err);
        }
    };
}
export function setOrderDetails(orderDetails) {
    return async dispatch => {
        try {
            dispatch({
                type: 'SET_ORDER',
                orderDetails
            });
        } catch (err) {
            console.log('Actions: err in set order', err);
        }
    };
}
export function orderCompleted(orderDetails) {
    return async dispatch => {
        try {
            const orderId = await orderService.saveOrder(orderDetails);
            console.log('orderId action',orderId);

            const cardComLink = await orderService.charge('spling', 1, orderId);
            
            const lowProfile = getLowProfileCode(cardComLink);
            orderService.updateOrder({
                orderId,
                lowProfile
            })
            dispatch({
                type: 'SET_CARDCOME_LINK',
                cardComLink
            });
        } catch (err) {
            console.log('Actions: err in set order', err);
        }
    };
}
const getLowProfileCode = (data) => {
    const codeStart = data.indexOf("LowProfileCode=");
    const lowProfileCodeClean = data.substr(codeStart + 15, data.length - 1);
    return lowProfileCodeClean;
};