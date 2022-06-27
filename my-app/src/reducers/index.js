import {combineReducers} from 'redux'

import empReducer from './EmpReducers.js'
import userReducer from './UserReducers.js'
import studentReducer from './StudentReducers.js'

var rootReducers = combineReducers({
    empReducer,userReducer,studentReducer 
});
export default rootReducers;