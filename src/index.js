// css 
import './css/global_styles.css';
import state, { addPost } from './redux/state'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import ReactDOM from 'react-dom';
import App from './App';



export let renderFunc = () => {
	ReactDOM.render(
		<App
			state={state} addPost={addPost}
		/>,
		document.getElementById('root')
	);
}

renderFunc();