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
				<Points store={props.store} />

			</main>
	)
}

export default App;
