import styled from "styled-components/macro";
import { Form, Formik } from "formik";
import { useState } from "react";
import { Button } from "../../../../components_styles/components/Button/Button";
import { FlexContainer, PositionContainer } from '../../../../components_styles/components/Containers/Containers';
import { Description, Title } from "../../../../components_styles/components/Text/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "styled-components";
import { Input, InputWrapper } from "../../../../components_styles/components/Input/Input";
import { Search } from "../../../common/Search/Search";
import Post from "../Post/Post";


const NewPostWrapperAnimation = keyframes`
	0%{	
		right: 0;
		top: -15px;
		padding: 15px;
		width: 0;
		opacity: 0;
		}
	100%{	
		right: 0;
		top: -15px;
		padding: 15px;
		width: 60%;
		opacity: 1;
	}
`
const NewPostWrapper = styled.div`
	position: absolute;
	overflow: hidden;
	animation: ${NewPostWrapperAnimation};
	animation-duration: 0.4s;
  animation-fill-mode: forwards;
	background-color: ${({ theme }) => theme.neutral.neutral80};
	border-radius:  ${({ theme }) => theme.radius.radiusHard};
	box-shadow: -9px 13px 21px -6px rgba(0, 0, 0, 0.5);
	transition: ${({ theme }) => theme.transitions.transitionDefault};
`
const NewPostHeaderFlex = styled(FlexContainer)`
	border-bottom: 1px solid ${({ theme }) => theme.neutral.neutral50};
	padding-bottom: 10px;
`

const Posts = (props) => {
	const [editMode, setEditMode] = useState(false)
	const toggleMode = () => {
		!editMode ? setEditMode(true) : setEditMode(false)
	}

	const PostValues = {
		title: '',
		desc: '',
	}
	const onSubmitForm = (value) => {
		props.addPost(value.title, value.desc)
		toggleMode();
	}
	return (
		<>
			<PositionContainer pos='relative'>
				<FlexContainer padding='0 0 20px 0' justify='space-between' align='center'>
					<Search width='100%' margin='0 15px 0 0' />
					{!editMode ? <Button transparent second onClick={toggleMode} padding='7px'>Новый пост</Button> :
						<>
							<NewPostWrapper >
								<NewPostHeaderFlex justify='space-between' margin='0 0 15px 0'>
									<Title space='nowrap'>Опубликуйте новый пост!</Title>
									<Button onClick={toggleMode}>
										<FontAwesomeIcon icon={faCommentDots} fade />
									</Button>
								</NewPostHeaderFlex>
								
								<Formik initialValues={PostValues} onSubmit={onSubmitForm} >
									{({ values, handleChange, handleBlur, handleSubmit }) => (
										<Form onSubmit={handleSubmit} >
											<FlexContainer direction='column' fWrap='wrap'>
												<Description space='nowrap'>Заголовок</Description>
												<InputWrapper margin='5px 0'>
													<Input name='title'
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.title} />
												</InputWrapper>
												<Description>Описание</Description>
												<InputWrapper margin='5px 0 10px 0'>
													<Input
														name='desc'
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.desc}
													/>
												</InputWrapper>
												<FlexContainer self='flex-end'>
													<Button
														type="submit"
													>Отправить</Button>
												</FlexContainer>
											</FlexContainer>
										</Form>
									)}
								</Formik>
							</NewPostWrapper>
						</>
					}
				</FlexContainer>
			</PositionContainer>
			<Post posts={props.posts} name={props.name} />
		</>
	);
}

export default Posts;