import Points from "./components/Points/Points";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components_styles/GlobalStyles/GlobalStyles";
import { darkTheme, lightTheme } from "./components_styles/Themes/Theme";
import { initializeApp } from "./redux/app_reducer";
import { PreloaderGhost } from './components/common/Preloaders/Preloaders';
import HeaderContainer from './components/Header/HeaderContainer';


export const App = (props) => {
	const [theme, setTheme] = useState("dark");
	const switchTheme = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	};

	useEffect(() => {
		props.initializeApp();
	}, [])

	if (!props.initialized){
		return (
			<PreloaderGhost />
		)
	}
	return (
		<main>
			<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
				<GlobalStyles />
				<HeaderContainer switchTheme={switchTheme} theme={theme} />
				<Points  switchTheme={switchTheme} theme={theme} store={props.store} />
			</ThemeProvider>
		</main>
	)
}

const mapStateToProps = (state) => {
	return{
		initialized: state.app.initialized
	}
}

export default connect(mapStateToProps, {initializeApp})(App);


