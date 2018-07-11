import { INCREMENT , INPUT, RESET } from './action';

export default (state = {
    value: 0
}, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, value: state.value + 1};
        case INPUT:
            return {...state, value: state.value + action.value};
        case RESET:
            return {...state, value: 0};
        default:
            return state;
    }
}