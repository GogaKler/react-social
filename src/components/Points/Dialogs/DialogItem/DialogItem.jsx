import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;

	return (
		<ul className="dialogs-menu">
			<NavLink to={path} className='dialogs-menu__item'>
				<img className='dialogs-menu__user-img' src="https://a.d-cd.net/1a424f2s-960.jpg" alt="" />
				<span className="dialogs-menu__user-name">{props.name}</span>
				<span className="dialogs-menu__pass-messages">1</span>
			</NavLink>
		</ul>
	)
}

export default DialogItem;