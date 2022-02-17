import React from 'react';
import ReactDOM from 'react-dom';
// css 
import './css/global_styles.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap-grid.min.css';

// Redux - store
import store from "./redux/redux-store";

//Libraries
import { BrowserRouter } from "react-router-dom";

// Main Component
import App from './App';


// Объявление переменной Ре-Рендера, где state - параметр
let rerenderState = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App store={store} />
		</BrowserRouter>, document.getElementById('root')
	);
}
// Вызов функции Ре-Рендер. По сути state = store.getState()
rerenderState(store.getState());

// Передаем CallBack в store. observer = Ре-Рендер
store.subscribe(() => { rerenderState(store.getState()) });


