import { combineReducers, createStore } from "redux";

// reducers 
import DialogsReducer from "./dialogs_reducer";
import ProfileReducer from "./profile_reducer";

let reducers = combineReducers(
	{
		profile: ProfileReducer,
		dialogs: DialogsReducer
	}
);

let store = createStore(reducers);


window.storeState = store.getState();
export default store;