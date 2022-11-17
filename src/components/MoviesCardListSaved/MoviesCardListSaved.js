import { useEffect } from 'react';
import { useState } from 'react';
import './MoviesCardListSaved.css';
import MoviesCardSaved from '../MoviesCardSaved/MoviesCardSaved';

function MoviesCardListSaved({ filmsArray, deleteFilm}){
    const [ displayDataArray, setDisplayDataArray ] = useState([]);
    const [ widthDisplay, setWidthDisplay ] = useState(0);
    const [ totalAmountCardsOnPage, setTotalAmountCardsOnPage ] = useState(0);


    useEffect(()=>{
        let windowInnerWidth;
        const timer = setInterval(()=>{
            windowInnerWidth = window.innerWidth;
            console.log(windowInnerWidth);
            if( windowInnerWidth !== widthDisplay){
                setWidthDisplay(windowInnerWidth);
                if(windowInnerWidth>=1200){
                    setTotalAmountCardsOnPage(12);
                } else if (windowInnerWidth<=700){
                    setTotalAmountCardsOnPage(5);
                } else {
                    setTotalAmountCardsOnPage(8);
                }
            }
        },5000);

        return()=> clearInterval(timer);
    }, []);

    useEffect(()=>{       
        renderCards();
    },[filmsArray, totalAmountCardsOnPage]);

    function renderCards(){
        if(filmsArray.length > totalAmountCardsOnPage){
            console.log(filmsArray.length);
            setDisplayDataArray(filmsArray.slice(totalAmountCardsOnPage, filmsArray.length));
        } else {
            setDisplayDataArray(filmsArray);
        }
    }
    



    return(
        <section className='movieCardList'>
            <ul className='movieCardList__table'>
                {  
                    displayDataArray.map((item) => {
                        return <MoviesCardSaved 
                        film={item} 
                        key={item._id} 
                        deleteFilm={deleteFilm}
                        />
                    })
                }
            </ul>
            <div className='movieCardList__buttonConteiner'>
                {
                    
                }
            </div>
        </section>
    )
}
export default MoviesCardListSaved;