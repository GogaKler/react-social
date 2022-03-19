import styled from "styled-components";
import { Form, Formik } from "formik";
import { useState } from "react";
import { Button } from "../../../../components_styles/components/Button/Button";
import { FlexContainer, PositionContainer } from '../../../../components_styles/components/Containers/Containers';
import { Description, Title } from "../../../../components_styles/components/Text/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "styled-components";
import { Input, InputWrapper } from "../../../../components_styles/components/Input/Input";


const PostsWrapper = styled.div`
	width: 100%;
`
const NewPostWrapperAnimation = keyframes`
	0%{	
		right: 0;
		top: 30px;
		padding: 15px;
		width: 0;
		opacity: 0;
		}
	100%{	
		right: 0;
		top: 30px;
		padding: 15px;
		width: 60%;
		opacity: 1;
	}
`
const NewPostWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 30px;
	padding: 15px;
	width: 60%;
	overflow: hidden;
	animation: ${NewPostWrapperAnimation};
	animation-duration: 0.5s;
  animation-fill-mode: forwards;
	background-color: ${({ theme }) => theme.neutral.neutral70};
	border-radius:  ${({ theme }) => theme.radius.radiusHard};
	transition: ${({ theme }) => theme.transitions.transitionDefault};
`
const Post = styled.div`
	padding: 25px 0;
	border-top: 1px solid ${({ theme }) => theme.neutral.neutral70};
	&:last-child{
		border-bottom: 1px solid ${({ theme }) => theme.neutral.neutral70};
	}
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

	return (
		<PostsWrapper>
			<PositionContainer pos='relative'>
				<FlexContainer padding='0 0 25px 0' justify='space-between'>
					<Title>Какой-то текст</Title>
					{!editMode ? <Button onClick={toggleMode}>Новый пост</Button> :
						<>
							<Button onClick={toggleMode}>
								<FontAwesomeIcon icon={faCommentDots} fade />
							</Button>
							<NewPostWrapper >
									<Formik
										initialValues={PostValues}
										onSubmit={(value) => {
											console.log(value)
											toggleMode();
										}}
									>

										{({ values, handleChange, handleBlur, handleSubmit }) => (
											<Form onSubmit={handleSubmit} >
												<FlexContainer direction='column' fWrap='wrap'>
													<Description space='nowrap'>Название поста</Description>
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

			<Post>Пост</Post>
			<Post>Пост</Post>
			<Post>Пост</Post>
			<Post>Пост</Post>
		</PostsWrapper>
	);
}

export default Posts;