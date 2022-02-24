import { connect } from "react-redux";
import { SetToggleMenuAC } from "../../redux/sidebar_reducer";
import Sidebar from "./Sidebar";


let mapStateToProps = (state) => {
	return{
		sidebar: state.sidebar,
	}
}

let mapDispatchToProps = (dispatch) => {
	return{
		SetToggleMenu: (toggleStatus) => {
			dispatch(SetToggleMenuAC(toggleStatus))
		}
	}
}

export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)