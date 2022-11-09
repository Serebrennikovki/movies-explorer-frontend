import './MoviesCardSaved.css';
import poster from '../../images/picposter.png';

function MoviesCard(props){
    return(
        <li className='moviesCard'>
            <div className='moviesCard__conteiner'>
                <div className='moviesCard__textConteiner'>
                    <h2 className='moviesCard__title'>{props.card.nameRu}</h2>
                    <p className='moviesCard__duration'>{props.card.duration}</p>
                </div>
                <button className='moviesCard__buttonSave moviesCard__buttonDel'></button>
            </div>
            <img className='moviesCard__poster' alt={props.card.nameRu} src={poster}/>
        </li>
    )
}

export default MoviesCard; 