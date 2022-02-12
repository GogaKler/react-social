import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Points from "./components/Points/Points";
import Sidebar from "./components/Sidebar/Sidebar";

function App(props) {
	return (
		<BrowserRouter>
			<main>
				{/* header */}
				{/* <Header /> */}

				{/* sidebar */}
				<Sidebar />

				{/* Points */}
				<Points 
					state = {props.state}
					addPost = {props.addPost}
				/>

			</main>
		</BrowserRouter>
	)
}

export default App;
