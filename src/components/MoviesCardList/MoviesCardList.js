import { useEffect, useState } from 'react';
import './MoviesCardList.css';
import { SETTINGS_VIEW_CARD} from '../../utils/constants';

function MoviesCardList({path, filmsArray, MoviesCard, saveFilm, deleteFilm}){
    const savedFilmsStorage = JSON.parse(localStorage.getItem('savedFilms'));
    const savedFilms = Boolean( savedFilmsStorage) ? savedFilmsStorage : [];
    const [ lastNumberRenderElement, setLastRenderElement ] = useState(0);
    const [ displayDataArray, setDisplayDataArray ] = useState([]);
    const [ widthDisplay, setWidthDisplay ] = useState(0);
    const [ amountCardsToLoad, setAmountCardsToLoad ] = useState(0);
    const [ totalAmountCardsOnPage, setTotalAmountCardsOnPage ] = useState(0);
    const [ isVisibleButton, setIsVisibleButton ] = useState(true);
    let windowInnerWidth;

    useEffect(()=>{
        checkWidthDisplay()
        const timer = setInterval(()=>checkWidthDisplay(),3000);
        return()=> clearInterval(timer);
    }, []);

    useEffect(()=>{
        setDisplayDataArray(filmsArray.slice(0, totalAmountCardsOnPage));
        setLastRenderElement(totalAmountCardsOnPage);
        if(filmsArray.length <= totalAmountCardsOnPage){
            setIsVisibleButton(false);
        } else {
            setIsVisibleButton(true);
        }
    },[filmsArray, widthDisplay]);


    function checkWidthDisplay(){
        windowInnerWidth = window.innerWidth;
        if( windowInnerWidth !== widthDisplay){
            setWidthDisplay(windowInnerWidth);
            if(windowInnerWidth>=1200){
                setAmountCardsToLoad(SETTINGS_VIEW_CARD.desktop.add);
                setTotalAmountCardsOnPage(SETTINGS_VIEW_CARD.desktop.max);
            } else if (windowInnerWidth<=700){
                setAmountCardsToLoad(SETTINGS_VIEW_CARD.mobile.add);
                setTotalAmountCardsOnPage(SETTINGS_VIEW_CARD.mobile.max);
            } else {
                setAmountCardsToLoad(SETTINGS_VIEW_CARD.tablet.add);
                setTotalAmountCardsOnPage(SETTINGS_VIEW_CARD.tablet.max);
            }
        }
}

     function addPicture(){
        let lastIndex = lastNumberRenderElement + amountCardsToLoad;
        let array = displayDataArray.concat(filmsArray.slice(lastNumberRenderElement, lastNumberRenderElement+amountCardsToLoad));
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
                <button type='button' className='movieCardList__button' style={isVisibleButton ? {} : {display:'none'}} onClick={addPicture}>Ещё</button>
            </div>
        </section>
    )
}
export default MoviesCardList;