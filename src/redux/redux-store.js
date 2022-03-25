import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./auth_reducer";

// reducers 
import DialogsReducer from "./dialogs_reducer";
import ProfileReducer from "./profile_reducer";
import UsersReducer from "./users_reducer";
import AppReducer from './app_reducer';

let reducers = combineReducers(
	{
		auth: AuthReducer,
		app: AppReducer,
		profile: ProfileReducer,
		dialogs: DialogsReducer,
		users: UsersReducer,
	}
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store
window.storeState = store.getState();
export default store;