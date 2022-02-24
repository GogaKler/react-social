import { combineReducers, createStore } from "redux";

// reducers 
import DialogsReducer from "./dialogs_reducer";
import ProfileReducer from "./profile_reducer";
import SidebarReducer from "./sidebar_reducer";
import UsersReducer from "./users_reducer";

let reducers = combineReducers(
	{
		profile: ProfileReducer,
		dialogs: DialogsReducer,
		users: UsersReducer,
		sidebar: SidebarReducer,
	}
);

let store = createStore(reducers);

window.store = store
window.storeState = store.getState();
export default store;