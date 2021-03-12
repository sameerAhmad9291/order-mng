import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { orders } from './orders.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    users,
    orders,
    alert
});

export default rootReducer;