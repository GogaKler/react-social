import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components_styles/GlobalStyles/GlobalStyles";
import { darkTheme, lightTheme } from "./components_styles/Themes/Theme";
import Points from "./components/Points/Points";
import { getAuthUser } from "./redux/auth_reducer";
import { connect } from "react-redux";

export const App = (props) => {
	const [theme, setTheme] = useState("dark");

	useEffect(() => {props.getAuthUser()})

	const switchTheme = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	};


	return (
		<main>
			<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
				<GlobalStyles />
				<Points  switchTheme={switchTheme} theme={theme} store={props.store} />
			</ThemeProvider>
		</main>
	)
}

export default connect(null, {getAuthUser})(App);


