import React from 'react'
import SidebarMenu from './SidebarMenu/SidebarMenu';
import "./../../css/sidebar.css";
import photoUser from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
	return (

		<div className={props.sidebar.sidebarToggle ? "sidebar" : "sidebar close"}>
			<div className="sidebar-content__wrapper">
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
				<li className="sidebar__search">
					<i className="bi bi-search"></i>
					<input type="search" placeholder="Поиск.."></input>
				</li>
				<div className="sidebar__bar">
					<SidebarMenu />
				</div>

				{props.isAuth
					? <>
						<li className="sidebar-menu__login">
							<NavLink to="/login" className="sidebar-menu__link login-block">
								<i className="login-block__verefic-free bi bi-patch-check"></i>
								<span className="sidebar-menu__text text">Вы успешно вошли</span>
							</NavLink>
						</li>
						<div className="auth-user">
							<div className="auth-user__images-wrapper">
								<img src={photoUser} className="currentUser__img" alt="avatar" />
							</div>
							<p className="auth-user__name text">{props.login}</p>
							<i className="bi bi-chevron-down text"></i>
						</div></>
					:
					<li className="sidebar-menu__login sidebar-menu__login-undefiend">
						<NavLink to="/login" className="sidebar-menu__link login-block">
							<i className="login-block__verefic-undefiend bi bi-patch-exclamation"></i>
							<span className="sidebar-menu__text text">Войдите в систему</span>
						</NavLink>
					</li>}

				{/* <li className="sidebar-menu__login">
					<NavLink to="/login" className="sidebar-menu__link login-block">
						{props.isAuth
							? <>
								<i className="login-block__verefic-free bi bi-patch-check"></i>
								<span className="sidebar-menu__text text">Вы успешно вошли</span>
							</>
							: <>
								<i className="login-block__verefic-undefiend bi bi-patch-exclamation"></i>
								<span className="sidebar-menu__text text">Войдите в систему</span>
							</>}
					</NavLink>
				</li>
				<div className="auth-user">
					<div className="auth-user__images-wrapper">
						<img src={photoUser} className="currentUser__img" alt="avatar" />
					</div>
					<p className="auth-user__name text">{props.login}</p>
					<i className="bi bi-chevron-down text"></i>
				</div> */}

			</div>
		</div>
	)
}

export default Sidebar;