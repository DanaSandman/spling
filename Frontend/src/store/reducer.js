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
            console.log('reducer1', state.mediaLink);
            return {
                ...state, mediaLink: action.mediaLink
            };
        case 'SELECTED_MEDIA_TYPE':
            console.log('reducer', action.mediaName);
            return {
                ...state, mediaType: action.mediaName
            };
        case 'SET_ORDER':
            console.log('reducer', action.orderDetails);
            return {
                ...state, orderDetails: action.orderDetails
            };
        case 'SET_CARDCOME_LINK':
            console.log('reducer', action.cardComLink);
            return{
                ...state, cardComLink: action.cardComLink
            };
        default:
            return state
    }
}