import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Formik } from "formik";
import { useState } from "react";
import styled from "styled-components";
import { Button, ButtonTransparent } from "../../../../components_styles/components/Button/Button";
import { FlexContainer } from "../../../../components_styles/components/Containers/Containers";
import { Description } from "../../../../components_styles/components/Text/Text";

const statusColor = ({ theme }) => theme.neutral.neutral30
const statusFontSize = '15px'
const statusFontStyle = 'italic'

const StatusWrapper = styled.div`
	margin: 10px 0;
	margin-left: ${({marginLeft}) => marginLeft || 0};
`
const StatusInputWrapper = styled.div`
	background-color: ${({ theme }) => theme.neutral.neutral80};
	border-radius: ${({theme}) => theme.radius.radiusLight};
	margin: 0 10px 0 0;
	width: 100%;
`
const StatusInput = styled.input`
	border: 0;
	background: none;
	outline: none;
	font-size: ${statusFontSize};
	font-style: ${statusFontStyle};
	color: ${statusColor};
	padding: 0 8px 0 8px;
	width: 100%;
`

const UsersStatus = (props) => {
	const [editMode, setEditMode] = useState(false);

	const toggleStatus = () => {
		!editMode ? setEditMode(true) : setEditMode(false)
	}

	const StatusValue = {
		status: props.status
	}

	const onSubmit = (value) => {
		props.updateUserStatus(value.status)
		toggleStatus();
	}

	return (
		<>
			{!editMode
				?
				<StatusWrapper marginLeft='5px'>
					<FlexContainer justify='space-between'>
						<Description FontStyle={statusFontStyle} textColor={statusColor} onDoubleClick={toggleStatus} FontSize={statusFontSize}>{props.status}</Description>
						<ButtonTransparent second type='submit' onClick={toggleStatus}>
							<FontAwesomeIcon icon={faPencil} />
						</ButtonTransparent>

					</FlexContainer>
				</StatusWrapper>
				:
				<Formik
					initialValues={StatusValue}
					onSubmit={onSubmit}
				>
					{({ values, handleChange, handleBlur, handleSubmit }) => (
						<StatusWrapper>
							<Form onSubmit={handleSubmit} className="login__form">
								<FlexContainer justify='space-between'>
									<StatusInputWrapper>
										<StatusInput 
											name='status' onChange={handleChange}
											onBlur={handleBlur} autoFocus={true}
											value={values.status}
										/>
									</StatusInputWrapper>
									<Button type='submit' >
										<FontAwesomeIcon icon={faPencil} beat />
									</Button>
								</FlexContainer>
							</Form>
						</StatusWrapper>

					)}
				</Formik>
			}
		</>
	);
}

export default UsersStatus;