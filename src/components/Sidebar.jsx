const Sidebar = () => {
	return(
		<div className="sidebar">
			<ul className="sidebar__menu">
				<li className="sidebar__item"><a className="sidebar__link" href="#s">Профиль</a></li>
				<li className="sidebar__item"><a className="sidebar__link" href="#s">Сообщения</a></li>
				<li className="sidebar__item"><a className="sidebar__link" href="#s">Друзья</a></li>
				<li className="sidebar__item"><a className="sidebar__link" href="#s">Музыка</a></li>
				<li className="sidebar__item sidebar__item--settings"><a className="sidebar__link" href="#s">Настройки</a></li>
			</ul>
		</div>
	)
}

export default Sidebar;