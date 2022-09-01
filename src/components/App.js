import '../index.css';
import React, {useState} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Main from './Main';
import api from '../utils/api';

function App() {

    const [sidebarOpened, setSidebarOpened] = useState(false);

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
            <Header sidebarState={sidebarOpened} onClickSidebar={handleSidebar} onSubmitSearch={handleUpdateOrgInfo}/>
            <SideBar sidebarState={sidebarOpened}/>
            <Main sidebarState={sidebarOpened} searchValue={searchValue}/>
        </div>
    );
}

export default App;
