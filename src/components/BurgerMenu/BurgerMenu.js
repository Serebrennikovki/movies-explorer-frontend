import './BurgerMenu.css';
import logoAccount from '../../images/profilelogoAccount-min.svg';

function BurgerMenu({path, isOpened, closeBM}){
    return(
        <div className={`burgerMenu ${isOpened ? 'burgerMenu_opened': ''}`}>
            <div className='burgerMenu__overlay' onClick={closeBM}></div>
            <div className='burgerMenu__window'>
                <button type='button' className='burgerMenu__btnClose' onClick={closeBM}></button>
                <nav className='burgerMenu__navigation'>
                    <ul className='burgerMenu__items'>
                        <li className={`burgerMenu__item ${path==='main' ? 'burgerMenu__item_type_choosen': ''}`}><a className= 'burgerMenu__link' href='/'>Главная</a></li>
                        <li className={`burgerMenu__item ${path==='movies' ? 'burgerMenu__item_type_choosen': ''}`}><a className='burgerMenu__link' href='/movies'>Фильмы</a></li>
                        <li className={`burgerMenu__item ${path==='savedMovies' ? 'burgerMenu__item_type_choosen': ''}`}><a className='burgerMenu__link ' href='/saved-movies'>Сохранённые фильмы</a></li>
                        <li className='burgerMenu__item'><a className='burgerMenu__link burgerMenu__link_type_account' href='/profile'>
                            <img src={logoAccount} className='burgerMenu__logoAcc' alt='логотип'/>
                            </a></li>
                    </ul>                    
                </nav>
            </div> 
        </div>
    )
}
export default BurgerMenu;