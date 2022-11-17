import { useEffect } from 'react';
import { useState } from 'react';
import './MoviesCardList.css';

function MoviesCardList({path, filmsArray, MoviesCard, saveFilm, deleteFilm}){
    const savedFilmsStorage = JSON.parse(localStorage.getItem('savedFilms'));
    const savedFilms = Boolean( savedFilmsStorage) ? savedFilmsStorage : [];
    const [ lastNumberRenderElement, setLastRenderElement ] = useState(0);
    const [ displayDataArray, setDisplayDataArray ] = useState([]);
    const [ widthDisplay, setWidthDisplay ] = useState(0);
    const [ amountCardsToLoad, setAmountCardsToLoad ] = useState(0);
    const [ totalAmountCardsOnPage, setTotalAmountCardsOnPage ] = useState(0);
    const [ isVisibleButton, setIsVisibleButton ] = useState(true);


    useEffect(()=>{
        let windowInnerWidth;
        const timer = setInterval(()=>{
            windowInnerWidth = window.innerWidth;
            if( windowInnerWidth !== widthDisplay){
                setWidthDisplay(windowInnerWidth);
                if(windowInnerWidth>=1200){
                    setAmountCardsToLoad(3);
                    setTotalAmountCardsOnPage(12);
                } else if (windowInnerWidth<=700){
                    setAmountCardsToLoad(2);
                    setTotalAmountCardsOnPage(5);
                } else {
                    setAmountCardsToLoad(2);
                    setTotalAmountCardsOnPage(8);
                }
            }
        },5000);

        return()=> clearInterval(timer);
    }, []);

    useEffect(()=>{
        setDisplayDataArray(filmsArray.slice(0, amountCardsToLoad));
        setLastRenderElement(amountCardsToLoad);
        if(filmsArray.length <= amountCardsToLoad){
            setIsVisibleButton(false);
        } else {
            setIsVisibleButton(true);
        }
    },[filmsArray, widthDisplay]);


     function addPicture(){
        let lastIndex = lastNumberRenderElement + amountCardsToLoad;
        let array = displayDataArray.concat(filmsArray.slice(lastNumberRenderElement, lastNumberRenderElement+amountCardsToLoad));
        if(array.length > totalAmountCardsOnPage){
            array.splice(0, totalAmountCardsOnPage);
        }
        setDisplayDataArray(array);
        setLastRenderElement(lastIndex);
        if(lastIndex >= filmsArray.length){
            setIsVisibleButton(false);
        }
     }

    return(
        <section className='movieCardList'>
            <ul className='movieCardList__table'>
                { 
                    
                    displayDataArray.map((item) => {
                        return <MoviesCard 
                        film={item} 
                        key={item.id} 
                        savedFilms={savedFilms}
                        saveFilm={saveFilm}
                        deleteFilm={deleteFilm}
                        />
                    })
                }
            </ul>
            <div className='movieCardList__buttonConteiner'>
                {
                    path === 'movies' ?
                    (
                        <button type='button' className='movieCardList__button' style={isVisibleButton ? {} : {display:'none'}} onClick={addPicture}>Ещё</button>
                    )
                    :
                    ('')
                }
            </div>
        </section>
    )
}
export default MoviesCardList;