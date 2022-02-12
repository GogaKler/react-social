import { NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<ul className='myPosts-menu'>
			<li className='myPosts-menu__item'><NavLink to="#s" className='myPosts-menu__link'>Посты</NavLink></li>
			<li className='myPosts-menu__item'><NavLink to="#s" className='myPosts-menu__link'>Понравившиеся</NavLink></li>
		</ul>
	)
}
export default Menu;