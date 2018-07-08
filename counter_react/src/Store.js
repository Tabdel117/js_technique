import {createStore} from 'redux'
import reducer from './Reducer.js'
const initialValue={
    '1':0,
};
const store=createStore(reducer,initialValue);
export default store;
