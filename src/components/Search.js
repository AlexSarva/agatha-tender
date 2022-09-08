import {useState} from 'react';
import '../styles/Search.css';


function Search(props) {

    const [active, setActive] = useState(false);
    const [query, setQuery] = useState('');

    function activeSearch() {
        setActive(true);
    }

    function inactiveSearch() {
        setActive(false);
    }

    function handleQuery(e) {
        setQuery(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onSubmitSearch({
            query: query
        });

        setQuery('');
        setActive(false);
    }

    return (
        <div className={`search ${active && 'search_type_wide'}`} onMouseOver={activeSearch} onMouseOut={inactiveSearch}>
            <div className={`search__icon ${active && 'search__icon_hidden'}`}></div>
            <form onSubmit={handleSubmit}
                  className="search__form"
                  name="search-form" noValidate>
                <fieldset className="search__field-set">
                    <input value={query} type="text" className="search__input" onChange={handleQuery}
                           placeholder="ИНН или ОКПД"
                           required
                           name="search-input"/>
                </fieldset>
            </form>
        </div>
    )
}

export default Search;