import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/redux-store";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import './assets/Fonts/fonts.scss'
import App from './App';

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);

root.render(
	<BrowserRouter>
		<Provider store={store} >
			<App />
		</Provider>
	</BrowserRouter>
)
