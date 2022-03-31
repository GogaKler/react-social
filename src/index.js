import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import store from "./redux/redux-store";
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import './assets/Fonts/fonts.css'
import App from './App';

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container);

root.render(
	<HashRouter>
		<Provider store={store} >
			<App />
		</Provider>
	</HashRouter>
)
