import './SavedMovies.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardListSaved from '../MoviesCardListSaved/MoviesCardListSaved';
import { DURATION_SHORT_FILMS ,  TEXT_ERRORS} from '../../utils/data';

function SavedMovies({openBM, getFilms, deleteSavedFilm, loggedIn}){
    const [ savedArrayFilms, setSavedArrayFilms ] = useState([]);
    const [ searchedArrayFilms, setSearchedArrayFilms ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isShortFilm, setShortFilm] = useState(false);
    const [ errorSearchText, setErrorSearchText ] = useState('');

    useEffect(()=>{
            getFilms()
            .then((res)=>{
                localStorage.setItem('savedFilms',JSON.stringify(res));
                setSavedArrayFilms(res);
                setSearchedArrayFilms(res);})
            .catch((err)=>{console.log(err)})
    },[])


    function sortFilms(keyWord, isShortFilm){
        setIsLoading(true);
        let array = savedArrayFilms;
        const keyWordLower = keyWord.toLowerCase();
        array = array.filter((film)=>{
            if(film.nameRU.toLowerCase().includes(keyWordLower)){
                return true;
            } else {
                return false;
            }
            setIsLoading(false);
        });
        handleEmptyArray(array.length);
        setSearchedArrayFilms(array);
        if( isShortFilm ){
            getShortFilms(array);
        };      
        setIsLoading(false);
    }

    function getShortFilms(array = savedArrayFilms){
       array = array.filter( film => film.duration < DURATION_SHORT_FILMS);
       setSearchedArrayFilms(array);
       setShortFilm(true);
       handleEmptyArray(array.length);
    }

    function handleEmptyArray(lengthArray){
        setIsLoading(false);
        if (lengthArray === 0 ){
            setErrorSearchText(TEXT_ERRORS.search.empty);
        } else {
            setErrorSearchText('');
        }
    }

    function handleDeleteFilm(film){
        deleteSavedFilm(film._id)
            .then(()=>{
            let array = savedArrayFilms.filter((item) => {
              if(!(item._id === film._id)){
                return item;}
            });
            setSavedArrayFilms(array);
            setSearchedArrayFilms(array);
            localStorage.setItem('savedFilms',JSON.stringify(array));
          })
            .catch((error)=>{console.log(error);})
    }


    return(
        <div className='moviesSaved'>
            <Header
            path='savedMovies'
            openBurgerMenu = {openBM}
            loggedIn={loggedIn}/>
            <main>
                <SearchForm
                 path='savedMovies'
                 submitForm = {sortFilms}
                 isLoadingFilms = {isLoading}
                 sortShortFilms={getShortFilms}/>
               
                    {
                        searchedArrayFilms.length === 0 ?
                        <h3 className='moviesSaved__text'>{errorSearchText}</h3>
                        :
                        <MoviesCardListSaved
                        deleteFilm={handleDeleteFilm}
                        filmsArray={searchedArrayFilms}
                        />
                    }
                        
            </main>
            <Footer/>
        </div>
        
    )
}
export default SavedMovies;