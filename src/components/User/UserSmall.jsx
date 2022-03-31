import { connect } from "react-redux";
import { FlexContainer } from "../../components_style/components/Containers/Containers";
import { Title } from "../../components_style/components/Text/Text";
import UserAvatar from "../UserAvatar/UserAvatar";



const UserSmall = ({userName}) => {
	return (
			<FlexContainer align='center'>
				<UserAvatar size={'32px'}/>
				<Title FontSize = '16px' fontWeight='500'>{userName}</Title>
			</FlexContainer>
	);
}
 
const mapStateToProps = (state) => {
	return{
		userName: state.auth.login
	}
}

export default connect(mapStateToProps)(UserSmall);