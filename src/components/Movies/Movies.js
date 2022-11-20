import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { getAllFilms }  from '../../utils/MoviesApi';
import { useEffect, useState } from 'react';
import { DURATION_SHORT_FILMS , BASE_URL_MOVIES, TEXT_ERRORS} from '../../utils/data';
import Preloader from '../Preloader/Preloader';


function Movies({openBM, addFilm, deleteFilm, loggedIn}){
    const [ isLoading, setIsLoading ] = useState(false);
    const [ keyWord, setKeyWord ] = useState('');
    const [ isShortFilm, setShortFilm] = useState(false);
    const [ sortingArrayFilms, setSortingArrayFilms ] = useState([]);
    const [ errorSearchText, setErrorSearchText ] = useState('');



    useEffect(()=>{ 
        if(JSON.parse(localStorage.getItem('MoviesCardList'))){
            setSortingArrayFilms(JSON.parse(localStorage.getItem('MoviesCardList')));
            setShortFilm(localStorage.getItem('isToggled'));
            setKeyWord(localStorage.getItem('keyWord'));
            if(localStorage.getItem('keyWord') !== ''){
                handleEmptyArray(JSON.parse(localStorage.getItem('MoviesCardList')).length);
            }  
        }     
    },[])

    useEffect(()=>{
        localStorage.setItem('MoviesCardList', JSON.stringify(sortingArrayFilms));
        localStorage.setItem('keyWord', keyWord);
        localStorage.setItem('isToggled', isShortFilm);
    }, [sortingArrayFilms])

    function getFilms(searchWord, stateCheckbox){
        if(searchWord === keyWord && stateCheckbox === isShortFilm){
            return;
        } else if(JSON.parse(localStorage.getItem('allFilms'))){
            setKeyWord(searchWord);
            setShortFilm(stateCheckbox);
            sortFilms(searchWord, stateCheckbox, JSON.parse(localStorage.getItem('allFilms')));
        } else {
            setIsLoading(true);
            getAllFilms(BASE_URL_MOVIES+'/beatfilm-movies')
                .then((res)=>{
                    setKeyWord(searchWord);
                    setShortFilm(stateCheckbox);
                    sortFilms(searchWord, stateCheckbox, res);
                    localStorage.setItem('allFilms', JSON.stringify(res));
                    })
                .catch(()=>setErrorSearchText(TEXT_ERRORS.search.error))
                .finally(()=>setIsLoading(false))
        }    
    }

    function sortFilms(keyWord, isShortFilm, array){
        const keyWordLower = keyWord.toLowerCase();
        array = array.filter((film)=>{
            if(film.nameRU.toLowerCase().includes(keyWordLower)){
                return true;
            } else {
                return false;
            }
        });
        handleEmptyArray(array.length);
        setSortingArrayFilms(array);
        if( isShortFilm ){
            getShortFilms(array);
        };      
    }

    function getShortFilms(array = sortingArrayFilms){
       array = array.filter( film => film.duration < DURATION_SHORT_FILMS);
       setSortingArrayFilms(array);
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


    return(
        <div className='movies'>
            <Header
            path='movies'
            openBurgerMenu = {openBM}
            loggedIn={loggedIn}/>
            <main>
               
                <SearchForm
                path='movies'
                submitForm = {getFilms}
                isLoadingFilms = {isLoading}
                sortShortFilms={getShortFilms}
                />
                {
                    isLoading
                    ? 
                    <Preloader/>
                    :
                        (
                        sortingArrayFilms.length === 0 ?
                        <h3 className='movies__text'>{errorSearchText}</h3>
                        :
                        <MoviesCardList
                            path='movies'
                            filmsArray = {sortingArrayFilms}
                            MoviesCard={MoviesCard}
                            saveFilm={addFilm}
                            deleteFilm={deleteFilm}
                        />
                        )
                }
                
            </main>
            <Footer/>
        </div>

    )
        
        
}

export default Movies;