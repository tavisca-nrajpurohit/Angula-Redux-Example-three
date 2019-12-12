import { createStore,combineReducers } from 'redux';
import {reducer, reducer2} from "./reducer";

export const store = createStore(combineReducers({
    form1: reducer,
    form2: reducer2
}));