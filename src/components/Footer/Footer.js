import './Footer.css';

function Footer(){
    return(
        <footer className='footer'>
            <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className='footer__conteiner'>
                <p className='footer__coopyright'>@2022</p>
                <div className='footer__links'>
                    <a className='footer__link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
                    <a className='footer__link' href='https://github.com/Serebrennikovki'>Github</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;