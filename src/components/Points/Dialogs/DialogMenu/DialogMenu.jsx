
import DialogItem from "./DialogItem/DialogItem";


const DialogMenu = (props) => {
	let dialogElements = props.DialogsItemData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)

	return (
		<ul className="dialogs-menu">
			{dialogElements}
		</ul>
	)
}

export default DialogMenu;