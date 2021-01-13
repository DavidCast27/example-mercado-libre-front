import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import search from '../../assets/search/ic_Search@2x.png.png';
import './SearchBar.scss';

const INPUT_PLACEHOLDER = 'Nunca dejes de buscar';


function getSearchCriteria(e, setSearchCriteria) {
    const searchCriteria = e.target.value;
    setSearchCriteria(searchCriteria);
}

function searchItems (e, history, searchCriteria ) {
    e.preventDefault();
    const search = searchCriteria
        .trim();
    if(search) {
        history.push(`/items?search=${search}`);
    } 
}

function SearchBar({ className }) {
    const [searchCriteria, setSearchCriteria] = useState('');
    const history = useHistory();

    return (
        <form className={className}
            onSubmit={(e) => searchItems(e, history, searchCriteria)} >
            <input className="searchbar__input"
                placeholder={INPUT_PLACEHOLDER}
                aria-label="Search Robots"
                onChange={(e) => getSearchCriteria(e, setSearchCriteria)}
                type='search' />
            <button className="searchbar__button button"
                type='submit' >
                <img className="button__icon"
                    alt="search-icon"
                    src={search} />
            </button>
        </form>
    );
}

export default SearchBar;
