import './AboutMe.css';
import myPhoto from '../../images/myPhoto.png';

function AboutMe(){
    return(
        <section id='aboutMe' className='aboutMe'>
            <h2 className='aboutMe_title'>Технологии</h2>
            <div className='aboutMe__about'>
                <div className='aboutMe__description'>
                    <div>
                        <h3 className='aboutMe__name'>Константин</h3>
                        <p className='aboutMe__profession'>Фронтенд-разработчик, 27 лет</p>
                        <p className='aboutMe__history'>Я родился и живу в Екатеринбурге, закончил факультет ИРИТ-РтФ Урфу. У меня есть жена. Я люблю заниматься спортом. Недавно начал кодить. 
    С 2015 года разрабатывал электронику. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    </div>
                    <a className='aboutMe__git' href='https://github.com/Serebrennikovki'>Github</a>
                </div>
                <img src={myPhoto} className='aboutMe__photo' alt='фото разработчика'/>
            </div>
        </section>
    )
}

export default AboutMe;