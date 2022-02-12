import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const ProfileNavbar = () => {
	return (
		<div className="profile-navbar__wrapper">
			<Container>
				<div className="profile-navbar">
					<ul className="profile-menu">
						<li className='profile-menu__item'><NavLink to="#a" className='profile-menu__link'>Посты</NavLink></li>
						<li className='profile-menu__item'><NavLink to="#b" className='profile-menu__link'>Друзья</NavLink></li>
						<li className='profile-menu__item'><NavLink to="#c" className='profile-menu__link'>Подпичсики</NavLink></li>
						<li className='profile-menu__item'><NavLink to="#d" className='profile-menu__link'>Группы</NavLink></li>
						<li className='profile-menu__item'><NavLink to="#e" className='profile-menu__link'>Музыка</NavLink></li>
						<li className='profile-menu__item'><NavLink to="#f" className='profile-menu__link'>Файлы</NavLink></li>
					</ul>
					<div className='followMe'>
						<button className='button followMe__button'>Добавить в друзья</button>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default ProfileNavbar;