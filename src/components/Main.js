import '../styles/Main.css';

function Main(props) {
    return (
        <div className={`main`} >
            <div className="main__container">{props.searchValue.short_name || ''}</div>
        </div>
    )
}

export default Main;