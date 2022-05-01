import { connect } from 'react-redux';
import styled from 'styled-components';
import UserSmall from '../../components/User/UserSmall';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import { Container, FlexCol, FlexContainer } from '../../components_style/components/Containers/Containers';
import { Title } from '../../components_style/components/Text/Text';
import DialogsSendForm from './DialogsSendForm/DialogsSendForm';
import { sendMessage } from './../../redux/dialogs_reducer';
import { compose } from 'redux';
import { withAuthRedirect } from './../../hoc/hoc';

const DialogsWrapperFlex = styled(FlexContainer)`
    margin-top: 20px;
    height: 90vh;
`;
const LeftColumnWrapper = styled.div`
    border: 1px solid ${({ theme }) => theme.neutral.neutral70};
    width: 100%;
    border-radius: ${({ theme }) => theme.radius.radiusLight};
`;
const RighColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.neutral.neutral70};
    width: 100%;
    border-radius: ${({ theme }) => theme.radius.radiusLight};
`;
const ChatHeader = styled.div`
    padding: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.primary.primary90};
`;
const ChatBody = styled.div`
    flex: 1 0 auto;
`;
const CurrentUserFlex = styled(FlexContainer)`
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.neutral.neutral70};
    transition: ${({ theme }) => theme.transitions.transitionFast};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.neutral.neutral80};
    }
`;

const Dialogs = ({ userName, sendMessage, myMessage }) => {
    return (
        <Container>
            <DialogsWrapperFlex>
                <FlexCol flex="1 0 25%">
                    <LeftColumnWrapper>
                        <CurrentUserFlex align="center">
                            <UserAvatar size="35px" margin="0 8px 0 0" />
                            <Title FontSize="16px" fontWeight="400">
                                Петька
                            </Title>
                        </CurrentUserFlex>
                    </LeftColumnWrapper>
                </FlexCol>
                <FlexCol flex="1 0 75%">
                    <RighColumnWrapper>
                        <ChatHeader>
                            <FlexContainer align="center">
                                <UserSmall />
                            </FlexContainer>
                        </ChatHeader>
                        <ChatBody>Coming Soon...</ChatBody>
                        <DialogsSendForm />
                    </RighColumnWrapper>
                </FlexCol>
            </DialogsWrapperFlex>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        myMessage: state.dialogs.myMessages,
        userName: state.auth.login,
    };
};

export default compose(withAuthRedirect, connect(mapStateToProps, { sendMessage }))(Dialogs);
