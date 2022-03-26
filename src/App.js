import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components_style/GlobalStyles/GlobalStyles";
import { darkTheme, lightTheme } from "./components_style/Themes/Theme";
import { initializeApp } from "./redux/app_reducer";
import { PreloaderGhost } from './components/Preloaders/Preloaders';
import HeaderContainer from './components/Header/HeaderContainer';
import { useRoutes } from './routes';


export const App = (props) => {
	const Routes = useRoutes();
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
				{Routes}
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


