import preloaderGhost from '../../assets/preloaders/preloaderGhost.gif'
import { FlexContainer } from '../../components_style/components/Containers/Containers'
import { Description } from '../../components_style/components/Text/Text'

export const PreloaderGhost = () => (
	<FlexContainer align='center' justify='center' fWrap='wrap'>
		<img src={preloaderGhost} alt="preloader" />
	</FlexContainer>
)

export const PreloaderGhostPage = () => (
	<FlexContainer height='90vh' align='center' justify='center'>
		<PreloaderGhost />
		<Description fontSize='25px' margin='0 0 0 10px'>Загрузка...</Description>
	</FlexContainer>
)
