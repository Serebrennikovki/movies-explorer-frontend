import './SavedMovies.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardListSaved from '../MoviesCardListSaved/MoviesCardListSaved';
import { DURATION_SHORT_FILMS ,  TEXT_ERRORS} from '../../utils/data';

function SavedMovies({openBM, getFilms, deleteSavedFilm, loggedIn}){
    const [ savedArrayFilms, setSavedArrayFilms ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isShortFilm, setShortFilm] = useState(false);
    const [ errorSearchText, setErrorSearchText ] = useState('');

    useEffect(()=>{
        setIsLoading(true);
        getFilms()
            .then((res)=>{setSavedArrayFilms(res)})
            .catch((err)=>{console.log(err)})
            .finally(()=>setIsLoading(false))
    },[])

    useEffect(()=>{
        localStorage.setItem('savedFilms',JSON.stringify(savedArrayFilms))
    },[savedArrayFilms])


            

    function sortFilms(keyWord, isShortFilm){
        setShortFilm(isShortFilm);
        let array = savedArrayFilms;
        const keyWordLower = keyWord.toLowerCase();
        array = array.filter((film)=>{
            if(film.nameRU.toLowerCase().includes(keyWordLower) || film.description.toLowerCase().includes(keyWordLower)){
                return true;
            } else {
                return false;
            }
        });
        handleEmptyArray(array.length);
        setSavedArrayFilms(array);
        if( isShortFilm ){
            getShortFilms(array);
        };      
    }

    function getShortFilms(array = savedArrayFilms){
       array = array.filter( film => film.duration < DURATION_SHORT_FILMS);
       setSavedArrayFilms(array);
       setShortFilm(true);
       handleEmptyArray(array.length);
    }

    function handleEmptyArray(lengthArray){
        if (lengthArray === 0 ){
            setErrorSearchText(TEXT_ERRORS.search.empty);
        } else {
            setErrorSearchText('');
        }
    }

    function handleDeleteFilm(film){
        deleteSavedFilm(film._id)
            .then(()=>{setSavedArrayFilms(savedArrayFilms.filter((item) => {
              if(!(item._id === film._id)){
                return item;}
            }))
          })
            .catch((error)=>{console.log(error);})
    }


    return(
        <div className='SavedMovies'>
            <Header
            openBurgerMenu = {openBM}
            loggedIn={loggedIn}/>
            <main>
                <SearchForm
                 path='savedMovies'
                 submitForm = {sortFilms}
                 isLoadingFilms = {isLoading}
                 sortShortFilms={getShortFilms}/>
               
                    {
                        savedArrayFilms === null ?
                        <h3 className='movies__text'>{errorSearchText}</h3>
                        :
                        <MoviesCardListSaved
                        deleteFilm={handleDeleteFilm}
                        filmsArray={savedArrayFilms}
                        />
                    }
                        
            </main>
            <Footer/>
        </div>
        
    )
}
export default SavedMovies;