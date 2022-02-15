import Points from "./components/Points/Points";
import Sidebar from "./components/Sidebar/Sidebar";

function App(props) {
	return (
			<main>
				{/* header */}
				{/* <Header /> */}

				{/* sidebar */}
				<Sidebar />

				{/* Points */}
				<Points 
					state = {props.state}
					dispatch={props.dispatch}
				/>

			</main>
	)
}

export default App;
