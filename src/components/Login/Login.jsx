import { Field, Form, Formik } from "formik";
import React from "react";
import styled from 'styled-components';
import * as yup from 'yup'
import { AppName } from "../common/AppName/AppName";
import { Description } from '../../components_styles/components/Text/Text'
import { FlexContainer } from "../../components_styles/components/Containers/Containers";
import { connect } from "react-redux";
import { login } from "../../redux/auth_reducer";
import { Navigate } from "react-router-dom";


const StyleText = styled.h1`
	width: 100%;
	text-align: center;
	color: #fff;
	margin-bottom: 15px;
	padding-bottom: 15px;
	border-bottom: 1px solid var(--accent-colorText50);
	color: ${({ theme }) => theme.secondary.secondary90};
`

const Login = (props) => {

	const ValidationSchema = yup.object().shape({
		email: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
		password: yup.string().typeError('Должно быть строкой').required('Обязательное поле')
	})

	const LoginValues = {
		email: '',
		password: '',
		rememberMe: false,
	}
	
	if (props.isAuth === true ) return <Navigate to ='/profile' />

	return (
		<>
			<div className="login">
				<AppName size={'xxl'} margin='0 0 25px 0' />
				<StyleText>Войдите в свою Учётную Запись</StyleText>

				<Formik
					initialValues={LoginValues}
					validateOnBlur
					onSubmit={(value) => {props.login(value.email, value.password, value.rememberMe)}}
					validationSchema={ValidationSchema}
				>
					{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
						<Form onSubmit={handleSubmit} className="login__form">
							<div className="login__label-wrapper">
								<label htmlFor='email' className="login__label">E-маил</label>
								{touched.email && errors.email && <span className="login__error">{errors.email}</span>}
							</div>
							<Field className="login__input"
								type='email'
								name='email'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>

							<div className="login__label-wrapper">
								<label htmlFor='password' className="login__label">Пароль</label>
								{touched.password && errors.password && <span className="login__error">{errors.password}</span>}
							</div>
							<Field className="login__input"
								type='password'
								name='password'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
							<label>
								<FlexContainer align='center'>
									<Field type="checkbox" name="rememberMe" />
									<Description margin='0 0 0 5px'>Запомнить меня</Description>
								</FlexContainer>
							</label>
							<button
								type="submit"
								disabled={!isValid && !dirty}
								className='login__button button'
							>Войти</button>

						</Form>
					)}
				</Formik>
			</div>
		</>
	);
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps, {login})(Login)