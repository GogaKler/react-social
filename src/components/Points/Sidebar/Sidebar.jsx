import { NavLink } from "react-router-dom";


const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul className="sidebar__menu">
				<li className="sidebar__menu-item">
					<NavLink className="sidebar__menu-link" to="/profile">Профиль</NavLink>
				</li> 
				<li className="sidebar__menu-item">
					<NavLink className="sidebar__menu-link" to="/dialogs">Диалоги</NavLink>
				</li>
				<li className="sidebar__menu-item">
					<NavLink className="sidebar__menu-link" to="/friends">Друзья</NavLink>
				</li>
				<li className="sidebar__menu-item">
					<NavLink className="sidebar__menu-link" to="/music">Музыка</NavLink>
				</li>
				<li className="sidebar__menu-item sidebar__menu-item--settings">
					<NavLink className="sidebar__menu-link" to="/settings">Настройки</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar;