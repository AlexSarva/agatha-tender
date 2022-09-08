import React, {useState} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Main from './Main';
import api from '../utils/api';
import '../styles/Page.css'
import Signup from './Signup';

function App() {

    const [sidebarOpened, setSidebarOpened] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    function handleSidebar() {
        setSidebarOpened(!sidebarOpened);
    }

    const [searchValue, setSearchValue] = useState({query: ''})

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

    return (
        <div className="page">
            <Header sidebarState={sidebarOpened}
                    onClickSidebar={handleSidebar}
                    onSubmitSearch={handleUpdateOrgInfo}
                    loggedIn={loggedIn}
            />
            <SideBar sidebarState={sidebarOpened} loggedIn={loggedIn}/>
            <main className={`page__content ${sidebarOpened ? 'page__content_type_wide' : 'page__content_type_narrow'} ${!loggedIn && 'page__content_type_full'}`}>
                {/*<Main sidebarState={sidebarOpened} searchValue={searchValue}/>*/}
                <Signup />
            </main>

        </div>
    );
}

export default App;
