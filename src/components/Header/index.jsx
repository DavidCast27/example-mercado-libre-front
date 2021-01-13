import SearchBar from '../SearchBar';
import logo from '../../assets/logo/Logo_ML@2x.png.png';
import { useHistory } from 'react-router-dom';
import './Header.scss';

function Header() {
    const history = useHistory();
    return (
        <header className="header">
            <img className="header__logo"
                onClick={() => history.push('/')}
                alt="mercado-libre-logo"
                src={logo} />
            <SearchBar className="header__searchbar  searchbar" />
        </header>
    );
}

export default Header;
