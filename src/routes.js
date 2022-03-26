import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Dialogs from "./pages/Dialogs/Dialogs"
import Login from "./pages/Login/Login"
import ProfileContainer from "./pages/Profile/ProfileContainer"
import UsersContainer from "./pages/Users/UsersContainer"
import './css/login-point.css'
import './css/profile-point.css'

const AppWrapper = styled.div`
	padding-top: 58px;
`
export const useRoutes = () => {
	return (
		<AppWrapper>
			<Routes>
				<Route path={"/login/"} element={<Login />} />

				<Route path="/profile" element={<ProfileContainer />}>
					<Route path=":userId" element={<ProfileContainer />} />
				</Route>

				<Route path="/dialogs/" element={<Dialogs />} />

				<Route path="/users/" element={<UsersContainer />} />
			</Routes>
		</AppWrapper>
	)
}