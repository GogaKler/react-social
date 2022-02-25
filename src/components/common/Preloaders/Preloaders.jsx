import preloaderGhost from '../../../assets/preloaders/preloaderGhost.gif'
import './Preloaders.css'


export const PreloaderGhost = (props) => {
	return (
		<div className="preloader-wrapper">
			<img className="preloaderGhost preloader" src={preloaderGhost} alt="preloader" />
		</div>
	)
}

