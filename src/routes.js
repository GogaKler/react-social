import { Route, Routes } from "react-router-dom"
import Dialogs from "./pages/Dialogs/Dialogs"
import Login from "./pages/Login/Login"
import ProfileContainer from "./pages/Profile/ProfileContainer"
import UsersContainer from "./pages/Users/UsersContainer"

export const useRoutes = () => {
	return (
		<Routes>
			<Route path={"/login/"} element={<Login />} />
				
			<Route path="/profile" element={<ProfileContainer />}>
				<Route path=":userId" element={<ProfileContainer />} />
			</Route>

			<Route path="/dialogs/" element={<Dialogs />} />

			<Route path="/users/" element={<UsersContainer />} />
		</Routes>
	)
}