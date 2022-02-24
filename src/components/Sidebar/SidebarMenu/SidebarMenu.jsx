import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
	return (
			<ul className="sidebar-menu">
				<li className="sidebar-menu__item">
					<NavLink to="/profile" className="sidebar-menu__link">
						<i className="bi bi-house-door-fill"></i>
						<span className="text sidebar-menu__text">Профиль</span>
					</NavLink>
				</li>
				<li className="sidebar-menu__item">
					<NavLink to="/dialogs" className="sidebar-menu__link">
						<i className="bi bi-envelope"></i>
						<span className="text sidebar-menu__text">Диалоги</span>
					</NavLink>
				</li>
				<li className="sidebar-menu__item">
					<NavLink to="/friends" className="sidebar-menu__link">
						<i className="bi bi-person-fill"></i>
						<span className="text sidebar-menu__text">Друзья</span>
					</NavLink>
				</li>
				<li className="sidebar-menu__item">
					<NavLink to="/users" className="sidebar-menu__link">
						<i className="bi bi-people-fill"></i>
						<span className="text sidebar-menu__text">Пользователи</span>
					</NavLink>
				</li>
				<li className="sidebar-menu__item">
					<NavLink to="/music" href="#s" className="sidebar-menu__link">
						<i className="bi bi-music-note-list"></i>
						<span className="text sidebar-menu__text">Музыка</span>
					</NavLink>
				</li>
				<li className="sidebar-menu__item">
					<NavLink to="/settings" className="sidebar-menu__link">
						<i className="bi bi-gear-fill"></i>
						<span className="text sidebar-menu__text">Настройки</span>
					</NavLink>
				</li>
			</ul>
	)
}

export default SidebarMenu;