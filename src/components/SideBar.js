function SideBar(props) {
    return (
        <div className={`sidebar ${props.sidebarState ? 'sidebar_type_wide' : 'sidebar_type_narrow'}`}>
        </div>
    )
}

export default SideBar;