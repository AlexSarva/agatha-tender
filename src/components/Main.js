function Main(props) {
    return (
        <div className={`main ${props.sidebarState ? 'main_type_wide' : 'main_type_narrow'}`} >
            <div className="main__container">{props.searchValue.short_name || ''}</div>
        </div>
    )
}

export default Main;