import './NavTab.css';

function NavTab(){
    return(
        <nav>
            <ul className='navTab'>
                <li className='navTab__cell'><a className='navTab__link' href='#aboutProject'>
                    <p className='navTab__text'>О проекте</p></a></li>
                <li className='navTab__cell'><a className='navTab__link' href='#techs'>
                    <p className='navTab__text'>Технологии</p></a></li>
                <li className='navTab__cell'><a className='navTab__link' href='#aboutMe'>
                    <p className='navTab__text'>Студент</p></a></li>
            </ul>
        </nav>
        
    )
}

export default NavTab;