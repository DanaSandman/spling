const initialState = {
    mediaType: 'instegram',
    mediaLink: '',
    lowProfileCode: '',
    paymentDetails: '',
    orderDetails: {},
};

export function mediaReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_MEDIA_LINK':
            return {
                ...state, mediaLink: action.mediaLink
            };
        case 'SELECTED_MEDIA_TYPE':
            return {
                ...state, mediaType: action.mediaName
            };
        case 'SET_ORDER':
            return {
                ...state, orderDetails: action.orderDetails
            };
        case 'SET_CARDCOME_LINK':
            return{
                ...state, cardComLink: action.cardComLink
            };
        default:
            return state
    }
}