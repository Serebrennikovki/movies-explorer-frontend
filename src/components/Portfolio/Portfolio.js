import './Portfolio.css';

function Portfolio(){
    return(
        <section className='portfolio'>
            <h3 className='portfolio__subtitle'>Портфолио</h3>
            <ul className='portfolio__works'>
                <li className='portfolio__work'>
                    <a className='portfolio_link' href='https://github.com/Serebrennikovki/how-to-learn' target='_blank' rel="noreferrer">
                        <p className='portfolio__nameLink'>Статичный сайт</p>
                        <p className='portfolio__arrow'>↗</p>
                    </a>
                </li>
                <li className='portfolio__work'>
                    <a className='portfolio_link' href='https://serebrennikovki.github.io/russian-travel/index.html' target='_blank' rel="noreferrer">
                        <p className='portfolio__nameLink'>Адаптивный сайт</p>
                        <p className='portfolio__arrow'>↗</p>
                    </a>
                </li>
                <li className='portfolio__work'>
                    <a className='portfolio_link' href='https://github.com/Serebrennikovki/react-mesto-auth' target='_blank' rel="noreferrer">
                        <p className='portfolio__nameLink'>Одностраничное приложение</p>
                        <p className='portfolio__arrow'>↗</p>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;