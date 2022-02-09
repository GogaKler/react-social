import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Points from "./components/Points/Points";

function App() {
	return (
		<BrowserRouter>
			<main>
				{/* header */}
				<Header />
				{/* Points */}
				<Points />
			</main>
		</BrowserRouter>
	)
}

export default App;
