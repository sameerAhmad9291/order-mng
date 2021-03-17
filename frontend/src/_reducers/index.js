import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { orders } from './orders.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    orders,
    alert
});

export default rootReducer;