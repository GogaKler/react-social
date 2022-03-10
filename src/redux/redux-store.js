import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./auth_reducer";

// reducers 
import DialogsReducer from "./dialogs_reducer";
import ProfileReducer from "./profile_reducer";
import SidebarReducer from "./sidebar_reducer";
import UsersReducer from "./users_reducer";

let reducers = combineReducers(
	{
		auth: AuthReducer,
		profile: ProfileReducer,
		dialogs: DialogsReducer,
		users: UsersReducer,
		sidebar: SidebarReducer,
	}
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store
window.storeState = store.getState();
export default store;