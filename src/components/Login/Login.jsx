import { Field, Form, Formik } from "formik";
import React from "react";
import styled from 'styled-components';
import * as yup from 'yup'
import { AppName } from "../common/AppName/AppName";


const StyleText = styled.h1`
	width: 100%;
	text-align: center;
	color: #fff;
	margin-bottom: 15px;
	padding-bottom: 15px;
	border-bottom: 1px solid var(--accent-colorText50);
	color: ${({theme}) => theme.secondary.secondary90};
`
const Login = (props) => {
	
	const ValidationSchema = yup.object().shape({
		login: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
		password: yup.string().typeError('Должно быть строкой').required('Обязательное поле')
	})

	const LoginValues = {
		login: '',
		password: '',
	}

	return (
		<>
			<div className="login">
				<AppName size={'xxl'} margin='0 0 25px 0'/>
				<StyleText>Войдите в свою Учётную Запись</StyleText>

				<Formik
					initialValues={LoginValues}
					validateOnBlur
					onSubmit={(value) => { console.log(value) }}
					validationSchema={ValidationSchema}
				>
					{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
						<Form onSubmit={handleSubmit} className="login__form">
							<div className="login__label-wrapper">
								<label htmlFor='login' className="login__label">Логин</label>
								{touched.login && errors.login && <span className="login__error">{errors.login}</span>}
							</div>
							<Field className="login__input"
								type='login'
								name='login'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.login}
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

export default Login;