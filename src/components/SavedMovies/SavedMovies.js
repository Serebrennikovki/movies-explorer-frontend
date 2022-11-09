import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCardSaved from '../MoviesCardSaved/MoviesCardSaved';

function SavedMovies(){
    return(
        <div className='SavedMovies'>
            <Header/>
            <SearchForm/>
            <MoviesCardList
            MoviesCard={MoviesCardSaved}
            />
            <Footer/>
        </div>
        
    )
}
export default SavedMovies;