const SET_TOOGLE_MENU = "SET_TOOGLE_MENU"

let initalState = {
	sidebarToggle: true
}

const SidebarReducer = (state = initalState, action) => {
	switch (action.type) {
		case SET_TOOGLE_MENU:
			return{
				...state,
				sidebarToggle: state.sidebarToggle === !action.toggleStatus ? true : false
			}

		default:
			return state
	}
}


export const SetToggleMenu = (toggleStatus) => ({type: SET_TOOGLE_MENU, toggleStatus})

export default SidebarReducer;