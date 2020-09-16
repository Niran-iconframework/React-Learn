///4. สร้างตัวกล่าวของ reducers
import {combineReducers} from 'redux'
import counters from './reducer'

export default combineReducers({
    counters
})