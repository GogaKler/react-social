import preloaderGhost from '../../assets/preloaders/preloaderGhost.gif'
import { FlexContainer } from '../../components_style/components/Containers/Containers'

export const PreloaderGhost = (props) => {
	return (
		<FlexContainer align='center' justify='center' fWrap='wrap'>
			<img src={preloaderGhost} alt="preloader" />
		</FlexContainer>
	)
}

