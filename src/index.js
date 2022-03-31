import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import store from "./redux/redux-store";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import './assets/Fonts/fonts.scss'
import App from './App';

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container);

root.render(
	<BrowserRouter>
		<Provider store={store} >
			<App />
		</Provider>
	</BrowserRouter>
)
