const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul className="sidebar__menu">
				<li className="sidebar__menu-item"><a className="sidebar__menu-link" href="#s">Профиль</a></li>
				<li className="sidebar__menu-item"><a className="sidebar__menu-link" href="#s">Сообщения</a></li>
				<li className="sidebar__menu-item"><a className="sidebar__menu-link" href="#s">Друзья</a></li>
				<li className="sidebar__menu-item"><a className="sidebar__menu-link" href="#s">Музыка</a></li>
				<li className="sidebar__menu-item sidebar__menu-item--settings"><a className="sidebar__menu-link" href="#s">Настройки</a></li>
			</ul>
		</div>
	)
}

export default Sidebar;