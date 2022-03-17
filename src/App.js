import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components_styles/GlobalStyles/GlobalStyles";
import { darkTheme, lightTheme } from "./components_styles/Themes/Theme";
import Points from "./components/Points/Points";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";

export const App = (props) => {
	const [theme, setTheme] = useState("dark");

	const switchTheme = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	};

	return (
		<main>
			<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
				<GlobalStyles />
				<Routes>
					<Route path="/login/"
						element={<Login />}
					/>
				</Routes>
				<Points  switchTheme={switchTheme} theme={theme} store={props.store} />
			</ThemeProvider>
		</main>
	)
}

export default App;


