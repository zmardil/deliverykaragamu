import { combineReducers } from 'redux'
import { store } from './store'
import { user } from './user'

export default combineReducers({
	store,
	user,
})
