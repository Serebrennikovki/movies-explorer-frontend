import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCardSaved from '../MoviesCardSaved/MoviesCardSaved';

function SavedMovies({openBM}){
    return(
        <div className='SavedMovies'>
            <Header
            openBurgerMenu = {openBM}/>
            <main>
                <SearchForm/>
                <MoviesCardList
                MoviesCard={MoviesCardSaved}
                />
            </main>
            <Footer/>
        </div>
        
    )
}
export default SavedMovies;