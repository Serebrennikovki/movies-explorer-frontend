import './MoviesCardSaved.css';
import {BASE_URL_MOVIES} from '../../utils/data';

function MoviesCardSaved({film, deleteFilm}){
    const duration = {
        minutes: film.duration%60,
        hours : Math.floor(film.duration/60)
    }
    function handleButton(){
        deleteFilm(film);
    }

    return(
        <li className='moviesCardSaved'>
            <div className='moviesCardSaved__conteiner'>
                <a target='_target' href={film.trailerLink} className='moviesCardSaved__textConteiner'>
                    <h2 className='moviesCardSaved__title'>{film.nameRU}</h2>
                    <p className='moviesCardSaved__duration'>{ duration.hours > 0 ? `${duration.hours}ч` : '' }{duration.minutes}м</p>
                </a>
                <button type='button' className='moviesCardSaved__buttonSaved moviesCardSaved__buttonDel' onClick={handleButton}></button>
            </div>
            <a  className='moviesCardSaved__link' target='_target' href={film.trailerLink}>
                    <img className='moviesCardSaved__poster' alt={film.nameRU} src={film.image}/>
            </a> 
        </li>
    )
}

export default MoviesCardSaved; 