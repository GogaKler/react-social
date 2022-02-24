import Points from "./components/Points/Points";
import { SidebarContainer } from "./components/Sidebar/SidebarContainer";

function App(props) {
	return (
			<main>
				<SidebarContainer />
				
				<Points store={props.store} />

			</main>
	)
}

export default App;
