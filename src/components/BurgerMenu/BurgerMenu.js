import './BurgerMenu.css';
import logoAccount from '../../images/profilelogoAccount-min.svg';
import { NavLink } from 'react-router-dom';

function BurgerMenu({path, isOpened, closeBM}){
    return(
        <div className={`burgerMenu ${isOpened ? 'burgerMenu_opened': ''}`}>
            <div className='burgerMenu__overlay' onClick={closeBM}></div>
            <div className='burgerMenu__window'>
                <button type='button' className='burgerMenu__btnClose' onClick={closeBM}></button>
                <nav className='burgerMenu__navigation'>
                    <ul className='burgerMenu__items'>
                        <li className='burgerMenu__item'><NavLink className='burgerMenu__link' exact to='/' activeClassName='burgerMenu__item_type_choosen' onClick={closeBM}>Главная</NavLink></li>
                        <li className='burgerMenu__item'><NavLink className='burgerMenu__link' to='/movies' activeClassName='burgerMenu__item_type_choosen'onClick={closeBM}>Фильмы</NavLink></li>
                        <li className='burgerMenu__item'><NavLink className='burgerMenu__link ' to='/saved-movies' activeClassName='burgerMenu__item_type_choosen'onClick={closeBM}>Сохранённые фильмы</NavLink></li>
                        <li className='burgerMenu__item'><NavLink className='burgerMenu__link burgerMenu__link_type_account' to='/profile'>
                            <img src={logoAccount} className='burgerMenu__logoAcc' alt='логотип'/>
                            </NavLink></li>
                    </ul>                    
                </nav>
            </div> 
        </div>
    )
}
export default BurgerMenu;