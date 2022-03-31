import { Field, Form, Formik } from "formik";
import React from "react";
import styled from 'styled-components';
import * as yup from 'yup'
import { Description } from '../../components_style/components/Text/Text'
import { FlexContainer, PositionContainer } from "../../components_style/components/Containers/Containers";
import { connect } from "react-redux";
import { login } from "../../redux/auth_reducer";
import { Navigate } from "react-router-dom";
import { Title } from '../../components_style/components/Text/Text';
import { AppName } from "../../components/AppName/AppName";
import { Button } from './../../components_style/components/Button/Button';
import './Login.css'

const StyleText = styled.h1`
	width: 100%;
	text-align: center;
	color: #fff;
	margin-bottom: 15px;
	padding-bottom: 15px;
	border-bottom: 1px solid var(--accent-colorText50);
	color: ${({ theme }) => theme.secondary.secondary90};
`
const WrapperLogin = styled(PositionContainer)`
	padding: 10px;
	background-color: ${({ theme }) => theme.neutral.neutral80};
	border-radius: ${({ theme }) => theme.radius.radiusHard};
	border: 1px solid ${({ theme }) => theme.primary.primary90};
`

const Login = ({isAuth, login}) => {

	const ValidationSchema = yup.object().shape({
		email: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
		password: yup.string().typeError('Должно быть строкой').required('Обязательное поле')
	})

	const LoginValues = {
		email: '',
		password: '',
		rememberMe: false,
	}

	if (isAuth === true) return <Navigate to='/profile' />

	return (
		<div className="login">
			<WrapperLogin pos='absolute' right='400px' top='350px'>
				<Title margin='0 0 5px 0'>Тестовые данные</Title>
				<Description>Email: &nbsp;aestharm@gmail.com</Description>
				<Description>Пароль: &nbsp;qwerty1234</Description>
			</WrapperLogin>
			<AppName size={'xxl'} margin='0 0 25px 0' />
			<StyleText>Войдите в Учётную Запись</StyleText>

			<Formik
				initialValues={LoginValues}
				validateOnBlur
				onSubmit={(value) => { login(value.email, value.password, value.rememberMe) }}
				validationSchema={ValidationSchema}
			>
				{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
					<Form onSubmit={handleSubmit} className="login__form">
						<div className="login__label-wrapper">
							<label htmlFor='email' className="login__label">Email</label>
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
							<FlexContainer align='center' margin='0 0 15px 0'>
								<Field type="checkbox" name="rememberMe" />
								<Description margin='0 0 0 5px'>Запомнить меня</Description>
							</FlexContainer>
						</label>
						<Button md
							type="submit"
							disabled={!isValid && !dirty}
						>Войти</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps, { login })(Login)