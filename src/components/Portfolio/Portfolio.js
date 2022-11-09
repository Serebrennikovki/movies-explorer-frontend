import './Portfolio.css';

function Portfolio(){
    return(
        <section className='portfolio'>
            <h3 className='portfolio__subtitle'>Портфолио</h3>
            <ul className='portfolio__works'>
                <li className='portfolio__work'>
                    <a className='portfolio_link' href='https://github.com/Serebrennikovki/how-to-learn'>
                        <p className='portfolio__nameLink'>Статичный сайт</p>
                        <p className='portfolio__arrow'>↗</p>
                    </a>
                </li>
                <li className='portfolio__work'>
                    <a className='portfolio_link' href='https://serebrennikovki.github.io/russian-travel/index.html'>
                        <p className='portfolio__nameLink'>Адаптивный сайт</p>
                        <p className='portfolio__arrow'>↗</p>
                    </a>
                </li>
                <li className='portfolio__work'>
                    <a className='portfolio_link' href='https://github.com/Serebrennikovki/react-mesto-auth'>
                        <p className='portfolio__nameLink'>Одностраничное приложение</p>
                        <p className='portfolio__arrow'>↗</p>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;