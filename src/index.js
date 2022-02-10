import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import ReactDOM from 'react-dom';
import App from './App';
// css 
import './css/global_styles.css';

let DialogsItemData = [
	{ id: "1", name: "Егор Колесников" },
	{ id: "2", name: "Кристина Костикова" },
	{ id: "3", name: "Евгений Козлов" },
	{ id: "4", name: "Валерий Меладзе" },
	{ id: "5", name: "PRO100 ПЕРСИК" },
];

let MessagesData = [
	{ id: "1", name: "Егор Колесников", message: "Привет!" },
	{ id: "2", name: "Кристина Костикова", message: "Периск, блять!!!" },
	{ id: "3", name: "Евгений Козлов", message: "Ля, дота суперская же" },
	{ id: "4", name: "Валерий Меладзе", message: "Самба белого..." },
	{ id: "5", name: "PRO100 ПЕРСИК", message: "Бля, а я че, Кристин, че я то блять" },
]

let PostData = [
	{id: "1", name: "Егор Колесников", post__title: "Изучаем ReactJs", post__desc: "Интересная штука"},
	{id: "2", name: "Егор Колесников", post__title: "Продолжаем обучение..", post__desc: "Сегодня уже поинтреснее"},
	{id: "3", name: "Егор Колесников", post__title: "1:49", post__desc: "устал."},
	{id: "3", name: "Егор Колесников", post__title: "Похоже понял (.map)", post__desc: "Продолжаем нэхооооой"},
]

ReactDOM.render(
  	<App 
			DialogsItemData={DialogsItemData}
			MessagesData={MessagesData}
			PostData={PostData}
		/>,
  document.getElementById('root')
);