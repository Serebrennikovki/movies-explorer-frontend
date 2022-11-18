import './Header.css';
import logo from '../../images/logo-min.svg';
import logoAccount from '../../images/profilelogoAccount-min.svg';
import imgBurgerMenu from '../../images/mainburgerMenu-min.svg'
import { Link} from 'react-router-dom';

function Header({path, openBurgerMenu, loggedIn}){
    return(
        <header>
            {
                loggedIn ?
                (<div className='header'>
                    <div className='header__container'>
                        <a className='header__linkImg' href='/'><img className='header__logo' src={logo} alt='лого'/></a>
                        <div className='header__films'>
                            <Link to='/movies' className='header__film'>Фильмы</Link>
                            <Link to='/saved-movies' className='header__film'>Сохранённые фильмы</Link>
                        </div>
                    </div>
                    <Link to='/profile' className='header__account'>
                        <img className='header__accountImg' src={logoAccount} alt='иконка'/>
                    </Link>
                    <button type='button' className='header__burgerMenu' onClick={()=>{openBurgerMenu(path)}}>
                        <img src={imgBurgerMenu} className='header__imgBurgerMenu' alt='кнопка'/>
                    </button>
                </div>   
                ) : (
                <div className='header'>
                    <a className='header__linkImg' href='/'><img className='header__logo' src={logo} alt='лого'/></a>
                    <div className='header__links'>
                        <Link to='/signup' className='header__link header__link_type_signup'>Регистрация</Link>
                        <Link to='/signin' className='header__link header__link_type_signin'><p className='header__text'>Войти</p></Link>
                    </div>
                </div>
                )

            }
           
        </header>
)
}
export default Header;