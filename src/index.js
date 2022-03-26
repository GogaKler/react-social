import React from 'react';
import ReactDOM from 'react-dom';
// css 
import './assets/Fonts/fonts.scss'
import './css/global_styles.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
// Redux - store
import store from "./redux/redux-store";
import { Provider } from 'react-redux';
//Libraries
import { BrowserRouter } from "react-router-dom";
// Main Component
import App from './App';
import { darkTheme, lightTheme } from './components_style/Themes/Theme';


// Объявление переменной Ре-Рендера
ReactDOM.render(
	<BrowserRouter>
		<Provider store={store} >
			<App />
		</Provider>
	</BrowserRouter>, document.getElementById('root')
);


