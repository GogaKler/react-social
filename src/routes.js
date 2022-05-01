import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {PreloaderCirclePage} from './components/Preloaders/Preloaders';
import ProfileContainer from './pages/Profile/ProfileContainer';

const Dialogs = React.lazy(() => import('./pages/Dialogs/Dialogs'));
const UsersContainer = React.lazy(() => import('./pages/Users/UsersContainer'));
const Login = React.lazy(() => import('./pages/Login/Login'));

export const useRoutes = () => {
    return (
        <Suspense fallback={<PreloaderCirclePage/>}>
            <Routes>
                <Route path={'/login/'} element={<Login/>}/>

                <Route path="/profile" element={<ProfileContainer/>}>
                    <Route path=":userId" element={<ProfileContainer/>}/>
                </Route>

                <Route path="/dialogs/" element={<Dialogs/>}/>

                <Route path="/users/" element={<UsersContainer/>}/>
            </Routes>
        </Suspense>
    );
};
