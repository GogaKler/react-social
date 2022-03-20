import styled from "styled-components/macro";
import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Formik } from "formik";
import { useState } from "react";
import { Button } from "../../../../components_styles/components/Button/Button";
import { FlexContainer } from "../../../../components_styles/components/Containers/Containers";
import { Input, InputWrapper } from "../../../../components_styles/components/Input/Input";
import { Description } from "../../../../components_styles/components/Text/Text";

const statusColor = ({ theme }) => theme.neutral.neutral30
const statusFontSize = '15px'
const statusFontStyle = 'italic'

const StatusWrapper = styled.div`
	margin: 10px 0;
	margin-left: ${({marginLeft}) => marginLeft || 0};
`
const StatusInput = styled(Input)`
	font-size: ${statusFontSize};
	font-style: ${statusFontStyle};
	color: ${statusColor};
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
						<Button transparent type='submit' onClick={toggleStatus}>
							<FontAwesomeIcon icon={faPencil} />
						</Button>

					</FlexContainer>
				</StatusWrapper>
				:
				<Formik initialValues={StatusValue} onSubmit={onSubmit} >
					{({ values, handleChange, handleBlur, handleSubmit }) => (
						<StatusWrapper>
							<Form onSubmit={handleSubmit}>
								<FlexContainer justify='space-between'>
									<InputWrapper margin='0 10px 0 0'>
										<StatusInput 
											name='status' onChange={handleChange}
											onBlur={handleBlur} autoFocus={true}
											value={values.status}
										/>
									</InputWrapper>
									<Button type='submit' >
										<FontAwesomeIcon icon={faPencil} beat />
									</Button>
									<Button onClick={toggleStatus} margin='0 0 0 5px'>
										<FontAwesomeIcon icon={faX} />
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