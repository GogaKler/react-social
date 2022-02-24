import React from 'react'
import SidebarMenu from './SidebarMenu/SidebarMenu';
import "./../../css/sidebar.css";

const Sidebar = (props) => {

	return (
		<div className="sidebar__wrapper">
			<div className= {props.sidebar.sidebarToggle	 ? "sidebar" : "sidebar close"}>
				<div className="sidebar__header">
					<div className="sidebar__img-text">
						<span className="sidebar__header-img">
							<i className="bi bi-hurricane"></i>
						</span>
						<div className="text sidebar__header-text">
							React <span>Social</span>
						</div>
						<div className="sidebar__header--arrow">
							<i onClick={props.SetToggleMenu} className="bi bi-chevron-right sidebar__toggle"></i>
						</div>
					</div>
				</div>
				<div className="sidebar__bar">
					<li className="sidebar__search">
						<i className="bi bi-search"></i>
						<input type="search" placeholder="Поиск.."></input>
					</li>
					<SidebarMenu />
				</div>
				
			</div>
		</div>
	)
}

export default Sidebar;