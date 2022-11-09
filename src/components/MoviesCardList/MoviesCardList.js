import './MoviesCardList.css';
//import MoviesCard from '../MoviesCard/MoviesCard';
import img from '../../images/picposter.png';

function MoviesCardList({MoviesCard}){
    const card = {
        'nameRu': '33 слова о дизайне',
        'duration': '1ч 47м',
        'poster': {img},
    };
    return(
        <section className='movieCardList'>
            <ul className='movieCardList__table'>
                <MoviesCard
                card = {card}
                isSavedFilm = {false}
                />
                <MoviesCard
                card = {card}
                isSavedFilm = {true}
                />
                <MoviesCard
                card = {card}
                isSavedFilm = {true}
                />
                <MoviesCard
                card = {card}
                isSavedFilm = {false}
                />
                <MoviesCard
                card = {card}
                isSavedFilm = {true}
                />
                <MoviesCard
                card = {card}
                isSavedFilm = {true}
                />
                <MoviesCard
                card = {card}
                isSavedFilm = {true}
                />
                <MoviesCard
                card = {card}
                isSavedFilm = {false}
                />
                <MoviesCard
                card = {card}
                isSavedFilm = {false}
                />
                <MoviesCard
                card = {card}
                isSavedFilm = {false}
                />
                <MoviesCard
                card = {card}
                isSavedFilm = {true}
                />
                <MoviesCard
                card = {card}
                isSavedFilm = {false}
                />
            </ul>
        </section>
    )
}
export default MoviesCardList;