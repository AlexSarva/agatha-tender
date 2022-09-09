import React, {useEffect, useState} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Main from './Main';
import api from '../utils/api';
import '../styles/Page.css'
import Signup from './Signup';
import Signin from './Signin';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import auth from '../utils/auth';

function App() {

    const history = useHistory();
    const [sidebarOpened, setSidebarOpened] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [searchValue, setSearchValue] = useState({query: ''});
    const [userName, setUserName] = useState(' ');

    function handleSidebar() {
        setSidebarOpened(!sidebarOpened);
    }

    function handleUpdateOrgInfo(query) {
        api.getOrganizationInfo(query)
            .then((orgInfo) => {
                // console.log(orgInfo);
                setSearchValue(orgInfo);
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })

        console.log(searchValue);

    }

    function handleSignup(email, password) {
        auth.register(email, password)
            .then((res) => {
                if (res.token) {
                    localStorage.setItem('jwt', res.token);
                    setLoggedIn(true);
                    history.push('/');
                }
            })
            .catch((err) => {
                console.log(err)
                // openAuthPopup(false);
            });
    }

    function handleSignin(email, password) {
        auth.authorize(email, password)
            .then((res) => {
                if (res.token) {
                    localStorage.setItem('jwt', res.token);
                    setLoggedIn(true);
                    history.push('/');
                }
            })
            .catch((err) => {
                console.log(err)
                // openAuthPopup(false);
            });
    }

    function handleTokenCheck() {
        if (localStorage.getItem('jwt')) {
            const jwt = localStorage.getItem('jwt');
            // проверяем токен пользователя
            auth.checkToken(jwt)
                .then((data) => {
                    setUserName(data.data.email);
                    setLoggedIn(true);
                    history.push('/');
                })
                .catch((err) => console.log(err))
        }
    }

    useEffect(() => {
        handleTokenCheck();
    },)

    return (
        <div className="page">
            <Header sidebarState={sidebarOpened}
                    onClickSidebar={handleSidebar}
                    onSubmitSearch={handleUpdateOrgInfo}
                    userName={userName}
                    loggedIn={loggedIn}
            />
            <SideBar sidebarState={sidebarOpened} loggedIn={loggedIn}/>
            <main className={`page__content ${sidebarOpened ? 'page__content_type_wide' : 'page__content_type_narrow'} ${!loggedIn && 'page__content_type_full'}`}>
                <Switch>
                    <ProtectedRoute exact path="/" loggedIn={loggedIn}
                                    sidebarState={sidebarOpened}
                                    searchValue={searchValue}
                                    component={Main}/>
                    <Route path="/register">
                        <Signup onSignup={handleSignup}/>
                    </Route>
                    <Route path="/login">
                        <Signin onSignin={handleSignin}/>
                    </Route>
                    <Route exact path="/">
                        {loggedIn ? <Redirect to="/"/> : <Redirect to="/login"/>}
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
