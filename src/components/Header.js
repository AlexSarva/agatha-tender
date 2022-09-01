import Logo from './Logo';
import sidebarOpenedIcon from '../images/sidebar/sidebar-wide.svg';
import sidebarClosedIcon from '../images/sidebar/sidebar-narrow.svg';
import Search from './Search';

function Header(props) {
    return (
        <div className="header">
            <button type="button" onClick={props.onClickSidebar} className="header__sidebar-toggle button"
                    value="sidebar" name="sidebar-toggle"
                    style={{backgroundImage: `${props.sidebarState ? `url(${sidebarOpenedIcon})` : `url(${sidebarClosedIcon})`}`}}></button>

            <Logo />
            <Search onSubmitSearch={props.onSubmitSearch}/>
        </div>
    )
}

export default Header