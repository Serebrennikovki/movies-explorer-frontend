import './MoviesCard.css';
import { BASE_URL_MOVIES } from '../../utils/data';
import { useState, useEffect } from 'react';

function MoviesCard({film, savedFilms, saveFilm, deleteFilm}){
    const linkImage = BASE_URL_MOVIES+film.image.url;
    const linkThumbnail = BASE_URL_MOVIES+film.image.formats.thumbnail.url;
    const [ viewButton, setViewButton ] = useState(false);
    const [ cardFilm, setCardFilm ]  = useState({
        'country': film.country,
        'director' : film.director,
        'duration' : Number(film.duration),
        'year' : String(film.year),
        'description': film.description,
        'image': linkImage,
        'trailerLink' : film.trailerLink,
        'thumbnail' : linkThumbnail,
        'movieId'  : film.id,
        'nameRU' : film.nameRU,
        'nameEN' : film.nameEN,
    });
    const cardSavedButtonClassName =`${ viewButton ? 'moviesCard__buttonSave_type_active' : 'moviesCard__buttonSave_type_inactive'} moviesCard__buttonSave`;
    const duration = {
        minutes: film.duration%60,
        hours : Math.floor(film.duration/60)
    }

    useEffect(()=>{
        if(Boolean(savedFilms)){
            let element = savedFilms.find((item)=> item.movieId === cardFilm.movieId);
            if(Boolean(element)){
                setCardFilm(element);
                setViewButton(true);
            }    
        }
    },[])
    

    function addFilm(cardFilm){
        saveFilm(cardFilm)
        .then((res)=>{ cardFilm = res})
        .catch((err)=>{console.log(err)})
    }

    function handleClick(e){
        if(e.target.classList.contains('moviesCard__buttonSave_type_active')){
            deleteFilm(cardFilm._id);
            setViewButton(!viewButton);
        } else {
            addFilm(cardFilm);
            setViewButton(!viewButton);
        }
    }

    return(
            <li className='moviesCard'>
                <div className='moviesCard__conteiner'>
                    <a className='moviesCard__textConteiner' href={cardFilm.trailerLink} target='_target'>
                        <h2 className='moviesCard__title'>{cardFilm.nameRU}</h2>
                        <p className='moviesCard__duration'>{ duration.hours > 0 ? `${duration.hours}ч` : '' }{duration.minutes}м</p>
                    </a>
                    <button type='button' className={cardSavedButtonClassName} onClick={(e)=>handleClick(e)}></button>
                </div>
                <a  className='moviesCard__link' target='_target' href={cardFilm.trailerLink}>
                    <img className='moviesCard__poster' alt={cardFilm.nameRU} src={cardFilm.image}/>
                </a>      
        </li>
    )
}

export default MoviesCard; 