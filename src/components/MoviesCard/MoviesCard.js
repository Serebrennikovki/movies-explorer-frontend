import './MoviesCard.css';
import poster from '../../images/picposter.png';

function MoviesCard(props){
    const viewButton = props.isSavedFilm ? 'moviesCard__buttonSave_type_active' : 'moviesCard__buttonSave_type_inactive' ;
    return(
        <li className='moviesCard'>
            <div className='moviesCard__conteiner'>
                <div className='moviesCard__textConteiner'>
                    <h2 className='moviesCard__title'>{props.card.nameRu}</h2>
                    <p className='moviesCard__duration'>{props.card.duration}</p>
                </div>
                <button className={`moviesCard__buttonSave ${viewButton}`}></button>
            </div>
            <img className='moviesCard__poster' alt={props.card.nameRu} src={poster}/>
        </li>
    )
}

export default MoviesCard; 