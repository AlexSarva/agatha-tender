import '../styles/Sidebar.css';

function SideBar(props) {
    return (
        <div className={`sidebar ${props.sidebarState ? 'sidebar_type_wide' : 'sidebar_type_narrow'} ${!props.loggedIn && 'sidebar_type_hidden'}`}>
        </div>
    )
}

export default SideBar;