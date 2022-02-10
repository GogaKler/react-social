import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Points from "./components/Points/Points";

function App(props) {
	return (
		<BrowserRouter>
			<main>
				{/* header */}
				<Header />
				{/* Points */}
				<Points 
					DialogsItemData = {props.DialogsItemData}
					MessagesData = {props.MessagesData}
					PostData = {props.PostData}
				/>
			</main>
		</BrowserRouter>
	)
}

export default App;
