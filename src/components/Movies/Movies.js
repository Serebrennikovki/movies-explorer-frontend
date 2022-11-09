import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies({openBM}){
    return(
        <div className='movies'>
            <Header
            openBurgerMenu = {openBM}/>
            <SearchForm/>
            <MoviesCardList
            path='movies'
            MoviesCard={MoviesCard}
            />
            <div className='movies__buttonConteiner'>
                <button type='button' className='movies__button'>Ещё</button>
            </div>
            <Footer/>
        </div>
    )
        
        
}

export default Movies;