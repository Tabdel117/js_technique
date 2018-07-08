import {INCREMENT, DECREMENT, RESET} from './Action.js'

export default ( state, action )=>{
        switch (action.type) {
        // case INCREMENT:
        // return {...state, [action.caption] :state[action.caption] + 1 };
        // case DECREMENT:
        // return {...state, [action.caption] :state[action.caption] - 1};
        // case RESET:
        // return {...state, [action.caption]: 0};
        case INCREMENT:
        return {...state, [action.caption] :state[action.caption] + 1 };
        case DECREMENT:
        return {...state, [action.caption] :state[action.caption] - 1};
        case RESET:
        return {...state, [action.caption]: 0};
        default:
        return state;
    }
}